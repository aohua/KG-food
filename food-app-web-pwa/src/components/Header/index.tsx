import { useHistory } from "react-router";
import useLongPress from "hooks/useLongPress";
import s from "./index.module.css";
import useLocalStorage, { KEYS } from "hooks/useLocalStorage";

type Props = {
  outlet: string;
};

function Header({ outlet }: Props) {
  const history = useHistory();
  const onLongPress = () => {
    history.push("/admin");
  };
  const [table] = useLocalStorage(KEYS.TABLE, 1);
  const longPressEvent = useLongPress(onLongPress);
  return (
    <div {...longPressEvent} className={s.container}>
      <div className={s.infoContainer}>
        <b>Outlet</b>
        <div className={s.numOfStores}>
          <span style={{ fontWeight: "bold" }}>Table</span>
        </div>
        <div>{outlet}</div>
        <div className={s.est}>
          <span>{table}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
