import React from "react";
import s from "./index.module.css";

type Props = {
  name: string;
  isSelected: boolean;
  onClick: () => void;
};

const Category = ({ name, isSelected, onClick }: Props) => {
  return (
    <div
      className={`${s.category} ${isSelected ? s.selected : ""}`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default Category;
