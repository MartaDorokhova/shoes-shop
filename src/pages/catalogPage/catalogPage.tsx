import React from "react";
import { Catalog } from "widgets";
import { CatalogSearch } from "./CatalogSearch";

export const CatalogPage = () => {
  return (
    <div>
      <CatalogSearch />
      <Catalog />
    </div>
  );
};
