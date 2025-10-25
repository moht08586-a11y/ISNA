import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloralDecoration from './components/FloralDecoration';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
