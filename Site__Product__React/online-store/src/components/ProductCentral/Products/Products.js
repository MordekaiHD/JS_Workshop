import ProductsDescription from "./ProductsDescription";
import ProductsInfo from "./ProductsInfo";
import ProductsList from "./ProductsList";
import '../../../Style/StyleProduct/style.css';
import { useEffect } from "react";


function Products() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <ProductsInfo />
      <ProductsDescription />
      <ProductsList />
    </>
  );
}

export default Products;