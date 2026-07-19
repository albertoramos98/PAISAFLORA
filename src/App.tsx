import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Proceso from './components/Proceso';
import ElegirNosotros from './components/ElegirNosotros';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import BotonWhatsapp from './components/BotonWhatsapp';
import BotonVolverArriba from './components/BotonVolverArriba';

function App() {
  return (
    <div className="relative min-h-screen bg-paisa-cream text-paisa-dark selection:bg-paisa-natural selection:text-white">
      <Navbar />
      <Hero />
      <SobreNosotros />
      <Servicios />
      <Galeria />
      <Proceso />
      <ElegirNosotros />
      <Testimonios />
      <Contacto />
      <Footer />
      <BotonWhatsapp />
      <BotonVolverArriba />
    </div>
  );
}

export default App;

