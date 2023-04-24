
import {useState, useEffect} from 'react'
import { useLocalStorage } from './useLocacStorage';
import { ITypedPokemons } from './interafece';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { resetPage, setTypeNumber } from '../redux/reducer';

export const useTypedPokemons = (type:string): [boolean, boolean | null] => {
  const dispatch = useDispatch();
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [typedPoke, setTypedPoke] = useLocalStorage<ITypedPokemons[]>('typed-poke', []);
  
  useEffect(
    ()=>{
      setLoading(true);
      axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(
        res =>{ 
          setTypedPoke([...res.data.pokemon]);
          dispatch(setTypeNumber(res.data.pokemon.length));
          setLoading(false);
          dispatch(resetPage(typedPoke));
        }
      ).catch(e=>{
        setError(e);
        setLoading(false);
      })
    }
    ,[type]
  )
  return [loading, error];
}
