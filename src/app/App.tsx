import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Cart, CatalogPage, Contacts, ErrorPage, Main } from "pages";
import "./App.css";
import { Footer, Header } from "widgets";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>

      <Footer />
    </div>
  );
}

export default App;
