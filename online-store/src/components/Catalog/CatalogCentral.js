import MainFeature from "./MainFeature.js/MainFeature";
import MainFilter from "./MainFilter/MainFilter";
import MainTop from "./MainTop/MainTop";
import Products from "./Products/Products";
import '../../Style/StyleCatalog/style.css';
import { useEffect } from "react";

function CatalogCentral() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="main">
      <MainTop />
      <MainFilter />
      <Products />
      <MainFeature />
    </main>
  );
}

export default CatalogCentral;