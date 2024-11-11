import CartCentrale from "../Cart/CartCentrale";
import IndexCentral from "../IndexCentral/IndexCentral";
import ProductCentral from "../ProductCentral/ProductCentral";
import CatalogCentral from "./CatalogCentral";
import { Routes, Route } from 'react-router-dom';


function Main() {
  return (
    <>
      <Routes>
        <Route path="/index" element={<IndexCentral />} />
        <Route path="/catalog" element={<CatalogCentral />} />
        <Route path="/product" element={<ProductCentral />} />
        <Route path="/cart" element={<CartCentrale />} />
      </Routes>
    </>
  );
}

export default Main;