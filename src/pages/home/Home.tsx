import React from 'react'
import { Pokemons } from './components/Pokemons/Pokemons'
import { useSelector } from 'react-redux'
import { IPokemon } from '../../utils/interafece'
import { useDispatch } from 'react-redux'
import { nextPage } from '../../redux/reducer'
import { NextPage, Container } from './style/Home.styled'

export const Home: React.FC = () => {
  const {total, perPage, page}: IPokemon = useSelector((state:{pokemon:IPokemon}) => state.pokemon);
  const dispacth = useDispatch();
  const hasMore: boolean = total< perPage*page; 
  
  return (
    <main>
    <Pokemons/>
   {hasMore? (''):(  <Container>
    <NextPage onClick={()=>{
   dispacth(nextPage(page))
   }}>Next page</NextPage>
   </Container>)}
  
   </main>
  )
}
