import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "context";
import Tab from "./components/Tab";
import Order from "./components/Order";
import AddDishForm from "./components/AddDishForm";
import s from "./index.module.css";
import Button from "components/Button";
const Admin = () => {
  const [showOrders, setShowOrders] = useState(true);
  const { orders } = useContext(GlobalContext);
  const history = useHistory();
  return (
    <div>
      <Tab
        onAdminClick={() => {
          setShowOrders(false);
        }}
        onOrderClick={() => {
          setShowOrders(true);
        }}
      />
      <div className={s.backBtn} onClick={history.goBack}>
        <i style={{ marginRight: 8 }} className="fas fa-chevron-left"></i>
        Back
      </div>
      {showOrders && (
        <div className={s.container}>
          {orders.map((order) => {
            return <Order order={order} />;
          })}
        </div>
      )}
      {!showOrders && (
        <div className={s.container}>
          <Button
            onClick={() => {
              // TODO: upload orders
            }}
          >
            Upload Order
          </Button>
          <Button
            style={{ marginTop: 8 }}
            onClick={() => {
              // TODO: upload orders
            }}
          >
            Sync Menu
          </Button>
          <AddDishForm />
        </div>
      )}
    </div>
  );
};

export default Admin;
