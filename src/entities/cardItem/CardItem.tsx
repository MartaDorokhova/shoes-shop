import React, { FC } from "react";
import "./cardProduct.css";
import { CardItemProps } from "./interfaces";
import { useNavigate } from "react-router-dom";

export const CardItem: FC<CardItemProps> = ({
  title,
  price,
  images,
  id,
  category,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card-product">
      <img src={images[0]} alt={title} width={210} />

      <div> {title}</div>
      <div> {price} руб.</div>

      <button onClick={() => navigate(`/catalog/${id}`)}>Заказать</button>
    </div>
  );
};
