import CartCentrale from "./Cart/CartCentrale";
import IndexCentral from "./IndexCentral/IndexCentral";
import ProductCentral from "./ProductCentral/ProductCentral";
import Registracion from "./Registracion/Registracion";
import CatalogCentral from "./Catalog/CatalogCentral";
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexCentral />} />
        <Route path="/catalog" element={<CatalogCentral />} />
        <Route path="/product/:id" element={<ProductCentral />} />
        <Route path="/cart" element={<CartCentrale />} />
        <Route path="/registracion" element={<Registracion />} />
      </Routes>
    </>
  );
}

export default Main;