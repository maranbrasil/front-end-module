import './App.css';
import Pokemon from './Pokemon.js'
import pokemons from './data'

function App() {
  return (
    <div className="App">
     <Pokemon info={ pokemons[0] } />
    </div>
  );
}

export default App;
