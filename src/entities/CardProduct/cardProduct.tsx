import React from "react";
import "./cardProduct.css";

interface CardProductProps {
  title: string;
  price: number;
  images: Array<string>;
  id: number;
  category: number;
}

export const CardProduct: React.FC<CardProductProps> = ({
  title,
  price,
  images,
  id,
  category,
}) => {
  return (
    <div className="card-product">
      <>
        {" "}
        <img src={images[0]} alt={title} width={210} />
      </>
      <div> {title}</div>
      <div> {price} руб.</div>
      <>
        <button>Заказать</button>
      </>
    </div>
  );
};
