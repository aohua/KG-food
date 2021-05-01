// retrieve similar items based on main ingredients
MATCH (n:Dish)-[:CONTAINS]->(m:Ingredient:Main)<-[:CONTAINS]-(o:Dish)
WHERE o.id <> n:id
RETURN n.name, m.name, o.name
ORDER BY n.name

// retrive dishes based on main ingredients
MATCH (n:Ingredient:Main)-[:CONTAINS]-(m:Dish)
RETURN n.name, m.name
ORDER BY n.name

// return all items with categories
MATCH (n:Dish)
RETURN n.id, n.name, n.dish, n.image
ORDER BY n.name

// remove all items 
MATCH (n) DETACH DELETE n

// similar items
MATCH (n:Dish)-[p:CONTAINS]->(m:Ingredient:Main)<-[:CONTAINS]-(o:Dish)
WHERE o <> n AND n.name = "Claypot Yellow Croaker Soup"
RETURN n, m, o

// complementary
MATCH (n:Dish)-[o:COMPLEMENTS]->(m:Dish)
WHERE n.name = "Claypot Yellow Croaker Soup"
RETURN n, o, m
ORDER BY n.name, o.count desc

// top dishes
MATCH (n:Dish) 
RETURN ID(n), n.name, n.category, n.price, n.count
ORDER BY n.count DESC
LIMIT 8