class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(customerName, initialTotalCost) {
    this.customerName = customerName;
    this.totalCost = initialTotalCost;
    this.items = [];
  }
  addItem(product, quantity = 1) {
    this.totalCost += product.price * quantity;
    this.items.push({ product, quantity });
  }
  getCurrentTotalCost() {
    return this.totalCost;
  }
  
  checkout() {
    console.log(`Заказ оформлен для ${this.customerName}`);
    console.log(`Общая стоимость заказа: ${this.totalCost} рублей.`);
    console.log(`Спасибо за покупку!`);
  }
}

const product1 = new Product('Молоко', 1000);
const product2 = new Product('Яйца', 2000);

const shoppingCart = new ShoppingCart('Василий', 0);
shoppingCart.addItem(product1, 2);
shoppingCart.addItem(product2, 2);

shoppingCart.checkout();