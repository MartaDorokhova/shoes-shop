import React, { useEffect, useState } from "react";
import "./catalog.css";
import { CatalogSearch } from "features";
import {
  useFetchAllItemsQuery,
  useFetchAllСategoriesQuery,
} from "features/catalog";
import { CardItem } from "entities/cardItem";
import { ItemListResponse } from "../interfaces";

const ALL_CATEGORIES = 0;
const FIRST_PAGE = 0;

export const Catalog = () => {
  const [categoryId, setCategoryId] = useState(ALL_CATEGORIES);
  const [offset, setOffSet] = useState(FIRST_PAGE);
  const [allItems, setAllItems] = useState<ItemListResponse[]>([]);

  const { data: items } = useFetchAllItemsQuery({
    categoryId,
    offset,
  });
  const { data: categories } = useFetchAllСategoriesQuery({});

  const onChangeCategory = (id: number) => {
    setOffSet(FIRST_PAGE);
    setAllItems([]);
    setCategoryId(id);
  };

  const addItems = () => {
    setOffSet((prev) => prev + 6);
  };

  useEffect(() => {
    if (items) {
      setAllItems((prevItems) => [...prevItems, ...items]);
    }
  }, [items]);

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
              className={`categories ${categoryId === id ? "selected" : ""}`}
              onClick={() => onChangeCategory(id)}
            >
              {title}
            </div>
          </div>
        ))}
      </div>
      <div className="items-card">
        {allItems?.map(({ title, price, category, images, id }) => (
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
      {!items || items.length === 0 ? (
        ""
      ) : (
        <button onClick={addItems}>Загрузить еще</button>
      )}
    </div>
  );
};
