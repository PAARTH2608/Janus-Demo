import './App.css';
import Header from './components/globals/Header';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Technology from './components/pages/Technology';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Technology />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
