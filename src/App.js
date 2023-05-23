import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Pizza from './components/pizza/Pizza';
import Slider from './components/slider/Slider';

function App() { 
  return (
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Slider/>
      <Pizza/>
    </div>
  );
}

export default App;
