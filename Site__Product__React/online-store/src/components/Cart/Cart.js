import React, { useState } from 'react';
import { useCart } from "./CartContext";

function Cart() {
  const { cart, updateCart } = useCart();
  const [products, setProducts] = useState(cart);

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
    updateCart(updatedProducts);
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    updateCart(updatedProducts);
  };

  return (
    <div className="cart">
      <div className="cart__product">
        {products.map(product => (
          <div key={product.id} className="cart__product__item">
            <img className="cart__product__item__img" src={`ImgCart/product${product.id}.svg`} alt="product" />
            <div className="cart__product__item__info">
              <h2 className="cart__product__item__title">{product.title}</h2>
              <p className="cart__product__item__price cart__product__item_size">
                Price: <span className="cart__product__item__price__span">${product.price}</span>
              </p>
              <p className="cart__product__item__price cart__product__item_size">
                Color: <span className="cart__product__item__color__span">{product.color}</span>
              </p>
              <p className="cart__product__item__price cart__product__item_size">
                Size: <span className="cart__product__item__size__span">{product.size}</span>
              </p>
              <p className="cart__product__item__quantity cart__product__item_size">
                Quantity: <input
                  className="cart__product__item__input"
                  type="number"
                  value={product.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                />
              </p>
            </div>
            <button className="cart__product__item__button" onClick={() => handleRemoveProduct(product.id)}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
                  fill="#575757"
                />
              </svg>
            </button>
          </div>
        ))}

        <div className="cart__product__button">
          <button className="cart__product__button__clear cart__product__button_size">CLEAR SHOPPING CART</button>
          <button className="cart__product__button__continue cart__product__button_size">CONTINUE SHOPPING</button>
        </div>
      </div>

      <div className="cart__info">
        <div className="shipping__address">
          <h2 className="shipping__address__title">SHIPPING ADDRESS</h2>
          <form action="#" className="shipping__address__form">
            <input className="shipping__address__form__bangladesh shipping__address__form_size" type="text" placeholder="Bangladesh" required />
            <input className="shipping__address__form__input shipping__address__form_size" type="text" placeholder="State" required />
            <input className="shipping__address__form__input shipping__address__form_size" type="text" placeholder="Postcode / Zip" required />
            <button className="shipping__address__form__button" type="submit">GET A QUOTE</button>
          </form>
        </div>

        <div className="final__price">
          <h2 className="final__price__top">
            SUB TOTAL <span className="final__price__top__span">${calculateTotal()}</span>
          </h2>
          <h3 className="final__price__total">
            GRAND TOTAL <span className="final__price__span">${calculateTotal()}</span>
          </h3>
          <hr className="final__price__line" />
          <button className="final__price__button" type="submit">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
