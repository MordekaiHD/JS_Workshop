import { Link } from "react-router-dom";
import ProductStructure from "../ProductStructure";
import products from '../ProductJSON/products';
import MainFeature from "../Catalog/MainFeature.js/MainFeature";


function IndexProducts() {
  return (
    <div className="products">
      <h2 className="products__title">Featured Items</h2>
      <p className="products__text">Shop for items based on what we featured this week</p>
      <ProductStructure products={products} />
      <div className="products__position">
        <Link to="/catalog" className="products__button" type="button">Browse All Products</Link>
      </div>
      <MainFeature />
    </div>
  );
}

export default IndexProducts;