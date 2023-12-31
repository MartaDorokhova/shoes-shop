import React from "react";
import { Link } from "react-router-dom";
import "./catalog.css";
import { CardProduct } from "entities/cardProduct"; //todo поправить импорт
import { CatalogSearch } from "features";

export const Catalog = () => {
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
      <CardProduct />
    </div>
  );
};
