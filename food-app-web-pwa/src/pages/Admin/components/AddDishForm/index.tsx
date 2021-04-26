import { FormEvent, useState } from "react";
import { Dish } from "context";
import Button from "components/Button";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import { recommend, compare, tfidfVectorizer } from "models/similarProduct";
import s from "./index.module.css";
type SimilarItemsType = {
  id: number;
  name: string;
  dish: { id: string }[];
};
type CategoryType = {
  category: string;
  dishes: { id: string; name: string }[];
};
// test dish
// name: Braised Yellow Croaker Fish with Garlic and Tofu
// category: Seafood
// ingredients: Yellow Croaker,Tofu,Garlic,Ground bean sauce,Chicken stock,Coriander
// ingredientsWeights: 300,160,20,10,100,10
// image: https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/newDish.png?alt=media
const AddDishForm = () => {
  const [name, setName] = useState(
    "Braised Yellow Croaker Fish with Garlic and Tofu"
  );
  const [categoryName, setCategoryName] = useState("Seafood");
  const [price, setPrice] = useState("30.5");
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/newDish.png?alt=media"
  );
  const [ingredients, setIngredients] = useState(
    "Yellow Croaker,Tofu,Garlic,Ground bean sauce,Chicken stock,Coriander"
  );
  const [ingredientsWeight, setIngredientsWeight] = useState(
    "300,160,20,10,100,10"
  );
  const [dishes, setDishes] = useLocalStorage<Dish[]>(KEYS.DISHES, []);
  const [similarProducts, setSimilarProducts] = useLocalStorage<
    SimilarItemsType[]
  >(KEYS.SIMILAR_ITEMS, []);
  const [categories, setCategories] = useLocalStorage<CategoryType[]>(
    KEYS.CATEGORIES,
    []
  );
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    let lastId = 0;
    dishes.forEach((dish) => {
      lastId = Math.max(lastId, Number(dish.id));
    });
    const id = lastId + 1;
    const weights = ingredientsWeight.trim().split(",");
    const ingredientsObjs = ingredients
      .trim()
      .split(",")
      .map((name, index) => {
        return {
          name,
          gram: Number(weights[index]),
        };
      });
    const dish: Dish = {
      id: id,
      name: name.trim(),
      price: Number(price.trim()),
      image: image.trim(),
      ingredients: ingredientsObjs,
    };
    const updatedDishes = [...dishes, dish];
    setDishes(updatedDishes);
    const sameCategory = categories.find((category) => {
      return category.category === categoryName;
    });
    sameCategory!!.dishes.push({ id: id + "", name: name.trim() });
    setCategories(categories);
    const similarItems = recommend(id + "", updatedDishes);
    similarProducts.push({
      id,
      name,
      dish: similarItems,
    });
    similarItems.forEach((item) => {
      const cur = similarProducts.find((p) => {
        return p.id === Number(item.id);
      });
      cur?.dish.push({ id: id + "" });
      cur?.dish.push({ id: cur.id + "" });
      const dishes = cur?.dish.map(
        ({ id }) => updatedDishes.find((dish) => dish.id === Number(id))!!
      );
      if (cur && dishes) {
        const dishesWithTfidf = tfidfVectorizer(dishes);
        dishes.forEach((dish) => {
          dish.similarity = compare(cur.id + "", dish.id + "", dishesWithTfidf);
        });
        dishes.sort((a, b) => b.similarity!! - a.similarity!!);
        dishes.shift();
        cur.dish = dishes.map((dish) => ({
          id: dish.id + "",
        }));
      }
    });
    setSimilarProducts(similarProducts);
    setName("");
    setPrice("");
    setCategoryName("");
    setImage("");
    setIngredients("");
    setIngredientsWeight("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className={s.input}
        value={name}
        placeholder="Dish name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={price}
        placeholder="Price"
        onChange={(e) => {
          const price = e.target.value;
          setPrice(price);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={categoryName}
        placeholder="Category"
        onChange={(e) => {
          setCategoryName(e.target.value);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={image}
        placeholder="Image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={ingredients}
        placeholder="Ingredients, seperated by comma"
        onChange={(e) => {
          setIngredients(e.target.value);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={ingredientsWeight}
        placeholder="Ingredients weights, seperated by comma"
        onChange={(e) => {
          setIngredientsWeight(e.target.value);
        }}
      />
      <Button style={{ marginTop: 8 }} type="submit">
        Add Dish
      </Button>
    </form>
  );
};

export default AddDishForm;
