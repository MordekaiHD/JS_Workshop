import React from 'react';
import { useCart } from '../../Cart/CartContext';
import products from '../../products';

function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="products__list">
      {products.map(product => (
        <div key={product.id} className="products__items">
          <img src={product.image} alt={product.title} className="products__items__img" />
          <div className="products__overlay">
            <img src="/main/product/Add_to_cart.svg" alt="Add to cart" className="products__cart" onClick={() => addToCart(product)}/>
          </div>
          <div className="products__items__info">
            <h2 className="products__items__title">{product.title}</h2>
            <p className="products__items__text">{product.description}</p>
            <p className="products__items__price">${product.price}</p>
          </div>
        </div>

      ))}
    </div>
  );
}

export default ProductList;