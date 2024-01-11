import React, { useState } from "react";
import "./catalog.css";
import { CatalogSearch } from "features";
import {
  useFetchAllItemsQuery,
  useFetchAllСategoriesQuery,
} from "features/catalog";
import { CardItem } from "entities/cardItem";

const ALL_CATEGORIES = 0;

export const Catalog = () => {
  const [categoryId, setCategoryId] = useState(ALL_CATEGORIES);

  const { data: items } = useFetchAllItemsQuery({
    categoryId,
  });
  const { data: categories } = useFetchAllСategoriesQuery({});

  const onChangeCategory = (id: number) => {
    setCategoryId(id);
  };

  return (
    <div className="catalog">
      <CatalogSearch />
      <h2>Каталог</h2>
      <div className="nav-panel">
        <button
          className="categories"
          onClick={() => onChangeCategory(ALL_CATEGORIES)}
        >
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
        {items?.map(({ title, price, category, images, id }) => (
          <div key={id}>
            <CardItem
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
