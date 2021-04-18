// Restaurant
CREATE (putian:Restaurant {name: 'Pu Tian', category:'Chinese'})

// Ingredient
CREATE (chicken:Ingredient:Protein:Main {name: 'Chicken'})
CREATE (five_spice_powder:Ingredient:Dry {name: 'Five Spice Powder'})
CREATE (garlic:Ingredient:Dry {name: 'Garlic'})
CREATE (onion:Ingredient:Dry {name: 'Onion'})
CREATE (garlic_powder:Ingredient:Dry {name: 'Garlic Powder'})
CREATE (salt:Ingredient:Dry {name: 'Salt'})
CREATE (sugar:Ingredient:Dry {name: 'Sugar'})
CREATE (sesame_oil:Ingredient:Oil {name: 'Sesame Oil'})
CREATE (maltose:Ingredient:Wet {name: 'Maltose'})
CREATE (vinegar:Ingredient:Wet {name: 'Vinegar'})
CREATE (pig_trotter:Ingredient:Protein:Main {name: 'Pig Trotter'})
CREATE (pepper:Ingredient:Dry {name: 'Pepper'})
CREATE (cooking_wine:Ingredient:Wine {name: 'Cooking Wine'})
CREATE (light_soy_sauce:Ingredient:Wet {name: 'Light Soy Sauce'})
CREATE (dark_soy_sauce:Ingredient:Wet {name: 'Dark Soy Sauce'})
CREATE (star_anise:Ingredient:Dry {name: 'Star Anise'})
CREATE (dried_chilies:Ingredient:Dry {name: 'Dried Chili'})
CREATE (cumin_powder:Ingredient:Dry {name: 'Cumin Powder'})
CREATE (bread_crumb:Ingredient:Dry {name: 'Bread Crumb'})
CREATE (ginger:Ingredient:Dry {name: 'Ginger'})
CREATE (tenderloin:Ingredient:Protein:Main {name: 'Tenderloin'})
CREATE (sweet_noodle_sauce:Ingredient:Wet {name: 'Sweet Noodle Sauce'})
CREATE (green_onion:Ingredient:Dry {name: 'Green Onion'})
CREATE (water:Ingredient:Wet {name: 'Water'})
CREATE (starch:Ingredient:Wet {name: 'Starch'})
CREATE (oyster_sauce:Ingredient:Wet {name: 'Oyster Sauce'})
CREATE (pork:Ingredient:Protein:Main {name: 'Pork'})
CREATE (egg:Ingredient:Wet {name: 'Egg'})
CREATE (chicken_essence:Ingredient:Wet {name: 'Chicken Essence'})
CREATE (duck:Ingredient:Protein:Main {name: 'Duck'})
CREATE (shallot_oil:Ingredient:Oil {name: 'Shallot Oil'})
CREATE (taro:Ingredient:Carbohydrate:Main {name: 'Betel Nut Taro'})
CREATE (lettuce:Ingredient:Vegetable:Main {name: 'Lettuce'})
CREATE (clear_soup:Ingredient:Wet {name: 'Clear Soup'})
CREATE (yellow_croaker:Ingredient:Seafood:Main {name: 'Yellow Croaker'})
CREATE (tofu:Ingredient:Protein:Main {name: 'Tofu'})
CREATE (enoki_mushroom:Ingredient:Vegetable:Main {name: 'Enoki Mushroom'})
CREATE (chinese_cabbage:Ingredient:Vegetable:Main {name: 'Chinese Cabbage'})
CREATE (chives:Ingredient:Dry {name: 'Chives'})
CREATE (rapeseed:Ingredient:Vegetable:Main {name: 'Rapeseed'})
CREATE (carrot:Ingredient:Vegetable:Main {name: 'Carrot'})
CREATE (oil:Ingredient:Oil {name: 'Oil'})
CREATE (minced_meat:Ingredient:Protein:Main {name: 'Minced Meat'})
CREATE (shallot:Ingredient:Dry {name: 'Shallot'})
CREATE (roast_yan:Ingredient:Protein:Main {name: 'Roast Yan'})
CREATE (abalone:Ingredient:Seafood:Main {name: 'Abalone'})
CREATE (scallops:Ingredient:Seafood:Main {name: 'Scallops'})
CREATE (sea_cucumber:Ingredient:Protein:Main {name: 'Sea Cucumber'})
CREATE (green_radish:Ingredient:Vegetable:Main {name: 'Green Radish'})
CREATE (pig_tendon:Ingredient:Protein:Main {name: 'Pig Tendon'})
CREATE (quail_egg:Ingredient:Protein:Main {name: 'Quail Egg'})
CREATE (fish_maw:Ingredient:Seafood:Main {name: 'Fish Maw'})
CREATE (vegetarian_shark_fin:Ingredient:Seafood:Main {name: 'Vegetarian Shark Fin'})
CREATE (shaoxing_wine:Ingredient:Wine {name: 'Shaoxing Wine'})
CREATE (cinnamon:Ingredient:Dry {name: 'Cinnamon'})
CREATE (pork_leg_bone:Ingredient:Protein:Main {name: 'Pork Leg Bone'})
CREATE (pork_hip_bone:Ingredient:Protein:Main {name: 'Pork Hip Bone'})
CREATE (chicken_feet:Ingredient:Protein:Main {name: 'Chicken Feet'})
CREATE (pork_belly:Ingredient:Protein:Main {name: 'Pork Belly'})
CREATE (jinhua_ham:Ingredient:Protein:Main {name: 'Jin Hua Ham'})
CREATE (scallion:Ingredient:Dry {name: 'Scallion'})
CREATE (rice_bean_paste:Ingredient:Wet {name: 'Rice Bean Paste'})
CREATE (huadiao_wine:Ingredient:Wine {name: 'Hua Diao Wine'})
CREATE (rice_wine:Ingredient:Wine {name: 'Rice Wine'})
CREATE (purple_onion:Ingredient:Dry {name: 'Purple Onion'})
CREATE (chili:Ingredient:Dry {name: 'Chili'})
CREATE (shrimp:Ingredient:Seafood:Main {name: 'Shrimp'})
CREATE (ganqi:Ingredient:Dry {name: 'Gan Qi'})
CREATE (green_berry:Ingredient:Dry {name: 'Green Berry'})
CREATE (angelica:Ingredient:Dry {name: 'Angelica'})
CREATE (mackerel:Ingredient:Seafood:Main {name: 'Mackerel'})
CREATE (noodle:Ingredient:Carbohydrate:Main {name: 'Noodle'})
CREATE (white_wine:Ingredient:Wine {name: 'white_wine'})
CREATE (green_pepper:Ingredient:Vegetable:Main {name: 'Green Pepper'})
CREATE (red_pepper:Ingredient:Vegetable:Main {name: 'Red Repper'})
CREATE (lala:Ingredient:Seafood:Main {name: 'La La'})
CREATE (parsley:Ingredient:Dry {name: 'Parsley'})
CREATE (millet_pepper:Ingredient:Dry {name: 'Millet Pepper'})
CREATE (red_dried_pepper:Ingredient:Dry {name: 'Red Dried Pepper'})
CREATE (sesame_pepper:Ingredient:Dry {name: 'Sesame Pepper'})
CREATE (doubanjiang:Ingredient:Wet {name: 'Dou Ban Jiang'})
CREATE (oyster:Ingredient:Seafood:Main {name: 'Oyster'})
CREATE (sweet_potato_powder:Ingredient:Dry {name: 'Sweet Potato Powder'})
CREATE (sweet_chili_sauce:Ingredient:Wet {name: 'Sweet Chili Sauce'})
CREATE (dried_bamboo_shoots:Ingredient:Vegetable:Main {name: 'Dried Bamboo Shoots'})
CREATE (bitter_gourd:Ingredient:Vegetable:Main {name: 'Bitter Gourd'})
CREATE (tomato_sauce:Ingredient:Wet {name: 'Tomato Sauce'})
CREATE (honey:Ingredient:Wet {name: 'Honey'})
CREATE (jam:Ingredient:Wet {name: 'Jam'})
CREATE (coriander:Ingredient:Dry {name: 'Coriander'})
CREATE (seaweed:Ingredient:Vegetable:Main {name: 'seaweed'})
CREATE (white_pepper:Ingredient:Dry {name: 'White Pepper'})
CREATE (flour:Ingredient:Dry {name: 'Flour'})
CREATE (pig_intestine:Ingredient:Protein:Main {name: 'Pig Intestine'})
CREATE (lard:Ingredient:Oil {name: 'lard'})
CREATE (toushui_laver:Ingredient:Wet {name: 'Toushui Laver'})
CREATE (spinach:Ingredient:Vegetable:Main {name: 'Amaranth'})
CREATE (preserved_egg:Ingredient:Protein:Main {name: 'Preserved Egg'})
CREATE (salted_egg:Ingredient:Protein:Main {name: 'Salted Egg'})
CREATE (white_vinegar:Ingredient:Wet {name: 'White Vinegar'})
CREATE (soy_bean_paste:Ingredient:Wet {name: 'Soy Bean Paste'})
CREATE (shanshui_tofu:Ingredient:Protein:Main {name: 'Shanshui Tofu'})
CREATE (bean_bun:Ingredient:Carbohydrate:Main {name: 'Bean Bun'})
CREATE (kale:Ingredient:Vegetable:Main {name: 'kale'})
CREATE (shrimp_paste_noodles:Ingredient:Carbohydrate:Main {name: 'Shrimp Paste Noodles'})
CREATE (leek:Ingredient:Vegetable:Main {name: 'leek'})
CREATE (black_fungus:Ingredient:Vegetable:Main {name: 'Black Fungus'})
CREATE (xinghua_rice_noodles:Carbohydrate:Main {name: 'Xinghua Rice Noodles'})
CREATE (shiitake_mushroom:Ingredient:Vegetable:Main {name: 'shiitake_mushroom'})
CREATE (rice:Ingredient:Carbohydrate:Main {name: 'Rice'})
CREATE (dried_shrimp:Ingredient:Dry {name: 'Dried Shrimp'})
CREATE (fried_octopus:Ingredient:Seafood:Main {name: 'Fried Octopus'})
CREATE (fried_squid:Ingredient:Seafood:Main {name: 'Fried Squid'})
CREATE (shanghai_green:Ingredient:Vegetable:Main {name: 'Shanghai Green'})

// Dish
CREATE (chick_garlic:Dish:Meat {id:1, dish:'Meat', name: 'Deep Fried Chicken with Garlic', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%92%9C%E9%A6%99%E9%B8%A1.jpg'})
CREATE (pork_salt_pepper:Dish:Meat {id:2, dish:'Meat', name: 'Deep Fried Pork Trotter with Salt and Pepper', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E7%8C%AA%E6%89%8B.jpg'})
CREATE (pork_sesame_bun:Dish:Meat {id:3, dish:'Meat', name: 'Shredded Pork with Sesame Bun', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E9%BB%84%E9%87%91%E8%8D%B7%E5%8F%B6%E5%8C%85-1.jpg'})
CREATE (pork_lychee:Dish:Meat {id:4, dish:'Meat', name: 'Sweet and sour pork with lychee', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%8D%94%E6%9E%9D%E8%82%89.jpg'})
CREATE (duck_yam:Dish:Meat {id:5, dish:'Meat', name: 'Deep Fried Duck with Yam', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%8A%8B%E9%A6%99%E9%B8%AD-1.jpg'})

CREATE (claypot_croaker:Dish:Soup {id:6, dish:'Soup', name: 'Claypot Yellow Croaker Soup', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E7%A0%82%E9%94%85%E9%BB%84%E8%8A%B1%E9%B1%BC%E6%B1%A4.jpg'})
CREATE (beancurd_cabbage:Dish:Soup {id:7, dish:'Soup', name: 'Braised Beancurd with Chinese Cabbage', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E7%9A%87%E7%99%BD%E8%8F%9C%E7%82%96%E8%BD%AF%E8%B1%86%E8%85%90.jpg'})
CREATE (bian_rou:Dish:Soup {id:8, dish:'Soup', name: 'Bian Rou Soup', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E6%89%81%E8%82%89%E6%B1%A4.jpg'})
CREATE (buddha:Dish:Soup {id:9, dish:'Soup', name: 'Buddha Jumps over the Wall', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E4%BD%9B%E8%B7%B3%E5%A2%99.jpg'})

CREATE (hundard_second:Dish:Seafood {id:10, dish:'Seafood', name: '100-Second Stewed Yellow Croaker', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E7%99%BE%E7%A7%92%E9%BB%84%E8%8A%B1%E9%B1%BC.jpg'})
CREATE (pan_fried_croaker:Dish:Seafood {id:11, dish:'Seafood', name: 'Pan-fried Yellow Croakers', image: 'https://www.putien.com/wp-content/uploads/2020/07/14.jpg'})
CREATE (herbal_prawn:Dish:Seafood {id:12, dish:'Seafood', name: 'Herbal Tiger Prawn', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E9%85%92%E9%A6%99%E8%8D%AF%E8%86%B3%E8%99%BE.jpg'})
CREATE (deep_fried_tenggiri:Dish:Seafood {id:13, dish:'Seafood', name: 'Deep-fried Tenggiri Fish', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E9%A9%AC%E9%B2%9B%E9%B1%BC.jpg'})
CREATE (steamed_prawn:Dish:Seafood {id:14, dish:'Seafood', name: 'Steamed Prawn with Minced Garlic', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%92%9C%E8%93%89%E8%92%B8%E8%99%BE.jpg'})
CREATE (chili_clams:Dish:Seafood {id:15, dish:'Seafood', name: 'Stir-fried Chilli Clams', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%BE%A3%E6%B1%81%E5%95%A6%E5%95%A6.jpg'})
CREATE (crispy_oyster:Dish:Seafood {id:16, dish:'Seafood', name: 'Crispy Oyster', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E4%B8%80%E5%93%81%E6%B5%B7%E8%9B%8E%E7%85%8E.jpg'})

CREATE (bamboo_shoot:Dish:Starter {id:17, dish:'Starter', name: 'Braised Bamboo Shoot', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%AE%B6%E5%B8%B8%E7%84%96%E7%AC%8B%E5%B9%B2.jpg'})
CREATE (iced_bitter_gourd:Dish:Starter {id:18, dish:'Starter', name: 'Iced Bitter Gourd', image: 'https://www.putien.com/wp-content/uploads/2020/07/07.jpg'})
CREATE (starter:Dish:Starter {id:19, dish:'Starter', name: 'Starters Platter', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%9B%9B%E5%B0%8F%E6%8B%BC.jpg'})
CREATE (drunken_cockle:Dish:Starter {id:20, dish:'Starter', name: 'Drunken Cockles', image: 'https://www.putien.com/wp-content/uploads/2020/05/cockles2.jpg'})
CREATE (deep_fried_croaker:Dish:Starter {id:21, dish:'Starter', name: 'Deep-fried Yellow Croaker', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%92%B8%E9%A6%99%E9%85%A5%E8%84%86%E9%BB%84%E8%8A%B1%E9%B1%BC.jpg'})
CREATE (braised_intestine:Dish:Starter {id:22, dish:'Starter', name: 'Braised Pig Intestine', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E4%B9%9D%E8%BD%AC%E5%B0%8F%E8%82%A0.jpg'})
CREATE (ice_abalone:Dish:Starter {id:23, dish:'Starter', name: 'Iced Nanri Abalone', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%8D%97%E6%97%A5%E9%B2%8D.jpg'})
CREATE (pork_trotter:Dish:Starter {id:24, dish:'Starter', name: 'Cold Pork Trotters Jelly', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E6%B0%B4%E6%99%B6%E7%8C%AA%E8%B9%84%E5%86%BB.jpg'})
CREATE (seaweed_shrimps:Dish:Starter {id:25, dish:'Starter', name: 'Seaweed with Mini Shrimps Dressed with Sauce', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%A4%B4%E6%B0%B4%E7%B4%AB%E8%8F%9C.jpg'})

CREATE (loquat_jelly:Dish:Dessert {id:26, dish:'Dessert', name: 'Chilled Loquat in Herbal Jelly', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E6%9E%87%E6%9D%B7%E5%86%BB-1.jpg'})
CREATE (lotus_seed_fungus:Dish:Dessert {id:27, dish:'Dessert', name: 'Lotus Seed with White Fungus Soup', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%8E%B2%E5%AD%90%E9%9B%AA%E8%80%B3%E6%B1%A4-1.jpg'})
CREATE (pear_osmanthus:Dish:Dessert {id:28, dish:'Dessert', name: 'Double-boiled Pear with Osmanthus and Aged Mandarin Peel', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E6%A1%82%E8%8A%B1%E9%99%88%E7%9A%AE%E7%82%96%E9%9B%AA%E6%A2%A8.jpg'})
CREATE (durian_puree:Dish:Dessert {id:29, dish:'Dessert', name: 'Deep-fried Durian Puree', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%86%B0%E5%BF%83%E6%A6%B4%E8%8E%B2.jpg'})

CREATE (spinach_stock:Dish:Vegetable {id:30, dish:'Vegetable', name: 'Spinach in Supreme Stock', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E4%B8%8A%E6%B1%A4%E8%8B%8B%E8%8F%9C.jpg'})
CREATE (stir_fried_yam:Dish:Vegetable {id:31, dish:'Vegetable', name: 'Stir-fried Yam', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%8A%8B%E8%8A%AF.jpg'})
CREATE (braised_bitter_gourd:Dish:Vegetable {id:32, dish:'Vegetable', name: 'Braised Bitter Gourd', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E9%A3%8E%E5%91%B3%E7%84%96%E8%8B%A6%E7%93%9C.jpg'})
CREATE (homemade_bean_curd:Dish:Vegetable {id:33, dish:'Vegetable', name: 'Hot Plate Homemade Bean Curd', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E9%93%81%E6%9D%BF%E6%BB%91%E8%B1%86%E8%85%90.jpg'})
CREATE (kailan_bean_curd:Dish:Vegetable {id:34, dish:'Vegetable', name: 'Stir-fried Kailan with Bean Curd Skin', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%8A%A5%E5%85%B0%E8%B1%86%E7%9A%AE-1.jpg'})

CREATE (mushroom_seafood_lor_mee:Dish:Main {id:35, dish:'Main', name: 'Fujian Red Mushroom Seafood Lor Mee', image: 'https://www.putien.com/wp-content/uploads/2021/03/%E7%BA%A2%E8%8F%87%E5%8D%A4%E9%9D%A2.jpg'})
CREATE (heng_hua_bee_hoon:Dish:Main {id:36, dish:'Main', name: 'Fried Heng Hwa Bee Hoon', image:'https://www.putien.com/wp-content/uploads/2021/03/%E5%85%B4%E5%8C%96%E7%82%92%E7%B1%B3%E7%B2%89-1.jpg'})
CREATE (cabbage_rice:Dish:Main {id:37, dish:'Main', name: 'Cabbage Rice', image:'https://www.putien.com/wp-content/uploads/2021/03/%E5%8C%85%E8%8F%9C%E9%A5%AD.jpg'})
CREATE (ca_fan:Dish:Main {id:38, dish:'Main', name: 'PUTIEN Ca Fen', image:'https://www.putien.com/wp-content/uploads/2021/03/%E5%86%9C%E5%AE%B6%E6%93%A6%E7%B2%89-1.jpg'})

CREATE (ba_hong_bao:Dish:Drink {id:39, dish:'Drink', name: 'Wuyi Mountain Early Spring Da Hong Pao', alcohol:false, type:["Hot"], image: 'https://www.putien.com/wp-content/uploads/2020/07/50.jpg'})
CREATE (barley:Dish:Drink {id:40, dish:'Drink', name: 'Pearl Barley with Winter Melon', alcohol:false, type:["Hot", "Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/53.jpg'})
CREATE (baybery_tea:Dish:Drink {id:41, dish:'Drink', name: 'Bayberry Tea with Iced Berry Cubes', alcohol:false, type:["Hot", "Cold"], image: 'https://www.putien.com/wp-content/uploads/2021/03/%E5%86%B0%E7%A0%96%E6%9D%A8%E6%A2%85%E6%B0%B4.jpg'})
CREATE (chrysanthemum:Dish:Drink {id:42, dish:'Drink', name: 'Chrysanthemum Tea', alcohol:false, type:["Hot", "Cold"], image: 'https://www.putien.com/wp-content/uploads/2021/03/%E8%83%8E%E8%8F%8A%E8%8C%B6-1.jpg'})
CREATE (corn_juice:Dish:Drink {id:43, dish:'Drink', name: 'Sweet Corn Juice', alcohol:false, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/54.jpg'})
CREATE (soursop:Dish:Drink {id:44, dish:'Drink', name: 'Soursop Juice', alcohol:false, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/55.jpg'})
CREATE (sprite:Dish:Drink {id:45, dish:'Drink', name: 'Sprite', alcohol:false, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/62.jpg'})
CREATE (coke:Dish:Drink {id:46, dish:'Drink', name: 'Coke', alcohol:false, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/61.jpg'})
CREATE (tiger:Dish:Drink {id:47, dish:'Drink', name: 'Tiger beer', alcohol:true, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/64.jpg'})
CREATE (mineral_water:Dish:Drink {id:48, dish:'Drink', name: 'Mineral Water', alcohol:false, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/63.jpg'})
CREATE (white_beer:Dish:Drink {id:49, dish:'Drink', name: '1664 White Beer', alcohol:true, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/65.jpg'})
CREATE (hoegaarden:Dish:Drink {id:50, dish:'Drink', name: 'Hoegaarden', alcohol:true, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/66.jpg'})
CREATE (maotai:Dish:Drink {id:51, dish:'Drink', name: 'Guizhou Maotai', alcohol:true, type:["Cold"], image: 'https://www.putien.com/wp-content/uploads/2020/07/68.jpg'})

// Relationship
CREATE
(chick_garlic)-[:CONTAINS {quantity:350, unit:'gram'}]->(chicken),
(chick_garlic)-[:CONTAINS {quantity:20, unit:'gram'}]->(five_spice_powder),
(chick_garlic)-[:CONTAINS {quantity:100, unit:'gram'}]->(garlic),
(chick_garlic)-[:CONTAINS {quantity:100, unit:'gram'}]->(onion),
(chick_garlic)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic_powder),
(chick_garlic)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(chick_garlic)-[:CONTAINS {quantity:5, unit:'gram'}]->(sugar),
(chick_garlic)-[:CONTAINS {quantity:5, unit:'gram'}]->(sesame_oil),
(chick_garlic)-[:CONTAINS {quantity:5, unit:'gram'}]->(maltose),
(chick_garlic)-[:CONTAINS {quantity:50, unit:'gram'}]->(vinegar)

CREATE
(pork_salt_pepper)-[:CONTAINS {quantity:1000, unit:'gram'}]->(pig_trotter),
(pork_salt_pepper)-[:CONTAINS {quantity:20, unit:'gram'}]->(pepper),
(pork_salt_pepper)-[:CONTAINS {quantity:45, unit:'gram'}]->(cooking_wine),
(pork_salt_pepper)-[:CONTAINS {quantity:15, unit:'gram'}]->(light_soy_sauce),
(pork_salt_pepper)-[:CONTAINS {quantity:15, unit:'gram'}]->(dark_soy_sauce),
(pork_salt_pepper)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(pork_salt_pepper)-[:CONTAINS {quantity:30, unit:'gram'}]->(garlic),
(pork_salt_pepper)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper),
(pork_salt_pepper)-[:CONTAINS {quantity:20, unit:'gram'}]->(star_anise),
(pork_salt_pepper)-[:CONTAINS {quantity:20, unit:'gram'}]->(dried_chilies),
(pork_salt_pepper)-[:CONTAINS {quantity:5, unit:'gram'}]->(cumin_powder),
(pork_salt_pepper)-[:CONTAINS {quantity:30, unit:'gram'}]->(bread_crumb),
(pork_salt_pepper)-[:CONTAINS {quantity:20, unit:'gram'}]->(ginger)


CREATE
(pork_sesame_bun)-[:CONTAINS {quantity:100, unit:'gram'}]->(tenderloin),
(pork_sesame_bun)-[:CONTAINS {quantity:50, unit:'gram'}]->(sweet_noodle_sauce),
(pork_sesame_bun)-[:CONTAINS {quantity:10, unit:'gram'}]->(sugar),
(pork_sesame_bun)-[:CONTAINS {quantity:20, unit:'gram'}]->(green_onion),
(pork_sesame_bun)-[:CONTAINS {quantity:100, unit:'gram'}]->(water),
(pork_sesame_bun)-[:CONTAINS {quantity:20, unit:'gram'}]->(dark_soy_sauce),
(pork_sesame_bun)-[:CONTAINS {quantity:20, unit:'gram'}]->(light_soy_sauce),
(pork_sesame_bun)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(pork_sesame_bun)-[:CONTAINS {quantity:10, unit:'gram'}]->(vinegar),
(pork_sesame_bun)-[:CONTAINS {quantity:10, unit:'cup'}]->(starch),
(pork_sesame_bun)-[:CONTAINS {quantity:10, unit:'gram'}]->(oyster_sauce)

CREATE
(pork_lychee)-[:CONTAINS {quantity:500, unit:'gram'}]->(pork),
(pork_lychee)-[:CONTAINS {quantity:100, unit:'gram'}]->(garlic),
(pork_lychee)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(pork_lychee)-[:CONTAINS {quantity:30, unit:'gram'}]->(egg),
(pork_lychee)-[:CONTAINS {quantity:5, unit:'gram'}]->(sugar),
(pork_lychee)-[:CONTAINS {quantity:10, unit:'gram'}]->(chicken_essence)

CREATE
(duck_yam)-[:CONTAINS {quantity:900, unit:'gram'}]->(duck),
(duck_yam)-[:CONTAINS {quantity:10, unit:'gram'}]->(shallot_oil),
(duck_yam)-[:CONTAINS {quantity:30, unit:'gram'}]->(green_onion),
(duck_yam)-[:CONTAINS {quantity:450, unit:'gram'}]->(taro),
(duck_yam)-[:CONTAINS {quantity:100, unit:'gram'}]->(starch),
(duck_yam)-[:CONTAINS {quantity:10, unit:'gram'}]->(lettuce),
(duck_yam)-[:CONTAINS {quantity:10, unit:'gram'}]->(oyster_sauce),
(duck_yam)-[:CONTAINS {quantity:100, unit:'gram'}]->(clear_soup)




CREATE
(claypot_croaker)-[:CONTAINS {quantity:450, unit:'gram'}]->(yellow_croaker),
(claypot_croaker)-[:CONTAINS {quantity:200, unit:'gram'}]->(tofu),
(claypot_croaker)-[:CONTAINS {quantity:200, unit:'gram'}]->(enoki_mushroom),
(claypot_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(green_onion),
(claypot_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(ginger),
(claypot_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(cooking_wine),
(claypot_croaker)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(claypot_croaker)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper)

CREATE
(beancurd_cabbage)-[:CONTAINS {quantity:400, unit:'gram'}]->(chinese_cabbage),
(beancurd_cabbage)-[:CONTAINS {quantity:200, unit:'gram'}]->(tofu),
(beancurd_cabbage)-[:CONTAINS {quantity:5, unit:'gram'}]->(ginger),
(beancurd_cabbage)-[:CONTAINS {quantity:10, unit:'gram'}]->(garlic),
(beancurd_cabbage)-[:CONTAINS {quantity:5, unit:'gram'}]->(chives),
(beancurd_cabbage)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(beancurd_cabbage)-[:CONTAINS {quantity:10, unit:'gram'}]->(chicken_essence)

CREATE
(bian_rou)-[:CONTAINS {quantity:300, unit:'gram'}]->(rapeseed),
(bian_rou)-[:CONTAINS {quantity:50, unit:'gram'}]->(carrot),
(bian_rou)-[:CONTAINS {quantity:10, unit:'gram'}]->(light_soy_sauce),
(bian_rou)-[:CONTAINS {quantity:50, unit:'gram'}]->(ginger),
(bian_rou)-[:CONTAINS {quantity:50, unit:'gram'}]->(green_onion),
(bian_rou)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(bian_rou)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(bian_rou)-[:CONTAINS {quantity:10, unit:'gram'}]->(oil),
(bian_rou)-[:CONTAINS {quantity:200, unit:'gram'}]->(minced_meat),
(bian_rou)-[:CONTAINS {quantity:90, unit:'gram'}]->(shallot),
(bian_rou)-[:CONTAINS {quantity:30, unit:'gram'}]->(egg),
(bian_rou)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(bian_rou)-[:CONTAINS {quantity:5, unit:'gram'}]->(cooking_wine),
(bian_rou)-[:CONTAINS {quantity:200, unit:'gram'}]->(roast_yan)


CREATE
(buddha)-[:CONTAINS {quantity:500, unit:'gram'}]->(abalone),
(buddha)-[:CONTAINS {quantity:200, unit:'gram'}]->(scallops),
(buddha)-[:CONTAINS {quantity:200, unit:'gram'}]->(sea_cucumber),
(buddha)-[:CONTAINS {quantity:200, unit:'gram'}]->(green_radish),
(buddha)-[:CONTAINS {quantity:300, unit:'gram'}]->(pig_trotter),
(buddha)-[:CONTAINS {quantity:300, unit:'gram'}]->(pig_tendon),
(buddha)-[:CONTAINS {quantity:100, unit:'gram'}]->(quail_egg),
(buddha)-[:CONTAINS {quantity:300, unit:'gram'}]->(shiitake_mushroom),
(buddha)-[:CONTAINS {quantity:200, unit:'gram'}]->(fish_maw),
(buddha)-[:CONTAINS {quantity:100, unit:'gram'}]->(vegetarian_shark_fin),
(buddha)-[:CONTAINS {quantity:10, unit:'gram'}]->(shaoxing_wine),
(buddha)-[:CONTAINS {quantity:10, unit:'gram'}]->(ginger),
(buddha)-[:CONTAINS {quantity:20, unit:'gram'}]->(shallot),
(buddha)-[:CONTAINS {quantity:5, unit:'gram'}]->(cinnamon),
(buddha)-[:CONTAINS {quantity:10, unit:'gram'}]->(star_anise),
(buddha)-[:CONTAINS {quantity:300, unit:'gram'}]->(chicken),
(buddha)-[:CONTAINS {quantity:300, unit:'gram'}]->(duck),
(buddha)-[:CONTAINS {quantity:1000, unit:'gram'}]->(pork_leg_bone),
(buddha)-[:CONTAINS {quantity:1000, unit:'gram'}]->(chicken_feet),
(buddha)-[:CONTAINS {quantity:300, unit:'gram'}]->(pork_belly),
(buddha)-[:CONTAINS {quantity:10, unit:'gram'}]->(jinhua_ham),
(buddha)-[:CONTAINS {quantity:1000, unit:'gram'}]->(pork_hip_bone)


CREATE
(hundard_second)-[:CONTAINS {quantity:600, unit:'gram'}]->(yellow_croaker),
(hundard_second)-[:CONTAINS {quantity:10, unit:'gram'}]->(ginger),
(hundard_second)-[:CONTAINS {quantity:20, unit:'gram'}]->(scallion),
(hundard_second)-[:CONTAINS {quantity:200, unit:'gram'}]->(water),
(hundard_second)-[:CONTAINS {quantity:50, unit:'gram'}]->(rice_bean_paste),
(hundard_second)-[:CONTAINS {quantity:20, unit:'gram'}]->(huadiao_wine),
(hundard_second)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(hundard_second)-[:CONTAINS {quantity:20, unit:'gram'}]->(rice_wine)


CREATE
(pan_fried_croaker)-[:CONTAINS {quantity:600, unit:'gram'}]->(yellow_croaker),
(pan_fried_croaker)-[:CONTAINS {quantity:50, unit:'gram'}]->(purple_onion),
(pan_fried_croaker)-[:CONTAINS {quantity:20, unit:'gram'}]->(ginger),
(pan_fried_croaker)-[:CONTAINS {quantity:20, unit:'gram'}]->(chili),
(pan_fried_croaker)-[:CONTAINS {quantity:50, unit:'gram'}]->(green_onion),
(pan_fried_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(light_soy_sauce),
(pan_fried_croaker)-[:CONTAINS {quantity:5, unit:'gram'}]->(sugar),
(pan_fried_croaker)-[:CONTAINS {quantity:20, unit:'gram'}]->(huadiao_wine),
(pan_fried_croaker)-[:CONTAINS {quantity:200, unit:'gram'}]->(water)

CREATE
(herbal_prawn)-[:CONTAINS {quantity:300, unit:'gram'}]->(shrimp),
(herbal_prawn)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(herbal_prawn)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(herbal_prawn)-[:CONTAINS {quantity:200, unit:'gram'}]->(rice_wine),
(herbal_prawn)-[:CONTAINS {quantity:50, unit:'gram'}]->(ganqi),
(herbal_prawn)-[:CONTAINS {quantity:20, unit:'gram'}]->(green_berry),
(herbal_prawn)-[:CONTAINS {quantity:100, unit:'gram'}]->(angelica),
(herbal_prawn)-[:CONTAINS {quantity:300, unit:'gram'}]->(water)

CREATE
(deep_fried_tenggiri)-[:CONTAINS {quantity:500, unit:'gram'}]->(mackerel),
(deep_fried_tenggiri)-[:CONTAINS {quantity:50, unit:'gram'}]->(ginger),
(deep_fried_tenggiri)-[:CONTAINS {quantity:20, unit:'gram'}]->(oil),
(deep_fried_tenggiri)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(deep_fried_tenggiri)-[:CONTAINS {quantity:100, unit:'gram'}]->(cooking_wine)

CREATE
(steamed_prawn)-[:CONTAINS {quantity:350, unit:'gram'}]->(shrimp),
(steamed_prawn)-[:CONTAINS {quantity:50, unit:'gram'}]->(noodle),
(steamed_prawn)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(steamed_prawn)-[:CONTAINS {quantity:20, unit:'gram'}]->(oil),
(steamed_prawn)-[:CONTAINS {quantity:100, unit:'gram'}]->(white_wine),
(steamed_prawn)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper),
(steamed_prawn)-[:CONTAINS {quantity:20, unit:'gram'}]->(light_soy_sauce),
(steamed_prawn)-[:CONTAINS {quantity:20, unit:'gram'}]->(sugar),
(steamed_prawn)-[:CONTAINS {quantity:100, unit:'gram'}]->(green_onion),
(steamed_prawn)-[:CONTAINS {quantity:50, unit:'gram'}]->(ginger),
(steamed_prawn)-[:CONTAINS {quantity:20, unit:'gram'}]->(garlic),
(steamed_prawn)-[:CONTAINS {quantity:50, unit:'gram'}]->(green_pepper),
(steamed_prawn)-[:CONTAINS {quantity:50, unit:'gram'}]->(red_pepper)

CREATE
(chili_clams)-[:CONTAINS {quantity:1000, unit:'gram'}]->(lala),
(chili_clams)-[:CONTAINS {quantity:300, unit:'gram'}]->(onion),
(chili_clams)-[:CONTAINS {quantity:100, unit:'gram'}]->(parsley),
(chili_clams)-[:CONTAINS {quantity:10, unit:'gram'}]->(millet_pepper),
(chili_clams)-[:CONTAINS {quantity:50, unit:'gram'}]->(green_onion),
(chili_clams)-[:CONTAINS {quantity:10, unit:'gram'}]->(ginger),
(chili_clams)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(chili_clams)-[:CONTAINS {quantity:50, unit:'gram'}]->(red_dried_pepper),
(chili_clams)-[:CONTAINS {quantity:10, unit:'gram'}]->(sesame_pepper),
(chili_clams)-[:CONTAINS {quantity:80, unit:'gram'}]->(doubanjiang),
(chili_clams)-[:CONTAINS {quantity:20, unit:'gram'}]->(light_soy_sauce),
(chili_clams)-[:CONTAINS {quantity:20, unit:'gram'}]->(oyster_sauce),
(chili_clams)-[:CONTAINS {quantity:20, unit:'gram'}]->(vinegar),
(chili_clams)-[:CONTAINS {quantity:20, unit:'gram'}]->(sugar),
(chili_clams)-[:CONTAINS {quantity:50, unit:'gram'}]->(starch),
(chili_clams)-[:CONTAINS {quantity:100, unit:'gram'}]->(water)


CREATE
(crispy_oyster)-[:CONTAINS {quantity:300, unit:'gram'}]->(oyster),
(crispy_oyster)-[:CONTAINS {quantity:50, unit:'gram'}]->(sweet_potato_powder),
(crispy_oyster)-[:CONTAINS {quantity:100, unit:'gram'}]->(garlic),
(crispy_oyster)-[:CONTAINS {quantity:30, unit:'gram'}]->(egg),
(crispy_oyster)-[:CONTAINS {quantity:10, unit:'gram'}]->(salt),
(crispy_oyster)-[:CONTAINS {quantity:50, unit:'gram'}]->(chicken_essence),
(crispy_oyster)-[:CONTAINS {quantity:50, unit:'gram'}]->(sweet_chili_sauce)


CREATE
(bamboo_shoot)-[:CONTAINS {quantity:300, unit:'gram'}]->(dried_bamboo_shoots),
(bamboo_shoot)-[:CONTAINS {quantity:10, unit:'gram'}]->(salt),
(bamboo_shoot)-[:CONTAINS {quantity:50, unit:'gram'}]->(dried_chilies),
(bamboo_shoot)-[:CONTAINS {quantity:50, unit:'gram'}]->(light_soy_sauce),
(bamboo_shoot)-[:CONTAINS {quantity:50, unit:'gram'}]->(dark_soy_sauce),
(bamboo_shoot)-[:CONTAINS {quantity:50, unit:'gram'}]->(scallion),
(bamboo_shoot)-[:CONTAINS {quantity:5, unit:'gram'}]->(sugar),
(bamboo_shoot)-[:CONTAINS {quantity:20, unit:'gram'}]->(oil)

CREATE
(iced_bitter_gourd)-[:CONTAINS {quantity:200, unit:'gram'}]->(bitter_gourd),
(iced_bitter_gourd)-[:CONTAINS {quantity:30, unit:'gram'}]->(light_soy_sauce),
(iced_bitter_gourd)-[:CONTAINS {quantity:30, unit:'gram'}]->(vinegar),
(iced_bitter_gourd)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(iced_bitter_gourd)-[:CONTAINS {quantity:30, unit:'gram'}]->(tomato_sauce),
(iced_bitter_gourd)-[:CONTAINS {quantity:50, unit:'gram'}]->(honey),
(iced_bitter_gourd)-[:CONTAINS {quantity:30, unit:'gram'}]->(jam),
(iced_bitter_gourd)-[:CONTAINS {quantity:100, unit:'gram'}]->(coriander),
(iced_bitter_gourd)-[:CONTAINS {quantity:10, unit:'gram'}]->(sugar)

CREATE
(drunken_cockle)-[:CONTAINS {quantity:1000, unit:'gram'}]->(lala),
(drunken_cockle)-[:CONTAINS {quantity:50, unit:'gram'}]->(green_onion),
(drunken_cockle)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(drunken_cockle)-[:CONTAINS {quantity:5, unit:'gram'}]->(sugar),
(drunken_cockle)-[:CONTAINS {quantity:100, unit:'gram'}]->(seaweed),
(drunken_cockle)-[:CONTAINS {quantity:100, unit:'gram'}]->(cooking_wine),
(drunken_cockle)-[:CONTAINS {quantity:50, unit:'gram'}]->(light_soy_sauce),
(drunken_cockle)-[:CONTAINS {quantity:20, unit:'gram'}]->(sesame_oil)



CREATE
(deep_fried_croaker)-[:CONTAINS {quantity:900, unit:'gram'}]->(yellow_croaker),
(deep_fried_croaker)-[:CONTAINS {quantity:200, unit:'gram'}]->(flour),
(deep_fried_croaker)-[:CONTAINS {quantity:100, unit:'gram'}]->(starch),
(deep_fried_croaker)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(deep_fried_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(sugar),
(deep_fried_croaker)-[:CONTAINS {quantity:20, unit:'gram'}]->(light_soy_sauce),
(deep_fried_croaker)-[:CONTAINS {quantity:20, unit:'gram'}]->(dark_soy_sauce),
(deep_fried_croaker)-[:CONTAINS {quantity:50, unit:'gram'}]->(cooking_wine),
(deep_fried_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(ginger),
(deep_fried_croaker)-[:CONTAINS {quantity:5, unit:'gram'}]->(white_pepper),
(deep_fried_croaker)-[:CONTAINS {quantity:10, unit:'gram'}]->(five_spice_powder),
(deep_fried_croaker)-[:CONTAINS {quantity:300, unit:'gram'}]->(oil)

CREATE
(braised_intestine)-[:CONTAINS {quantity:1000, unit:'gram'}]->(pig_intestine),
(braised_intestine)-[:CONTAINS {quantity:30, unit:'gram'}]->(light_soy_sauce),
(braised_intestine)-[:CONTAINS {quantity:10, unit:'gram'}]->(vinegar),
(braised_intestine)-[:CONTAINS {quantity:100, unit:'gram'}]->(cooking_wine),
(braised_intestine)-[:CONTAINS {quantity:10, unit:'gram'}]->(sugar),
(braised_intestine)-[:CONTAINS {quantity:10, unit:'gram'}]->(star_anise),
(braised_intestine)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper),
(braised_intestine)-[:CONTAINS {quantity:5, unit:'gram'}]->(cinnamon),
(braised_intestine)-[:CONTAINS {quantity:100, unit:'gram'}]->(chicken_essence),
(braised_intestine)-[:CONTAINS {quantity:20, unit:'gram'}]->(sesame_oil),
(braised_intestine)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(braised_intestine)-[:CONTAINS {quantity:200, unit:'gram'}]->(flour),
(braised_intestine)-[:CONTAINS {quantity:50, unit:'gram'}]->(green_onion),
(braised_intestine)-[:CONTAINS {quantity:20, unit:'gram'}]->(ginger),
(braised_intestine)-[:CONTAINS {quantity:10, unit:'gram'}]->(garlic),
(braised_intestine)-[:CONTAINS {quantity:20, unit:'gram'}]->(chives),
(braised_intestine)-[:CONTAINS {quantity:50, unit:'gram'}]->(lard),
(braised_intestine)-[:CONTAINS {quantity:200, unit:'gram'}]->(oil)

CREATE
(pork_trotter)-[:CONTAINS {quantity:1000, unit:'gram'}]->(pig_trotter),
(pork_trotter)-[:CONTAINS {quantity:20, unit:'gram'}]->(pepper),
(pork_trotter)-[:CONTAINS {quantity:50, unit:'gram'}]->(ginger),
(pork_trotter)-[:CONTAINS {quantity:20, unit:'gram'}]->(chives),
(pork_trotter)-[:CONTAINS {quantity:20, unit:'gram'}]->(coriander),
(pork_trotter)-[:CONTAINS {quantity:20, unit:'gram'}]->(garlic),
(pork_trotter)-[:CONTAINS {quantity:10, unit:'gram'}]->(vinegar),
(pork_trotter)-[:CONTAINS {quantity:20, unit:'gram'}]->(sesame_oil),
(pork_trotter)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(pork_trotter)-[:CONTAINS {quantity:10, unit:'gram'}]->(sugar),
(pork_trotter)-[:CONTAINS {quantity:100, unit:'gram'}]->(chicken_essence),
(pork_trotter)-[:CONTAINS {quantity:10, unit:'gram'}]->(light_soy_sauce),
(pork_trotter)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper)

CREATE
(seaweed_shrimps)-[:CONTAINS {quantity:300, unit:'gram'}]->(shrimp),
(seaweed_shrimps)-[:CONTAINS {quantity:100, unit:'gram'}]->(toushui_laver)

CREATE
(spinach_stock)-[:CONTAINS {quantity:300, unit:'gram'}]->(spinach),
(spinach_stock)-[:CONTAINS {quantity:30, unit:'gram'}]->(preserved_egg),
(spinach_stock)-[:CONTAINS {quantity:30, unit:'gram'}]->(salted_egg),
(spinach_stock)-[:CONTAINS {quantity:50, unit:'gram'}]->(ginger),
(spinach_stock)-[:CONTAINS {quantity:20, unit:'gram'}]->(garlic),
(spinach_stock)-[:CONTAINS {quantity:20, unit:'gram'}]->(oil),
(spinach_stock)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt)

CREATE
(stir_fried_yam)-[:CONTAINS {quantity:330, unit:'gram'}]->(taro),
(stir_fried_yam)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(stir_fried_yam)-[:CONTAINS {quantity:300, unit:'gram'}]->(oil),
(stir_fried_yam)-[:CONTAINS {quantity:110, unit:'gram'}]->(sugar),
(stir_fried_yam)-[:CONTAINS {quantity:60, unit:'gram'}]->(water),
(stir_fried_yam)-[:CONTAINS {quantity:15, unit:'gram'}]->(white_vinegar)

CREATE
(braised_bitter_gourd)-[:CONTAINS {quantity:300, unit:'gram'}]->(bitter_gourd),
(braised_bitter_gourd)-[:CONTAINS {quantity:200, unit:'gram'}]->(garlic),
(braised_bitter_gourd)-[:CONTAINS {quantity:40, unit:'gram'}]->(red_pepper),
(braised_bitter_gourd)-[:CONTAINS {quantity:50, unit:'gram'}]->(oil),
(braised_bitter_gourd)-[:CONTAINS {quantity:90, unit:'gram'}]->(soy_bean_paste),
(braised_bitter_gourd)-[:CONTAINS {quantity:90, unit:'gram'}]->(cooking_wine)

CREATE
(homemade_bean_curd)-[:CONTAINS {quantity:300, unit:'gram'}]->(shanshui_tofu),
(homemade_bean_curd)-[:CONTAINS {quantity:20, unit:'gram'}]->(green_onion),
(homemade_bean_curd)-[:CONTAINS {quantity:10, unit:'gram'}]->(cumin_powder),
(homemade_bean_curd)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(homemade_bean_curd)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper)

CREATE
(kailan_bean_curd)-[:CONTAINS {quantity:120, unit:'gram'}]->(bean_bun),
(kailan_bean_curd)-[:CONTAINS {quantity:30, unit:'gram'}]->(egg),
(kailan_bean_curd)-[:CONTAINS {quantity:250, unit:'gram'}]->(kale),
(kailan_bean_curd)-[:CONTAINS {quantity:50, unit:'gram'}]->(carrot),
(kailan_bean_curd)-[:CONTAINS {quantity:20, unit:'gram'}]->(ginger),
(kailan_bean_curd)-[:CONTAINS {quantity:20, unit:'gram'}]->(soy_bean_paste),
(kailan_bean_curd)-[:CONTAINS {quantity:5, unit:'gram'}]->(sugar),
(kailan_bean_curd)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper),
(kailan_bean_curd)-[:CONTAINS {quantity:100, unit:'gram'}]->(sesame_oil)

CREATE
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:300, unit:'gram'}]->(shrimp_paste_noodles),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:300, unit:'gram'}]->(lala),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:100, unit:'gram'}]->(chinese_cabbage),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:50, unit:'gram'}]->(pork),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:50, unit:'gram'}]->(leek),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper),
(mushroom_seafood_lor_mee)-[:CONTAINS {quantity:50, unit:'gram'}]->(black_fungus)


CREATE
(heng_hua_bee_hoon)-[:CONTAINS {quantity:500, unit:'gram'}]->(xinghua_rice_noodles),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:200, unit:'gram'}]->(shiitake_mushroom),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:100, unit:'gram'}]->(black_fungus),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:50, unit:'gram'}]->(carrot),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:90, unit:'gram'}]->(egg),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:5, unit:'gram'}]->(pepper),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:10, unit:'gram'}]->(sugar),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:10, unit:'gram'}]->(light_soy_sauce),
(heng_hua_bee_hoon)-[:CONTAINS {quantity:100, unit:'gram'}]->(chicken_essence)

CREATE
(cabbage_rice)-[:CONTAINS {quantity:200, unit:'gram'}]->(chinese_cabbage),
(cabbage_rice)-[:CONTAINS {quantity:100, unit:'gram'}]->(rice_wine),
(cabbage_rice)-[:CONTAINS {quantity:100, unit:'gram'}]->(pork_belly),
(cabbage_rice)-[:CONTAINS {quantity:50, unit:'gram'}]->(dried_shrimp),
(cabbage_rice)-[:CONTAINS {quantity:300, unit:'gram'}]->(rice),
(cabbage_rice)-[:CONTAINS {quantity:50, unit:'gram'}]->(garlic)

CREATE
(ca_fan)-[:CONTAINS {quantity:300, unit:'gram'}]->(xinghua_rice_noodles),
(ca_fan)-[:CONTAINS {quantity:200, unit:'gram'}]->(shiitake_mushroom),
(ca_fan)-[:CONTAINS {quantity:100, unit:'gram'}]->(lala),
(ca_fan)-[:CONTAINS {quantity:100, unit:'gram'}]->(fried_octopus),
(ca_fan)-[:CONTAINS {quantity:100, unit:'gram'}]->(fried_squid),
(ca_fan)-[:CONTAINS {quantity:150, unit:'gram'}]->(shanghai_green),
(ca_fan)-[:CONTAINS {quantity:60, unit:'gram'}]->(egg),
(ca_fan)-[:CONTAINS {quantity:5, unit:'gram'}]->(salt),
(ca_fan)-[:CONTAINS {quantity:200, unit:'gram'}]->(oil),
(ca_fan)-[:CONTAINS {quantity:300, unit:'gram'}]->(rice),
(ca_fan)-[:CONTAINS {quantity:100, unit:'gram'}]->(chicken_essence)

CREATE
(putian)-[:OFFERS {dish:'Meat'}]->(chick_garlic),
(putian)-[:OFFERS {dish:'Meat'}]->(pork_salt_pepper),
(putian)-[:OFFERS {dish:'Meat'}]->(pork_sesame_bun),
(putian)-[:OFFERS {dish:'Meat'}]->(pork_lychee),
(putian)-[:OFFERS {dish:'Meat'}]->(duck_yam),
(putian)-[:OFFERS {dish:'Soup'}]->(claypot_croaker),
(putian)-[:OFFERS {dish:'Soup'}]->(beancurd_cabbage),
(putian)-[:OFFERS {dish:'Soup'}]->(bian_rou),
(putian)-[:OFFERS {dish:'Soup'}]->(buddha),
(putian)-[:OFFERS {dish:'Seafood'}]->(hundard_second),
(putian)-[:OFFERS {dish:'Seafood'}]->(pan_fried_croaker),
(putian)-[:OFFERS {dish:'Seafood'}]->(herbal_prawn),
(putian)-[:OFFERS {dish:'Seafood'}]->(deep_fried_tenggiri),
(putian)-[:OFFERS {dish:'Seafood'}]->(steamed_prawn),
(putian)-[:OFFERS {dish:'Seafood'}]->(chili_clams),
(putian)-[:OFFERS {dish:'Seafood'}]->(crispy_oyster),
(putian)-[:OFFERS {dish:'Starter'}]->(bamboo_shoot),
(putian)-[:OFFERS {dish:'Starter'}]->(iced_bitter_gourd),
(putian)-[:OFFERS {dish:'Starter'}]->(starter),
(putian)-[:OFFERS {dish:'Starter'}]->(drunken_cockle),
(putian)-[:OFFERS {dish:'Starter'}]->(deep_fried_croaker),
(putian)-[:OFFERS {dish:'Starter'}]->(braised_intestine),
(putian)-[:OFFERS {dish:'Starter'}]->(ice_abalone),
(putian)-[:OFFERS {dish:'Starter'}]->(pork_trotter),
(putian)-[:OFFERS {dish:'Starter'}]->(seaweed_shrimps),
(putian)-[:OFFERS {dish:'Dessert'}]->(loquat_jelly),
(putian)-[:OFFERS {dish:'Dessert'}]->(lotus_seed_fungus),
(putian)-[:OFFERS {dish:'Dessert'}]->(pear_osmanthus),
(putian)-[:OFFERS {dish:'Dessert'}]->(durian_puree),
(putian)-[:OFFERS {dish:'Vegetable'}]->(spinach_stock),
(putian)-[:OFFERS {dish:'Vegetable'}]->(stir_fried_yam),
(putian)-[:OFFERS {dish:'Vegetable'}]->(braised_bitter_gourd),
(putian)-[:OFFERS {dish:'Vegetable'}]->(homemade_bean_curd),
(putian)-[:OFFERS {dish:'Vegetable'}]->(kailan_bean_curd),
(putian)-[:OFFERS {dish:'Main'}]->(mushroom_seafood_lor_mee),
(putian)-[:OFFERS {dish:'Main'}]->(heng_hua_bee_hoon),
(putian)-[:OFFERS {dish:'Main'}]->(cabbage_rice),
(putian)-[:OFFERS {dish:'Main'}]->(ca_fan),
(putian)-[:OFFERS {dish:'Drink'}]->(ba_hong_bao),
(putian)-[:OFFERS {dish:'Drink'}]->(barley),
(putian)-[:OFFERS {dish:'Drink'}]->(baybery_tea),
(putian)-[:OFFERS {dish:'Drink'}]->(chrysanthemum),
(putian)-[:OFFERS {dish:'Drink'}]->(corn_juice),
(putian)-[:OFFERS {dish:'Drink'}]->(soursop),
(putian)-[:OFFERS {dish:'Drink'}]->(sprite),
(putian)-[:OFFERS {dish:'Drink'}]->(coke),
(putian)-[:OFFERS {dish:'Drink'}]->(tiger),
(putian)-[:OFFERS {dish:'Drink'}]->(mineral_water),
(putian)-[:OFFERS {dish:'Drink'}]->(white_beer),
(putian)-[:OFFERS {dish:'Drink'}]->(hoegaarden),
(putian)-[:OFFERS {dish:'Drink'}]->(maotai)