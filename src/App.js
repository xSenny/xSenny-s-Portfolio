import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Header from './components/Header/Header.jsx'
import Footer  from './components/Footer/Footer.jsx'
import Me from './components/Ui/Me';
import Services from './components/Ui/Services';
import Portfolio from './components/Ui/Portfolio';
import Contact from './components/Ui/Contact';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main><Me />
      <Services />
      <Portfolio />
      <Contact /></main>
      <Footer />
    </>
  );
}

export default App;
