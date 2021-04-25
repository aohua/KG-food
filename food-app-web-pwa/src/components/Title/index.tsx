import React, { FC } from "react";
import s from "./index.module.css";

const Title: FC<{ className?: string }> = ({ children, className }) => {
  return <div className={`${s.title} ${className}`}>{children}</div>;
};

export default Title;
