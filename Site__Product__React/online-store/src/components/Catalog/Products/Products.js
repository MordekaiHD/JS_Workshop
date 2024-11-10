import Pagination from "../Pagination/Pagination";
import ProductList from "./ProductsList";

function Products() {
  return (
    <div className="products">
      <ProductList />
      <Pagination />
    </div>
  );
}

export default Products;