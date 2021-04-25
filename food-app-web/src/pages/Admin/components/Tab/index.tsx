import { useState } from "react";
import s from "./index.module.css";
type Props = {
  onOrderClick: () => void;
  onAdminClick: () => void;
};
const Tab = ({ onOrderClick, onAdminClick }: Props) => {
  const [active, setActive] = useState("orders");
  return (
    <div className={s.tabContainer}>
      <div
        className={`${s.tab} ${active === "orders" ? s.active : ""}`}
        onClick={() => {
          setActive("orders");
          onOrderClick();
        }}
      >
        Orders
      </div>
      <div
        className={`${s.tab} ${active === "admin" ? s.active : ""}`}
        onClick={() => {
          setActive("admin");
          onAdminClick();
        }}
      >
        Admin
      </div>
    </div>
  );
};

export default Tab;
