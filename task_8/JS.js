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

  const buttonCart = document.createElement('button');
  buttonCart.classList.add('button__add__cart');
  buttonCart.style.display = 'none';
  content__products.appendChild(buttonCart);

  const imgCart = document.createElement('img');
  imgCart.src = 'img/products/Add_to_cart.svg';
  imgCart.alt = "Add to Cart";
  imgCart.classList.add('img__cart');
  buttonCart.appendChild(imgCart);

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

  content__products.addEventListener('mouseover', () => {
    imgProduct.style.transition = 'filter 0.5s';
    imgProduct.style.filter = 'brightness(50%)';
    buttonCart.style.display = 'block';
  });

  content__products.addEventListener('mouseout', () => {
    imgProduct.style.transition = 'filter 0.5s';
    imgProduct.style.filter = 'brightness(100%)';
    buttonCart.style.display = 'none';
  });

  buttonCart.addEventListener('click', () => {
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
    priceCart.classList.add('price__cart');
    priceCart.textContent = element.price;
    infoCart.appendChild(priceCart);

    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('button__remove');
    productsCart.appendChild(buttonRemove);

    const buttonImg = document.createElement('img');
    buttonImg.src = 'img/products/cross.svg';
    buttonImg.alt = 'remove';
    buttonRemove.classList.add('img__remuve');
    buttonRemove.appendChild(buttonImg);

    buttonRemove.addEventListener('click', () => {
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
