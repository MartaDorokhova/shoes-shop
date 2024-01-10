import React, { useState } from "react";
import "./catalog.css";
import { CardProduct } from "entities/cardProduct"; //todo поправить импорт
import { CatalogSearch } from "features";

import {
  useFetchAllItemsQuery,
  useFetchAllСategoriesQuery,
} from "features/catalog";

export const Catalog = () => {
  const [categoryId, setCategoryId] = useState(0);

  const { data: items } = useFetchAllItemsQuery({ limit: 4, categoryId });
  const { data: categories } = useFetchAllСategoriesQuery(4);

  const onChangeCategory = (id: number) => {
    setCategoryId(id);
  };

  return (
    <div className="catalog">
      <CatalogSearch />
      <h2>Каталог</h2>
      <div className="nav-panel">
        <button className="categories" onClick={() => onChangeCategory(0)}>
          Все
        </button>
        {categories?.map(({ id, title }) => (
          <div key={id}>
            <button className="categories" onClick={() => onChangeCategory(id)}>
              {title}
            </button>
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
