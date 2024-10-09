// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const images = document.querySelectorAll('.dog__img');
const indicators = document.querySelectorAll('.indicators');
const button__next = document.querySelector('.button__next');
const button__backward = document.querySelector('.button__backward');
let currentIndex = 0;

function updateSlider(index) {
  images.forEach((img) => img.classList.remove('active'));
  indicators.forEach((indicator) => indicator.classList.remove('active'));

  images[index].classList.add('active');
  indicators[index].classList.add('active');
}

button__next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider(currentIndex);
});

button__backward.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider(currentIndex);
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', (event) => {
    currentIndex = parseInt(event.target.getAttribute('data-index'));
    updateSlider(currentIndex);
  });
});
