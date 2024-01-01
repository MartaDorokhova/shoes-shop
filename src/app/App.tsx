import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../features";
import { About, Main } from "../pages";
import "./App.css";

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
          </Route>
        </Routes>
      </>

      <Footer />
    </div>
  );
}

export default App;
