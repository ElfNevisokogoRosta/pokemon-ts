import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTypedPokemons } from '../../utils/useTypedPokemons';
import { TypePokemons } from './compomemts/TypePokemons';
import { useSelector } from 'react-redux';
import { IPokemon } from '../../utils/interafece';
import { useDispatch } from 'react-redux';
import { nextPage } from '../../redux/reducer';
import {  Button} from './style/Types.styled';
import { ColorRing } from 'react-loader-spinner';

export const Types: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate()
  const type = params?.type || '';
  const [loading, error] = useTypedPokemons(type);
  const {page, perPage, typeNumber } = useSelector((state:{pokemon: IPokemon})=> state.pokemon);
  const hasMore = typeNumber>(page*perPage);
  const dispatch = useDispatch();
  if(error){
    navigate('/404');
  }
  return (
    <> 
      <Link to='/' className='home-link types'>Home</Link>
      
       {loading? (<ColorRing/>):(  <TypePokemons/>) }
   
   {hasMore? (<Button onClick={()=>{
    dispatch(nextPage(page))
   }}>Next page</Button>):('')}
    
   
    </>
  )
}
