import React, { useMemo, useRef } from "react";
import "./catalog.css";
import { CatalogSearch } from "features";
import {
  useFetchAllItemsQuery,
  useFetchAllСategoriesQuery,
} from "features/catalog";
import { CardItem } from "entities/cardItem";
import { ItemListResponse } from "../interfaces";
import { ErrorPage } from "pages";

const ALL_CATEGORIES = 0;
const OFFSET = 6;
const START_PAGE = 0;
let allItems: ItemListResponse[] = [];

export const Catalog = () => {
  const offsetRef = useRef(0);
  const categoryRef = useRef(ALL_CATEGORIES);
  const changeCategoryRef = useRef(false);

  const {
    data: items,
    refetch,
    isError,
    isLoading,
  } = useFetchAllItemsQuery({
    categoryId: categoryRef.current,
    offset: offsetRef.current,
  });

  const { data: categories } = useFetchAllСategoriesQuery({});

  const handleChangeCategory = (id: number) => {
    allItems = [];
    refetch();
    changeCategoryRef.current = true;
    categoryRef.current = id;
    offsetRef.current = START_PAGE;
  };

  const allCategoryButton = `categories ${
    categoryRef.current === ALL_CATEGORIES ? "selected" : ""
  }`;

  const changeCategoryButton = (id: number) =>
    `categories ${categoryRef.current === id ? "selected" : ""}`;

  const handleLoadMoreItems = () => {
    changeCategoryRef.current = false;
    offsetRef.current += OFFSET;
    refetch();
  };

  allItems = useMemo(() => {
    if (changeCategoryRef.current && items) return [...items];
    if (items) return [...allItems, ...items];
    return [];
  }, [items]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <ErrorPage />;

  return (
    <div className="catalog">
      <CatalogSearch />
      <h2>Каталог</h2>
      <div className="nav-panel">
        <button
          className={allCategoryButton}
          onClick={() => handleChangeCategory(ALL_CATEGORIES)}
        >
          Все
        </button>
        {categories?.map(({ id, title }) => (
          <div key={id}>
            <div
              className={changeCategoryButton(id)}
              onClick={() => handleChangeCategory(id)}
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
        <></>
      ) : (
        <button onClick={handleLoadMoreItems}>Загрузить еще</button>
      )}
    </div>
  );
};
