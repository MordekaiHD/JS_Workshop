import React from 'react';

function ProductList() {

  const products = [
    {
      id: 1,
      image: "/Img/product/product1.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    },
    {
      id: 2,
      image: "/Img/product/product2.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    },
    {
      id: 3,
      image: "/Img/product/product3.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    },
    {
      id: 4,
      image: "/Img/product/product4.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    },
    {
      id: 5,
      image: "/Img/product/product5.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    },
    {
      id: 6,
      image: "/Img/product/product6.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    }
  ];

  return (
    <div className="products__list">
      {products.map(product => (
        <div key={product.id} className="products__items">
          <img src={product.image} alt={product.title} className="products__items__img" />
          <div className="products__items__info">
            <h2 className="products__items__title">{product.title}</h2>
            <p className="products__items__text">{product.description}</p>
            <p className="products__items__price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;