import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
     <Home/>
     <About/>
     <Skills/>
     <Portfolio/>
     <Footer/>
    </>
  );
}

export default App;
