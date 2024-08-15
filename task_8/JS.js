const data = JSON.parse(featuredItems);
const products = document.querySelector('.products');

data.forEach(element => {
  const content__products = document.createElement('div');
  content__products.classList.add('content__products');
  products.appendChild(content__products);

  const linkProduct = document.createElement('a');
  linkProduct.classList.add('products__link');
  linkProduct.href = '#';
  content__products.appendChild(linkProduct);

  const imgProduct = document.createElement('img');
  imgProduct.src = element.img;
  imgProduct.alt = "foto";
  imgProduct.classList.add('img__prod');
  linkProduct.appendChild(imgProduct);

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
});