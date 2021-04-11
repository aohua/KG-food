import React from "react";
import s from "./index.module.css";

type Props = {
  url: string;
};
const ItemImage = ({ url }: Props) => {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${url})` }} />
  );
};

export default ItemImage;
