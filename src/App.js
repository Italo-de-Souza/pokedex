import './App.css';
import { useEffect, useState } from 'react';
import { api } from './api/api.js'
import CardPokemon from './components/CardPokemon';
import Header from './components/Header';

const App = () => {

  const [pokemons, setPokemons] = useState([]);

  async function getPokemons() {
    await api.get(`/pokemon?offset=0&limit=10`).then(res => {
      console.log(res.data);
      return setPokemons(res.data.results)
    },
      err => { return console.log(err); })
  };

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div className="App">
      <Header/>
      <div className="container">
        {pokemons.map((p) => (
          <CardPokemon key={p.name} nomePokemon={p.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
