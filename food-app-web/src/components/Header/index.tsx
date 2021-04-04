import React from "react";
import shopIcon from "./assets/shop_icon.png";
import stopWatchIcon from "./assets/stop_watch_icon.png";
import s from "./index.module.css";

type Props = {
  location: string;
  numOfStores: number;
  est: number;
};

function Header({ location, numOfStores, est }: Props) {
  return (
    <div className={s.container}>
      <div className={s.infoContainer}>
        <b>Deliver food to</b>
        <div className={s.numOfStores}>
          <span>{numOfStores}</span>
          <img style={{ width: 10, height: 8.6 }} alt="shop" src={shopIcon} />
        </div>
        <div>{location}</div>
        <div className={s.est}>
          <span>{est}</span>
          <img
            style={{ width: 10, height: 8.6 }}
            alt="est"
            src={stopWatchIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
