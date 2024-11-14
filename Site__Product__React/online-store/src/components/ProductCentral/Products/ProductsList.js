import { useNavigate } from 'react-router-dom';
import products from '../../ProductJSON/productsList';
import { useEffect } from 'react';

function ProductsList() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  }

  return (
    <div className="products__list">
      {products.map(product => (
        <div key={product.id} className="products__items" onClick={() => handleProductClick(product)}>
          <img src={product.image} alt={product.title} className="products__items__img" />
          <div className="products__overlay">
            <img src="/main/product/Add_to_cart.svg" alt="Add to cart" className="products__cart" />
          </div>
          <div className="products__items__info">
            <h2 className="products__items__title">{product.title}</h2>
            <p className="products__items__text">{product.description}</p>
            <p className="products__items__price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;