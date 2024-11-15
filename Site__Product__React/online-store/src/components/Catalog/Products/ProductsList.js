import React from 'react';
import ProductStructure from '../../ProductStructure';
import products from '../../ProductJSON/productsCatalog';


function ProductList() {
  return (
    <ProductStructure products={products}/>
  );
}

export default ProductList;