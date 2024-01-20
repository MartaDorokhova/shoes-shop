import React, { useState } from "react";
import "./item.css";
import { useFetchItemQuery } from "../api/itemApi";
import { useParams } from "react-router-dom";

export const Item = () => {
  const { id } = useParams();
  const { data: item } = useFetchItemQuery(Number(id));
  const [count, setCount] = useState(0);
  console.log(count);
  const onDecrease = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
    console.log(count);
  };
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="item">
      <div>{item?.title}</div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="left">
                <img src={item?.images[0]} alt={item?.title} width={400} />
              </th>
              <th className="right">
                <table>
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{item?.sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{item?.manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{item?.color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{item?.material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{item?.season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{item?.reason}</td>
                    </tr>
                    <tr className="size">
                      Размеры в наличии{" "}
                      {item?.sizes
                        .filter((size) => size.available === true)
                        .map((size) => (
                          <div>{size.size}</div>
                        ))}
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
          </thead>
        </table>
        <div className="count">
          Количество <button onClick={onDecrease}>-</button>
          <div>{count}</div>
          <button onClick={onIncrease}>+</button>
        </div>
        <div className="count">
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
};
