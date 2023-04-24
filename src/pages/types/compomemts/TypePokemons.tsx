import React from 'react'
import { IPokemon, ITypedPokemons } from '../../../utils/interafece'
import { useSelector } from 'react-redux'
import { useLocalStorage } from '../../../utils/useLocacStorage';
import { Container, TypeList } from '../style/TypePokemons.styled';
import { Pokemon } from '../../home/components/Pokemon/Pokemon';

export const TypePokemons: React.FC = () => {
  const {page, perPage}: IPokemon = useSelector((state: {pokemon: IPokemon})=> state.pokemon);
  const [typePoke] = useLocalStorage<ITypedPokemons[]>('typed-poke', []);
  const displayed: number = page*perPage;
  return (
    <Container>
      <TypeList>
    {typePoke?.slice(0, displayed).map((pokemon:ITypedPokemons, id: number)=>{
      return <Pokemon key={`${id}-${pokemon.pokemon.name}`} url={pokemon.pokemon.url}/>
    })}
    </TypeList>
    </Container>
  )
}
