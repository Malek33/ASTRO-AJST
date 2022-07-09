import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Navbar/>
        <br/><br/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
