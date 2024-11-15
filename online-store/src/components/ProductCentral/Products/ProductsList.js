import products from '../../ProductJSON/productsList';
import ProductStructure from '../../ProductStructure';

function ProductsList() {
  return (
    <ProductStructure products={products} />
  );
}

export default ProductsList;