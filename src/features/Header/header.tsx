import React from "react";
import "./header.css";
import { HeaderNavPanel } from "./headerElements/headerNavPanel";
import { HeaderLogo } from "./headerElements/headerLogo";

export const Header = () => {
  return (
    <div className="header">
      <HeaderNavPanel />
      <HeaderLogo />
    </div>
  );
};
