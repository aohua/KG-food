import React, { useState } from "react";
import Category from "./components/Cateogory";
import s from "./index.module.css";

type Props = {
  categories: { name: string }[];
  className?: string;
};
const Categories = ({ categories, className }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={`${s.container} ${className}`}>
      {categories.map((categoty, index) => {
        return (
          <Category
            name={categoty.name}
            isSelected={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Categories;
