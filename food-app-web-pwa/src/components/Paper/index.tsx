import React, { FC } from "react";
import s from "./index.module.css";

const Paper: FC<{}> = ({ children }) => {
  return <div className={s.paper}>{children}</div>;
};

export default Paper;
