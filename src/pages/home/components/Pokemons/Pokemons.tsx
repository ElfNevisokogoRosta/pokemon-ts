import React from 'react'
import { IPokemons, IPokemon } from '../../../../utils/interafece'
import { useSelector } from 'react-redux'
import { useLocalStorage } from '../../../../utils/useLocacStorage';
import { Pokemon } from '../Pokemon/Pokemon';
import { Container, List } from '../../style/Pokemons.styled';

export const Pokemons: React.FC = () => {
  const {page, perPage }: IPokemon = useSelector((state: {pokemon:IPokemon})=>state.pokemon);
  const [localPoke] = useLocalStorage<IPokemons[]>('local-poke', []);
  const displayed: number = page*perPage;
  
  return (
    <Container>
      <List>
        {localPoke?.slice(0, displayed).map((pokemon: IPokemons, id:number)=>{
        return <Pokemon key={`${id}-${pokemon.name}`} url={pokemon.url}/>
      })}
      </List>
    </Container>
  )
}
