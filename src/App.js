import React, {useState} from 'react'
import './App.css';
import Display from './components/Display';
import PokemonForm from './components/PokemonForm';
import axios from 'axios';

function App() {

  const  [pokemons, setPokemons] = useState([]); 

  const fetchWithAxios = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => {
      console.log(response.data)
      setPokemons(response.data.results)
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="App">

      <PokemonForm fetchWithAxios = {fetchWithAxios} pokemons = {pokemons} />
      <Display pokemons = {pokemons}/>

    </div>
  );
}

export default App;
