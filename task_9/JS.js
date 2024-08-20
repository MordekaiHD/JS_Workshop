// 1) Дан массив с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];

const min = Math.min(...arr);


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(num) {
  let value = num;
  return {
    increment() {
      value++;
    },
    decrement() {
      value--;
    },
    getValue() {
      return value;
    }
  };
}

let counter = createCounter(10);
counter.increment();
counter.decrement();
console.log(counter.getValue());



// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  for (let i = 0; i < rootElement.children.length; i++) {
    const childElement = findElementByClass(rootElement.children[i], className);
    if (childElement) {
      return childElement;
    }
  }
  return null;
}

// Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
