import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Product from './components/product/Product';
import Slider from './components/slider/Slider';

function App() { 
  return (
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Slider/>
      <Product id="pizzas" name="Пицца"/>
      <Product id="snacks" name="Закуски"/>
      <Product id="desserts" name="Десерты"/>
    </div>
  );
}

export default App;
