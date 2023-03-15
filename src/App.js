import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="Holder">
      <Header />
      <AboutUs />
      <Stats />
    </div>
  );
}

export default App;
