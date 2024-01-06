import { CatalogSearch } from "features";
import React from "react";
import { Catalog } from "widgets";

export const CatalogPage = () => {
  return (
    <div>
      <CatalogSearch />
      <Catalog />
    </div>
  );
};
