import './bootstrap-files/bootstrap-icons.min.css'
import './bootstrap-files/bootstrap.min.css'
import './app.css'
import Header from './components/header/Header';
import About from './components/about/About';
import Products from './components/products/Products';

export default function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Products />
    </div>
  );
}
