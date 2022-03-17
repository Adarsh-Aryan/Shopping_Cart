
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/HomePage/Home';
import Cart from './components/CartPage/Cart'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </BrowserRouter>
    
  );
}

export default App;
