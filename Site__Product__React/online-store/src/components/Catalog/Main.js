import IndexCentral from "../IndexCentral/IndexCentral";
import MainFeature from "./MainFeature.js/MainFeature";
import MainFilter from "./MainFilter";
import MainTop from "./MainTop";
import Products from "./Products/Products";
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/index" element={<IndexCentral />} />

        <Route path="/catalog" element={<>
          <MainTop />
          <MainFilter />
          <Products />
          <MainFeature />
        </>} />


      </Routes>
    </main>
  );
}

export default Main;