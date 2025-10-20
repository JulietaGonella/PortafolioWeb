import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}


export default App;
