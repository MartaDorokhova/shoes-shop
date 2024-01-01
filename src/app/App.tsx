import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../features";
import { About, Cart, Contacts, Error, Main } from "../pages";
import "./App.css";
import { CatalogPage } from "../pages/catalogPage/catalogPage";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        {" "}
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </>

      <Footer />
    </div>
  );
}

export default App;
