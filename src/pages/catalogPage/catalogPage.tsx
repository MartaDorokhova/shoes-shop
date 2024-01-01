import React from "react";
import { Catalog } from "../../features";
import { CatalogSearch } from "./catalogSearch";

export const CatalogPage = () => {
  return (
    <div>
      <CatalogSearch />
      <Catalog />
    </div>
  );
};
