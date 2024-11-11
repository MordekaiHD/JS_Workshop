import '../../Style/StyleProduct/style.css';
import MainTop from '../Catalog/MainTop';
import Products from './Products/Products';


function ProductCentral() {
  return (
    <main className="main">
      <MainTop/>
      <Products/>
    </main>
  );
}

export default ProductCentral;