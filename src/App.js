import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';
import Accommodation from './components/Accommodation/Accommodation'
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testemonials';

function App() {
  return (
    <div className="Holder">
      <Header />
      <AboutUs />
      <Stats />
      <Accommodation />
      <WorkProcess />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
