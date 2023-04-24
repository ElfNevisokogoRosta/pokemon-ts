import {useState, useEffect} from 'react'
import { IResult } from './interafece'
import axios from 'axios';

export const usePokemonLoad = (url: string): [boolean, boolean |null, IResult] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<IResult >({name: '', img: '', type: [], stats: []});
  useEffect(()=>{
    setLoading(true);
    axios.get(url).then(
      res => {
        setData({
          name: res.data.name ,
          img: res.data.sprites.front_default,
          type: res.data.types,
          stats: res.data.stats,
        })
        setLoading(false);
      }
    ).catch(e=>{
      setError(e);
      setLoading(false);
    })
  }, [url])
  return [loading, error, data];
}
