// COMPLEMENTARY DISHES
MATCH (n:Dish:Fried),(m:Dish:NonFried)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Starter),(m:Drink:Alcohol)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Starter),(m:Dish:Meat)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Starter),(m:Dish:Seafood)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Starter),(m:Dish:Soup)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Meat),(m:Dish:Vegetable)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Meat),(m:Dish:Main)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Meat),(m:Dish:Drink)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Meat),(m:Dish:Dessert)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Main),(m:Dish:Dessert)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Main),(m:Dish:Drink)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Soup),(m:Dish:Meat)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Seafood),(m:Dish:Dessert)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Seafood),(m:Dish:Vegetable)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m

MATCH (n:Dish:Vegetable),(m:Dish:Drink)
MERGE (n)-[o:COMPLEMENTS]->(m)
ON CREATE SET o.count = 1
ON MATCH SET o.count = o.count + 1;
// RETURN n, o ,m