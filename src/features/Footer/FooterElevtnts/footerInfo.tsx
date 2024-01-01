import React from "react";
import "../footer.css";
import { Link } from "react-router-dom";

export const FooterInfo = () => {
  return (
    <div className="footer-element info">
      <div className="name">Информация</div>
      <Link to="/about">О магазине</Link>
      <br />
      <Link to="/">Каталог</Link>
      <br />
      <Link to="/">Контакты</Link>
      <br />
    </div>
  );
};
