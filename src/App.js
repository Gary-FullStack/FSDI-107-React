
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';



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
