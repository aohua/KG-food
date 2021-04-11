import React, { FC } from "react";
import s from "./index.module.css";

type Props = {
  onClick: (variables: any) => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
