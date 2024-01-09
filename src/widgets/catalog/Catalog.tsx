import React from "react";
import { Link } from "react-router-dom";
import "./catalog.css";
import { CardProduct } from "entities/cardProduct"; //todo поправить импорт
import { CatalogSearch } from "features";
import { useFetchAllItemsQuery } from "api/api";

export const Catalog = () => {
  const { data: items } = useFetchAllItemsQuery(4);
  return (
    <div className="catalog">
      <CatalogSearch />
      <h2>Каталог</h2>
      <div className="nav-panel">
        <div>
          <Link to="">Все</Link>
        </div>
        <div>
          <Link to=""> Женская обувь</Link>
        </div>
        <div>
          <Link to=""> Мужская обувь</Link>
        </div>
        <div>
          <Link to=""> Обувь унисекс</Link>
        </div>
        <div>
          <Link to=""> Детская обувь</Link>
        </div>
      </div>
      <div className="items-card">
        {items &&
          items.map(({ title, price, category, images, id }) => (
            <div key={id}>
              {" "}
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
