import './bootstrap-files/bootstrap-icons.min.css'
import './bootstrap-files/bootstrap.min.css'
import './app.css'
import Header from './components/header/Header';
import About from './components/about/About';
import Products from './components/products/Products';
import Prices from './components/prices/Prices';
import Gallery from './components/gallery/Gallery';
import Questions from './components/questions/Questions';
import Testimonials from './components/testimonials/Testimonials';
import Sponsor from './components/sponsor/Sponsor';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';
export default function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Products />
     <Prices />
     <Gallery />
     <Questions />
     <Testimonials />
     <Sponsor />
     <Download />
     <Footer />
    </div>
  );
}
