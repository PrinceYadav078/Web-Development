
import './App.css';
import Banner from './components/Banner';
import Movieslist from './components/Movieslist';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Movieslist/>
    </div>
  );
}

export default App;
