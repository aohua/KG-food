import { useState } from "react";
import Category from "./components/Cateogory";
import s from "./index.module.css";

type Props = {
  categories: { name: string }[];
  onSelect: (name: string) => void;
  className?: string;
};
const Categories = ({ categories, className, onSelect }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={`${s.container} ${className}`}>
      {categories.map((categoty, index) => {
        return (
          <Category
            key={categoty.name}
            name={categoty.name}
            isSelected={index === selectedIndex}
            onClick={() => {
              onSelect(categoty.name);
              setSelectedIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Categories;
