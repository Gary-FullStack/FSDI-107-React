
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Admin from './pages/admin';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notFound';





import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>

      <div className="App">

        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer></Footer>

      </div>
    </BrowserRouter>

  );
}

export default App;
