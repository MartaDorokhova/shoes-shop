import React from "react";
import "./header.css";
import { HeaderLogo, HeaderNavPanel } from "./components";

export const Header = () => {
  return (
    <div className="header">
      <HeaderNavPanel />
      <HeaderLogo />
    </div>
  );
};
