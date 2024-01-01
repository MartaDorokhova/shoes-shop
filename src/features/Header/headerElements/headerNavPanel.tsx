import { Link } from "react-router-dom";
import "./headerNavPanel.css";

export const HeaderNavPanel = () => {
  return (
    <div className="navPanel">
      <div className="logo">Bosa Noga</div>
      <div className="path">
        {" "}
        <Link to="/">Главная</Link>
      </div>
      <div className="path">
        {" "}
        <Link to="/">Каталог</Link>
      </div>
      <div className="path">
        {" "}
        <Link to="/about">О магазине</Link>
      </div>

      <div className="path">
        {" "}
        <Link to="/">Контакты</Link>
      </div>
    </div>
  );
};
