import Button from "components/Button";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import logo from "./logo.jpeg";
import s from "./index.module.css";

function Details() {
  const history = useHistory();
  const [customerName, setCustomerName] = useLocalStorage<string>(
    KEYS.CUSTOMER_NAME,
    ""
  );
  const [phone, setPhone] = useLocalStorage<string>(KEYS.PHONE, "");
  const [table, setTable] = useLocalStorage<string>(KEYS.TABLE, "");
  return (
    <div className={s.container}>
      <img style={{ width: 140, marginBottom: 40 }} src={logo} alt="logo" />
      <input
        type="text"
        className={s.input}
        value={customerName}
        placeholder="Name"
        onChange={(e) => {
          setCustomerName(e.target.value);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={phone}
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="text"
        className={s.input}
        value={table}
        placeholder="Table No."
        onChange={(e) => {
          setTable(e.target.value);
        }}
      />
      <Button
        style={{ marginTop: 20 }}
        onClick={() => {
          history.push("/menu");
        }}
      >
        Start Order
      </Button>
    </div>
  );
}

export default Details;
