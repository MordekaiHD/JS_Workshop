// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).


let reviewsData = JSON.parse(localStorage.getItem('reviewsData')) || {};

function addReview() {
  const productName = document.querySelector('.product-name').value.trim();
  const reviewText = document.querySelector('.review-text').value.trim();
  
  if (productName && reviewText) {
    if (!reviewsData[productName]) {
      reviewsData[productName] = [];
    }
    
    reviewsData[productName].push(reviewText);
    localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
    
    document.querySelector('.product-name').value = '';
    document.querySelector('.review-text').value = '';
    displayProducts();
  }
}

function displayProducts() {
  const productList = document.querySelector('.product-list');
  productList.innerHTML = '';
  
  Object.keys(reviewsData).forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.textContent = product;
    productDiv.onclick = () => displayReviews(product);
    productList.appendChild(productDiv);
  });
}

function displayReviews(product) {
  const reviewsContainer = document.querySelector('.reviews');
  reviewsContainer.innerHTML = `<h3>Отзывы о ${product}</h3>`;
  
  reviewsData[product].forEach((review, index) => {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.innerHTML = `
            <span>${review}</span>
            <button onclick="deleteReview('${product}', ${index})">Удалить</button>
        `;
    reviewsContainer.appendChild(reviewDiv);
  });
}

function deleteReview(product, index) {
  reviewsData[product].splice(index, 1);
  if (reviewsData[product].length === 0) {
    delete reviewsData[product];
  }
  localStorage.setItem('reviewsData', JSON.stringify(reviewsData));
  displayReviews(product);
  displayProducts();
}

displayProducts();