
import About from './aboutsection';
import './App.css';
import Navbar from './navv';
import Proj from './projects'
import Foot from './footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main  id="main">
<About></About>
<Proj></Proj>
      </main>
      <Foot></Foot>
      
    </div>
  );
}

export default App;
