import { FC, CSSProperties } from "react";
import s from "./index.module.css";

type Props = {
  type?: "submit" | "button";
  onClick?: (variables: any) => void;
  style?: CSSProperties;
};

const Button: FC<Props> = ({ children, onClick, type = "button", ...rest }) => {
  return (
    <button type={type} className={s.button} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
