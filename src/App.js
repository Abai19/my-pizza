import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Slider from './components/slider/Slider';

function App() { 
  return (
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Slider/>
    </div>
  );
}

export default App;
