const data = JSON.parse(featuredItems);
const products = document.querySelector('.products');
const cartItems = document.querySelector('.cart__Items');


data.forEach(element => {
  const content__products = document.createElement('div');
  content__products.classList.add('content__products');
  products.appendChild(content__products);

  const imgProduct = document.createElement('img');
  imgProduct.src = element.img;
  imgProduct.alt = "foto";
  imgProduct.classList.add('img__prod');
  content__products.appendChild(imgProduct);

  const infoProducts = document.createElement('div');
  infoProducts.classList.add('info__products');
  content__products.appendChild(infoProducts);

  const titleProduct = document.createElement('h3');
  titleProduct.classList.add('title__prod');
  titleProduct.textContent = element.title;
  infoProducts.appendChild(titleProduct);

  const textProduct = document.createElement('p');
  textProduct.classList.add('text__prod');
  textProduct.textContent = element.text;
  infoProducts.appendChild(textProduct);

  const priceProduct = document.createElement('p');
  priceProduct.classList.add('price');
  priceProduct.textContent = element.price;
  infoProducts.appendChild(priceProduct);

  imgProduct.addEventListener('mouseover', () => {
    imgProduct.style.transition = 'filter 0.5s';
    imgProduct.style.filter = 'brightness(50%)';
  });

  imgProduct.addEventListener('mouseout', () => {
    imgProduct.style.transition = 'filter 0.5s';
    imgProduct.style.filter = 'brightness(100%)';

  });

  imgProduct.addEventListener('click', () => {
    
    const productsCart = document.createElement('div');
    productsCart.classList.add('products__cart');
    cartItems.appendChild(productsCart);
    shoppingCartVisibility();

    const imgCart = document.createElement('img');
    imgCart.src = element.img;
    imgCart.alt = "foto";
    imgCart.classList.add('img__cart');
    productsCart.appendChild(imgCart);

    const infoCart = document.createElement('div');
    infoCart.classList.add('info__cart');
    productsCart.appendChild(infoCart);

    const titleCart = document.createElement('h3');
    titleCart.classList.add('title__cart');
    titleCart.textContent = element.title;
    infoCart.appendChild(titleCart);

    const textCart = document.createElement('p');
    textCart.classList.add('text__cart');
    textCart.textContent = element.text;
    infoCart.appendChild(textCart);

    const priceCart = document.createElement('p');
    priceCart.classList.add('price');
    priceCart.textContent = element.price;
    infoCart.appendChild(priceCart);

    const buutonRemuve = document.createElement('button');
    buutonRemuve.classList.add('buuton__remuve');
    buutonRemuve.textContent = 'Remover do carrinho';
    productsCart.appendChild(buutonRemuve);

    buutonRemuve.addEventListener('click', () => {
      productsCart.remove();
      shoppingCartVisibility();
    });
  });

  function shoppingCartVisibility() {
    if (cartItems.children.length > 0) {
      cartItems.style.display = 'block';
    } else {
      cartItems.style.display = 'none';
    }
  }

});
