import { FormEvent, useState } from "react";
import { Dish } from "context";
import Button from "components/Button";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import s from "./index.module.css";

const AddDishForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [dishs, setDishs] = useLocalStorage<Dish[]>(KEYS.DISHS, []);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    let lastId = 0;
    dishs.forEach((dish) => {
      lastId = Math.max(lastId, Number(dish.id));
    });
    const id = lastId + 1;
    const dish = {
      id: id,
      name: name.trim(),
      price: Number(price.trim()),
      image: image.trim(),
      ingredients: ingredients.trim().split(","),
    };
    const updatedDishs = [...dishs, dish];
    setDishs(updatedDishs);
    setName("");
    setPrice("");
    setImage("");
    setIngredients("");
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
      <Button style={{ marginTop: 8 }} type="submit">
        Add Dish
      </Button>
    </form>
  );
};

export default AddDishForm;
