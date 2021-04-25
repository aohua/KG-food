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
DATABASE_PASSWORD = 'asdf'
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
                RETURN ID(n), n.name, n.category, n.price, n.image, c.quantity, ID(m), m.name
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
                ingredient = {'id': record['ID(m)'], 'name': record['m.name'], 'gram': record['c.quantity']}
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
        category_record = {'category': None}
        for record in result:
            if category_record['category'] != record['n.category']:
                if category_record['category'] is not None:
                    serialise_category.append(category_record)
                category_record = {'category': record['n.category'], 'dishes':[]}
        
            dish = {'id': record['ID(n)'], 'name': record['n.name']}
            category_record['dishes'].append(dish)
        
        serialise_category.append(category_record) # last dish
        return serialise_category

class ComplementaryItems(Resource):
    def get(self):
        def get_complementary_dishes(tx):
            return list(tx.run(
                '''
                MATCH (n:Dish)-[o:COMPLEMENTS]->(m:Dish)
                RETURN ID(n), n.name, ID(m), m.name, o.count
                ORDER BY n.name, o.count desc
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_complementary_dishes)

        serialise_complementary_dish = []
        complementary_dish_record = {'id':-1}
        for record in result:
            if complementary_dish_record['id'] != record['ID(n)']:
                if complementary_dish_record['id'] != -1:
                    serialise_complementary_dish.append(complementary_dish_record)
                complementary_dish_record = {'id': record['ID(n)'], 'name':record['n.name'],'complementary_dish':[]}
        
            complement = {'id': record['ID(m)'], 'name': record['m.name'], 'count': record['o.count']}
            complementary_dish_record['complementary_dish'].append(complement)
        
        serialise_complementary_dish.append(complementary_dish_record) # last dish
        return serialise_complementary_dish

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

        serialise_ingredient_dishes = []
        ingredient_record = {'id':-1}
        for record in result:
            if ingredient_record['id'] != record['ID(n)']:
                if ingredient_record['id'] != -1:
                    serialise_ingredient_dishes.append(ingredient_record)
                ingredient_record = {'id': record['ID(n)'], 'name':record['n.name'],'dish':[]}
        
            dish = {'id': record['ID(m)'], 'name': record['m.name']}
            ingredient_record['dish'].append(dish)
        
        serialise_ingredient_dishes.append(ingredient_record)
        return serialise_ingredient_dishes

class SimilarItems(Resource):
    def get(self):
        def get_similar_items(tx):
            return list(tx.run(
                '''
                MATCH (n:Dish)-[:CONTAINS]->(m:Ingredient:Main)<-[:CONTAINS]-(o:Dish)
                WHERE o <> n
                RETURN ID(n), n.name , ID(m), m.name, ID(o), o.name
                ORDER BY n.name
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_similar_items)

        serialise_similar_items = []
        dish_record = {'id':-1}
        for record in result:
            if dish_record['id'] != record['ID(n)']:
                if dish_record['id'] != -1:
                    serialise_similar_items.append(dish_record)
                dish_record = {'id': record['ID(n)'], 'name':record['n.name'],'dish':[]}
        
            dish = {'id': record['ID(o)'], 'name': record['o.name'], 'ingredient_id': record['ID(m)'], 'ingredient_name': record['m.name']}
            dish_record['dish'].append(dish)
        
        serialise_similar_items.append(dish_record)
        return serialise_similar_items

        # similar_items = {}
        # for record in result:
        #     if record['ID(n)'] not in similar_items:
        #         similar_items[record['ID(n)']] = []
        #     similar_items[record['ID(n)']].extend([record['ID(o)']])

        # return similar_items
    

api.add_resource(Dish, '/dish')
api.add_resource(Category, '/category')
api.add_resource(IngredientDish, '/ingredient_dish')
api.add_resource(SimilarItems, '/similar_items')
api.add_resource(ComplementaryItems, '/complementary_items')


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