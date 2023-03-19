import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';
import Accommodation from './components/Accommodation/Accommodation'
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testemonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
