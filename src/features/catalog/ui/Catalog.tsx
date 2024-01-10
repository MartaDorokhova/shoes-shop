import React from "react";
import { Link } from "react-router-dom";
import "./catalog.css";
import { CardProduct } from "entities/cardProduct"; //todo поправить импорт
import { CatalogSearch } from "features";

import {
  useFetchAllItemsQuery,
  useFetchAllСategoriesQuery,
} from "features/catalog";

export const Catalog = () => {
  const { data: items } = useFetchAllItemsQuery(4);
  const { data: categories } = useFetchAllСategoriesQuery(4);

  return (
    <div className="catalog">
      <CatalogSearch />
      <h2>Каталог</h2>
      <div className="nav-panel">
        <Link to="">Все</Link>
        {categories?.map(({ id, title }) => (
          <div key={id} className="categories">
            <Link to="">{title}</Link>
          </div>
        ))}
      </div>
      <div className="items-card">
        {items &&
          items.map(({ title, price, category, images, id }) => (
            <div key={id}>
              <CardProduct
                id={id}
                title={title}
                price={price}
                images={images}
                category={category}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
