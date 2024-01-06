import React from "react";
import "./footer.css";
import { FooterContacts, FooterInfo, FooterPayment } from "./components";

export const Footer = () => {
  return (
    <div className="footer">
      <FooterInfo />
      <FooterPayment />
      <FooterContacts />
    </div>
  );
};
