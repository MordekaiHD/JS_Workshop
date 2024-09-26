// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books;

  constructor(initialBooks = []) {
    if (new Set(initialBooks).size !== initialBooks.length) {
      throw new Error('В начальном списке книг есть дубликаты');
    }
    this.#books = [...initialBooks];
  }

  get allBooks() {
    return [...this.#books];
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга "${title}" уже существует в библиотеке`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книга "${title}" не найдена в библиотеке`);
    }
    this.#books.splice(index, 1);
  }


  hasBook(title) {
    return this.#books.includes(title);
  }
}


try {
  const myLibrary = new Library(['Гарри Поттер', 'Война и мир']);

  // Добавление новой книги
  myLibrary.addBook('1984');

  // Проверка наличия книги
  console.log(myLibrary.hasBook('1984'));

  // Получение всех книг
  console.log(myLibrary.allBooks);

  // Удаление книги
  myLibrary.removeBook('1984');

  // Проверка отсутствия книги
  console.log(myLibrary.hasBook('1984'));
} catch (error) {
  console.error(error.message);
}



// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.


const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function renderReviews() {
  const reviewsContainer = document.querySelector('.reviews-container');
  reviewsContainer.innerHTML = '';

  initialData.forEach(product => {

    const productContainer = document.createElement('div');
    productContainer.className = 'product-reviews';

    const productTitle = document.createElement('h2');
    productTitle.textContent = product.product;
    productContainer.appendChild(productTitle);

    product.reviews.forEach(review => {
      const reviewElement = document.createElement('p');
      reviewElement.textContent = review.text;
      productContainer.appendChild(reviewElement);
    });

    reviewsContainer.appendChild(productContainer);
  });
}

function addReview(reviewText) {
  if (reviewText.length < 50) {
    throw new Error("Отзыв слишком короткий. Минимальная длина — 50 символов.");
  }
  if (reviewText.length > 500) {
    throw new Error("Отзыв слишком длинный. Максимальная длина — 500 символов.");
  }

  const newReview = {
    id: (initialData[0].reviews.length + 1).toString(),
    text: reviewText,
  };
  initialData[0].reviews.push(newReview);

  renderReviews();
}

document.querySelector('.submit-review').addEventListener('click', () => {
  const reviewText = document.querySelector('.review-text').value;
  const errorMessage = document.querySelector('.error-message');

  try {
    errorMessage.textContent = '';
    addReview(reviewText);
    document.querySelector('.review-text').value = '';
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});

renderReviews();
