import '../../Style/StyleProduct/style.css';
import MainTop from '../Catalog/MainTop/MainTop';
import Products from './Products/Products';

function ProductCentral() {
  return (
    <main className="main main__product">
      <MainTop/>
      <Products/>
    </main>
  );
}

export default ProductCentral;