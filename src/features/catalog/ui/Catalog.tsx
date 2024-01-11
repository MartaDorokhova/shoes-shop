import React, { useState } from "react";
import "./catalog.css";
import { CatalogSearch } from "features";
import {
  useFetchAllItemsQuery,
  useFetchAllСategoriesQuery,
} from "features/catalog";
import { CardItem } from "entities/cardItem";

const ALL_CATEGORIES = 0;
const FIRST_PAGE = 0;

export const Catalog = () => {
  const [categoryId, setCategoryId] = useState(ALL_CATEGORIES);
  const [offset, setOffSet] = useState(FIRST_PAGE);
  const [isActive, setIsActive] = useState(true);

  const { data: items } = useFetchAllItemsQuery({
    categoryId,
    offset,
  });
  const { data: categories } = useFetchAllСategoriesQuery({});

  const onChangeCategory = (id: number) => {
    setCategoryId(id);
  };

  const addItems = () => {
    setOffSet((prev) => prev + 6);

    if (!items || offset >= items.length) {
      setOffSet((prev) => prev - 6);
      setIsActive(false);
    }
  };

  return (
    <div className="catalog">
      <CatalogSearch />
      <h2>Каталог</h2>
      <div className="nav-panel">
        <button
          className={`categories ${
            categoryId === ALL_CATEGORIES ? "selected" : ""
          }`}
          onClick={() => onChangeCategory(ALL_CATEGORIES)}
        >
          Все
        </button>
        {categories?.map(({ id, title }) => (
          <div key={id}>
            <div
              // className="categories"
              className={`categories ${categoryId === id ? "selected" : ""}`}
              onClick={() => onChangeCategory(id)}
            >
              {title}
            </div>
          </div>
        ))}
      </div>
      <div className="items-card">
        {items?.map(({ title, price, category, images, id }) => (
          <CardItem
            key={id}
            id={id}
            title={title}
            price={price}
            images={images}
            category={category}
          />
        ))}
      </div>
      <button
        onClick={addItems}
        disabled={!isActive || !items || items.length === 0}
        className={isActive ? "activeButton" : "inactiveButton"}
      >
        Загрузить еще
      </button>
    </div>
  );
};
