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