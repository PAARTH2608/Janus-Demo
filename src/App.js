import './App.css';
import Header from './components/globals/Header';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Technologies from './components/pages/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Technologies />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
