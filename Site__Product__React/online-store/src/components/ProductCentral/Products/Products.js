import ProductsDescription from "./ProductsDescription";
import ProductsInfo from "./ProductsInfo";
import ProductsList from "./ProductsList";
import '../../../Style/StyleProduct/style.css';


function Products() {
  return (
    <>
      <ProductsInfo/>
      <ProductsDescription/>
      <ProductsList/>
    </>
  );
}

export default Products;