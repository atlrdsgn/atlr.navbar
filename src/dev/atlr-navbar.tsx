import React from "react";
import css from "./css.module.css";

interface AtlrProps {
  children: React.ReactNode;
}

export const AtlrNavbar = ({ children }: AtlrProps) => {
  return (
    <>
      <div className={css.navPlacement}>
        <div className={css.appBar}>{children}</div>
      </div>
    </>
  );
};
