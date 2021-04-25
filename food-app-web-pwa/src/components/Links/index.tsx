import React, { FC } from "react";
import s from "./index.module.css";

const Links: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className={`${s.container} ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const isLast = index === React.Children.count(children) - 1;
          return (
            <>
              {React.cloneElement(
                child,
                isLast ? { className: s.lastLink } : {}
              )}{" "}
              {isLast ? "" : <div className={s.spliter}>{">"}</div>}
            </>
          );
        }
      })}
    </div>
  );
};

export default Links;
