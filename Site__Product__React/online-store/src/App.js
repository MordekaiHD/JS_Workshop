// import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Catalog/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './Style/StyleHeader/style.css';
import './Style/StyleFooter/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
