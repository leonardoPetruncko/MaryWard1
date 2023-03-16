import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';
import Accommodation from './components/Accommodation/Accommodation'
import WorkProcess from './components/WorkProcess/WorkProcess';

function App() {
  return (
    <div className="Holder">
      <Header />
      <AboutUs />
      <Stats />
      <Accommodation />
      <WorkProcess />
    </div>
  );
}

export default App;
