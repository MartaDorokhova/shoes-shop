import React, { FC } from "react";
import "./cardProduct.css";
import { CardItemProps } from "./interfaces";

export const CardItem: FC<CardItemProps> = ({
  title,
  price,
  images,
  id,
  category,
}) => {
  return (
    <div className="card-product">
      <img src={images[0]} alt={title} width={210} />

      <div> {title}</div>
      <div> {price} руб.</div>

      <button>Заказать</button>
    </div>
  );
};
