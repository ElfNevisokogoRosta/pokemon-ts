import { useState, useEffect } from "react"
import axios from "axios"
import { useLocalStorage } from "./useLocacStorage"
import { useDispatch } from "react-redux"
import { setTotalNumber } from "../redux/reducer"
import { IPokemons } from "./interafece"

export const usePokemons = (): [boolean, boolean | null] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(false);
  const [pokemons, setPokemons] = useLocalStorage<IPokemons[]>('local-poke', []);
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      setLoading(true);
      if(pokemons && pokemons?.length>0){
        dispatch(setTotalNumber(pokemons?.length));
        setLoading(false);
        return;
      }
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000000').then(
        res=>{
          setPokemons([...res.data.results]);
          setLoading(false);
        }
      ).catch(e=>{
        setError(e);
        setLoading(false);
      })
    }, [dispatch, pokemons, setPokemons]
  )
  return [loading, error];
}
