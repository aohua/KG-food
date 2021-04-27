from flask import Flask, g, request
from flask_restful import reqparse, abort, Api, Resource
from flask_json import FlaskJSON, json_response
from flask_cors import CORS
from neo4j import GraphDatabase, basic_auth
import pymongo
import json

# flask RESTful setup
app = Flask(__name__)
api = Api(app)

CORS(app)
FlaskJSON(app)

# mongo db connection
client = pymongo.MongoClient("127.0.0.1:27017")
mongodb = client['kg_food_orders']
order_collection = mongodb['order']

# neo4j db connection
DATABASE_USERNAME = 'neo4j'
DATABASE_PASSWORD = 'asdf'
DATABASE_URL = 'bolt://localhost'
driver = GraphDatabase.driver(DATABASE_URL, auth=basic_auth(
    DATABASE_USERNAME, str(DATABASE_PASSWORD)))


def get_db():
    if not hasattr(g, 'neo4j_db'):
        g.neo4j_db = driver.session()
    return g.neo4j_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'neo4j_db'):
        g.neo4j_db.close()

# objects / APIs


class Order(Resource):
    def post(self):
        orders = request.get_json()  # this will be in an array form

        def add_complements(tx, namel, namer):
            tx.run(
                '''
                MATCH (n:Dish {name: $namel}),(m:Dish {name: $namer})
                MERGE (n)-[r:COMPLEMENTS]->(m)
                ON CREATE SET r.count = 1
                ON MATCH SET r.count = r.count + 1
                RETURN r.count
                ''', namel=namel, namer=namer)
        for order in orders:
            orderFromDB = order_collection.find_one({"_id": order["id"]})
            if orderFromDB is None:
                order_collection.insert_one(order)
                # create new relationship or increase count
                db = get_db()
                for i in range(len(order["dishes"]) - 1):
                    result = db.write_transaction(
                        add_complements, order["dishes"][i]["name"], order["dishes"][i+1]["name"])
        return {'status': 'done'}


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
        dish_record = {'id': -1}
        for record in result:
            if dish_record['id'] != record['ID(n)']:
                if dish_record['id'] != -1:
                    serialise_dish.append(dish_record)
                dish_record = {'id': record['ID(n)'], 'name': record['n.name'], 'category': record['n.category'],
                               'price': record['n.price'], 'image': record['n.image'], 'ingredients': []}
            if record['m.name'] is not None:
                ingredient = {
                    'id': record['ID(m)'], 'name': record['m.name'], 'gram': record['c.quantity']}
                dish_record['ingredients'].append(ingredient)

        serialise_dish.append(dish_record)  # last dish
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
                category_record = {
                    'category': record['n.category'], 'dishes': []}

            dish = {'id': record['ID(n)'], 'name': record['n.name']}
            category_record['dishes'].append(dish)

        serialise_category.append(category_record)  # last dish
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
        complementary_dish_record = {'id': -1}
        for record in result:
            if complementary_dish_record['id'] != record['ID(n)']:
                if complementary_dish_record['id'] != -1:
                    serialise_complementary_dish.append(
                        complementary_dish_record)
                complementary_dish_record = {
                    'id': record['ID(n)'], 'name': record['n.name'], 'complementary_dish': []}

            complement = {
                'id': record['ID(m)'], 'name': record['m.name'], 'count': record['o.count']}
            if len(complementary_dish_record['complementary_dish']) < 6:
                complementary_dish_record['complementary_dish'].append(
                    complement)

        serialise_complementary_dish.append(
            complementary_dish_record)  # last dish
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
        ingredient_record = {'id': -1}
        for record in result:
            if ingredient_record['id'] != record['ID(n)']:
                if ingredient_record['id'] != -1:
                    serialise_ingredient_dishes.append(ingredient_record)
                ingredient_record = {
                    'id': record['ID(n)'], 'name': record['n.name'], 'dish': []}

            dish = {'id': record['ID(m)'], 'name': record['m.name']}
            ingredient_record['dish'].append(dish)

        serialise_ingredient_dishes.append(ingredient_record)
        return serialise_ingredient_dishes


class SimilarItems(Resource):
    def get(self):
        def get_similar_items(tx):
            return list(tx.run(
                # '''
                # MATCH (n:Dish)-[:CONTAINS]->(m:Ingredient:Main)<-[:CONTAINS]-(o:Dish)
                # WHERE o <> n
                # RETURN ID(n), n.name , ID(m), m.name, ID(o), o.name
                # ORDER BY n.name
                # '''
                '''
                MATCH (n:Dish)-[p:CONTAINS]->(m:Ingredient)<-[:CONTAINS]-(o:Dish)
                WHERE o <> n
                RETURN ID(n), n.name , ID(m), m.name, p.quantity, ID(o), o.name
                ORDER BY n.name, p.quantity desc
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_similar_items)

        serialise_similar_items = []
        dish_record = {'id': -1}
        for record in result:
            if dish_record['id'] != record['ID(n)']:
                if dish_record['id'] != -1:
                    serialise_similar_items.append(dish_record)
                dish_record = {
                    'id': record['ID(n)'], 'name': record['n.name'], 'dish': []}

            dish = {'id': record['ID(o)'], 'name': record['o.name'],
                    'ingredient_id': record['ID(m)'], 'ingredient_name': record['m.name']}
            dish_record['dish'].append(dish)

        serialise_similar_items.append(dish_record)
        return serialise_similar_items



class Recommendation(Resource):
    def get(self):
        def get_recommendations(tx):
            return list(tx.run(
                '''
                MATCH (n:Dish) 
                RETURN ID(n), n.name, n.category, n.price, n.image, n.count
                ORDER BY n.count DESC
                LIMIT 20
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_recommendations)
        
        serialise_recommendation = []

        for record in result:
            recommendation_record = {'id': record['ID(n)'], 'name': record['n.name'], 'category': record['n.category'],
                'price': record['n.price'], 'image': record['n.image'], 'rank': record['n.count']}
                
            serialise_recommendation.append(recommendation_record)  # last dish
        
        return serialise_recommendation


api.add_resource(Dish, '/dish')
api.add_resource(Category, '/category')
api.add_resource(IngredientDish, '/ingredient_dish')
api.add_resource(SimilarItems, '/similar_items')
api.add_resource(ComplementaryItems, '/complementary_items')
api.add_resource(Order, '/order')
api.add_resource(Recommendation, '/recommendation')


if __name__ == '__main__':
    app.run(debug=True)