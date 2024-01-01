import React from "react";
import "./main.css";
import { Catalog, Hits } from "../../features";

export const Main = () => {
  return (
    <div className="main">
      <Hits />
      <Catalog />
    </div>
  );
};
