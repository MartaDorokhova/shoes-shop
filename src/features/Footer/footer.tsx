import React from "react";
import "./footer.css";
import { FooterInfo } from "./FooterElevtnts/footerInfo";
import { FooterContacts } from "./FooterElevtnts/footerContacts";
import { FooterPayment } from "./FooterElevtnts/footerPayment";

export const Footer = () => {
  return (
    <div className="footer">
      <FooterInfo />
      <FooterPayment />
      <FooterContacts />
    </div>
  );
};
