import React from "react";
import "../footer.css";
import { Link } from "react-router-dom";

export const FooterContacts = () => {
  return (
    <div className="footer-element contacts">
      <div className="name">Контакты:</div> <Link to="">+7 495 79 03 5 03</Link>{" "}
      <div>Ежедневно: с 09-00 до 21-00</div>
      <Link to="">office@bosanoga.ru</Link>
    </div>
  );
};
