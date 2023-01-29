
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>

    </div>
  );
}

export default App;
