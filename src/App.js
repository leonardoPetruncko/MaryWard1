import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';
import Accommodation from './components/Accommodation/Accommodation'

function App() {
  return (
    <div className="Holder">
      <Header />
      <AboutUs />
      <Stats />
      <Accommodation />
    </div>
  );
}

export default App;
