import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

const LinkElm: FC<{ to?: string; className?: string }> = ({
  to,
  children,
  className,
}) => {
  return to ? (
    <Link to={to} className={`${s.link} ${className}`}>
      {children}
    </Link>
  ) : (
    <div className={`${s.link} ${className}`}>{children}</div>
  );
};

export default LinkElm;
