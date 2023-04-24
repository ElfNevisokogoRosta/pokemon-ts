/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useState, useEffect } from "react"
import {ISearchedPokemon} from "./interafece";

export const usePokemonSearch = (query: string): [boolean, boolean, ISearchedPokemon ] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState<ISearchedPokemon >({
    name: ' ', 
    img: '',
    types: [],
    stats: [],
    abilities: [],
  });

  useEffect(() => {
    if (query === '' || query === undefined) {
      return;
    }
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`).then(
      res => {
        setResult({
          name: res.data.name,
          img: res.data.sprites.front_default,
          types: res.data.types,
          stats: res.data.stats,
          abilities: res.data.abilities,
        });
        setLoading(false);
      }
    ).catch(e => {
      setError(e);
      setLoading(false);
    });
  }, [query]);

  return [loading, error, result];
};
