import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'; // Updated path
import Home from './components/home/Home';
import Packing from './components/packages/Packing';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Pages from './components/pages/Pages';
import Book from './components/book/Book';
import Buk from './components/buk/Buk';
import Footer from './components/footer/Footer';
import Pack from './components/pack/Pack';
import Sub from './components/subpart/Sub';
import Type from './components/types/Type';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/packing' element={<Packing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/book' element={<Book />} />
        <Route path='/buk' element={<Buk />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/pack' element={<Pack />} />
        <Route path='/buk' element={<Buk />} />
        <Route path='/sub' element={<Sub />} />
        <Route path='/type' element={<Type />} />







      
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
