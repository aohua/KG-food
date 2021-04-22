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
                RETURN ID(n), n.name, n.dish, n.image
                ORDER BY n.dish
                '''
            ))
        db = get_db()
        result = db.read_transaction(get_dishes)
        print(result[0])
        return [serialise_dish(record) for record in result]

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
        

def serialise_dish(dish):
    return {
        'id': dish['ID(n)'],
        'name': dish['n.name'],
        'dish': dish['n.dish']
    }

api.add_resource(Dish, '/dish')
api.add_resource(IngredientDish, '/ingredient_dish')
api.add_resource(SimilarItems, '/similar_items')

if __name__ == '__main__':
    app.run(debug=True)