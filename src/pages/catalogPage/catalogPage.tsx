import React from "react";
import { CatalogSearch } from "./catalogSearch";
import { Catalog } from "widgets";

export const CatalogPage = () => {
  return (
    <div>
      <CatalogSearch />
      <Catalog />
    </div>
  );
};
