import React from "react";
import ItemImage from "./components/ItemImage";
import Button from "components/Button";
import s from "./index.module.css";

type Props = {
  id: string;
  url: string;
  itemName: string;
  itemPrice: string;
  onClick: (id: string) => void;
};

const HorizontalCard = ({ id, url, itemName, itemPrice, onClick }: Props) => {
  return (
    <div className={s.container}>
      <ItemImage url={url} />
      <div style={{ marginLeft: 12, flexGrow: 1 }}>
        <div className={s.itemName}>{itemName}</div>
        <div className={s.itemPrice}>{itemPrice}</div>
        <div style={{ textAlign: "right" }}>
          <Button onClick={onClick}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
