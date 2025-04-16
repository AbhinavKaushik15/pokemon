import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const results = res.data.results;

      const data = await Promise.all(
        results.map(async (pokemon) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return {
            id: pokemonDetails.data.id,
            name: pokemonDetails.data.name,
            image:
              pokemonDetails.data.sprites.other["official-artwork"]
                .front_default,
          };
        })
      );
      setPokemons(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const filtered = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <MyContext
      value={{
        pokemons,
        setPokemons,
        search,
        setSearch,
        getPokemons,
        filtered,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </MyContext>
  );
};

export default MyState;
