import { Dish } from "context";
import Button from "components/Button";

type Props = {
  dish: Dish;
  removeDish: () => void;
};

const DishElm = ({ dish, removeDish }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
      }}
    >
      <img
        style={{ width: 80, marginRight: 4 }}
        src={dish.image}
        alt={dish.name}
      />
      <div style={{ marginRight: 4, maxWidth: "calc(100% - 120px)" }}>
        <div style={{ fontWeight: 500, display: "flex" }}>
          <div
            style={{
              flexGrow: 1,
              flexShrink: 1,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >{`${dish.name}`}</div>
          <div
            style={{ flexShrink: 0, marginLeft: 2 }}
          >{`X ${dish.quantity}`}</div>
        </div>
        <div>{`$${dish.price}`}</div>
      </div>
      <Button onClick={removeDish}>X</Button>
    </div>
  );
};

export default DishElm;
