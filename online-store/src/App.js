import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';
import './Style/StyleHeader/style.css';
import './Style/StyleFooter/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Header />
          <Main />
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
