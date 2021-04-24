from flask import Flask, g
from flask_restful import reqparse, abort, Api, Resource
from flask_json import FlaskJSON, json_response
from flask_cors import CORS
from neo4j import GraphDatabase, basic_auth

# flask RESTful setup
app = Flask(__name__)
api = Api(app)

CORS(app)
FlaskJSON(app)

# db connection
DATABASE_USERNAME = 'neo4j'
DATABASE_PASSWORD = 'kg_food'
DATABASE_URL = 'bolt://localhost'
driver = GraphDatabase.driver(DATABASE_URL, auth=basic_auth(DATABASE_USERNAME, str(DATABASE_PASSWORD)))

def get_db():
    if not hasattr(g, 'neo4j_db'):
        g.neo4j_db = driver.session()
    return g.neo4j_db

@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'neo4j_db'):
        g.neo4j_db.close()

class Dish(Resource):
    def get(self):
        def get_dishes(tx):
            return list(tx.run(
                '''
                MATCH (n:Dish) 
                OPTIONAL MATCH (n)-[c:CONTAINS]->(m:Ingredient) 
                RETURN ID(n), n.name, n.category, n.price, n.image, c.quantity, m.name
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_dishes)
        print(result[0])
        # return [serialise_dish(record) for record in result]
        serialise_dish = []
        dish_record = {'id':-1}
        for record in result:
            if dish_record['id'] != record['ID(n)']:
                if dish_record['id'] != -1:
                    serialise_dish.append(dish_record)
                dish_record = {'id': record['ID(n)'], 'name':record['n.name'], 'category': record['n.category'], 'price': record['n.price'], 'image': record['n.image'], 'ingredients':[]}
            if record['m.name'] is not None:
                ingredient = {'name': record['m.name'], 'gram': record['c.quantity']}
                dish_record['ingredients'].append(ingredient)
        
        serialise_dish.append(dish_record) # last dish
        return serialise_dish


class Category(Resource):
    def get(self):
        def get_categories(tx):
            return list(tx.run(
                '''
                MATCH (n:Dish) 
                RETURN ID(n), n.name, n.category
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_categories)
        serialise_category = []
        category_record = {'category':None}
        for record in result:
            if category_record['category'] != record['n.category']:
                if category_record['category'] is not None:
                    serialise_category.append(category_record)
                category_record = {'category':record['n.category'], 'dishes':[]}
            
            dish = {'name': record['n.name']}
            category_record['dishes'].append(dish)
        
        serialise_category.append(category_record) # last category
        return serialise_category

class IngredientDish(Resource):
    def get(self):
        def get_ingredient_dishes(tx):
            return list(tx.run(
                '''
                MATCH (n:Ingredient:Main)-[:CONTAINS]-(m:Dish)
                RETURN n.name, ID(n), m.name, ID(m)
                ORDER BY n.name
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_ingredient_dishes)
        serialise_ingredient_dishes = {}
        for record in result:
            if record['ID(n)'] not in serialise_ingredient_dishes:
                serialise_ingredient_dishes[record['ID(n)']] = []
            serialise_ingredient_dishes[record['ID(n)']].extend([record['ID(m)']])

        return serialise_ingredient_dishes


class SimilarItems(Resource):
    def get(self):
        def get_similar_items(tx):
            return list(tx.run(
                '''
                MATCH (n:Dish)-[:CONTAINS]->(m:Ingredient:Main)<-[:CONTAINS]-(o:Dish)
                WHERE o.id <> n:id
                RETURN ID(n), m.name, ID(o)
                ORDER BY n.name
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_similar_items)
        similar_items = {}
        for record in result:
            if record['ID(n)'] not in similar_items:
                similar_items[record['ID(n)']] = []
            similar_items[record['ID(n)']].extend([record['ID(o)']])

        return similar_items
        

# def serialise_dish(dish):
#     return {
#         'id': dish['ID(n)'],
#         'name': dish['n.name'],
#         'dish': dish['n.dish'], 
#         'image': dish['n.image'],
#         'price': dish['n.price']
#     }

api.add_resource(Dish, '/dish')
api.add_resource(Category, '/category')
api.add_resource(IngredientDish, '/ingredient_dish')
api.add_resource(SimilarItems, '/similar_items')


if __name__ == '__main__':
    app.run(debug=True)

# TODO
# backend
# add some complementary relationships
# add new dish to neo4j (ingredients + dishes)
# upload orders -> store into mongoDB (order number + dish id + user id) -> covert to complementary relationship (by Aohua)

# frontend
# add dish form
# list order history
# similar items
# complementary items (Jeremy)