import { FC } from "react";
import s from "./index.module.css";

const Link: FC<{ className?: string }> = ({ children, className }) => {
  return <div className={`${s.link} ${className}`}>{children}</div>;
};

export default Link;
