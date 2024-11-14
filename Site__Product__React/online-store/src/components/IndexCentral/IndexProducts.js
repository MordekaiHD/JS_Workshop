import products from '../ProductJSON/products';
import { useNavigate } from 'react-router-dom';

function IndexProducts() {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  }

  return (
    <div className="products">
      <h2 className="products__title">Featured Items</h2>
      <p className="products__text">Shop for items based on what we featured this week</p>
      <div className="products__lists">
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

      <div className="products__position">
        <button className="products__button" type="button">Browse All Products</button>
      </div>

      <div className="feature">
        {[
          { img: "machine", title: "Free Delivery", text: "Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models." },
          { img: "discount", title: "Sales & Discounts", text: "Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models." },
          { img: "crown", title: "Quality Assurance", text: "Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models." },
        ].map((feature, index) => (
          <div key={index} className="feature__delivery">
            <img src={`/main/deliveryDescription/${feature.img}.svg`} alt={feature.img} className="feature__machine__img" />
            <h2 className="feature__machine__title">{feature.title}</h2>
            <p className="feature__machine__text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndexProducts;