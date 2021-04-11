import React from "react";
import s from "./index.module.css";

import ItemImage from "./components/ItemImage";

type Props = {
  id: string;
  url: string;
  itemName: string;
  itemPrice: string;
  onClick: (id: string) => void;
};
const ItemCard = ({ id, url, itemName, itemPrice, onClick }: Props) => {
  return (
    <div
      className={s.container}
      onClick={() => {
        onClick(id);
      }}
    >
      <ItemImage url={url} />
      <div className={s.itemName}>{itemName}</div>
      <div className={s.itemPrice}>{itemPrice}</div>
    </div>
  );
};

export default ItemCard;
