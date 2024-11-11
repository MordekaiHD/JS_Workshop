import Cart from "./Cart";
import CartTop from "./CartTop";
import '../../Style/StyleCart/style.css'

function CartCentrale() {
  return (
    <main className="main">
      <CartTop/>
      <Cart/>
    </main>
  );
}

export default CartCentrale;