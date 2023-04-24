import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemonSearch } from '../../utils/usePokemonSearch';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AbilitiesElement ,AbilitiesList,StatsList ,PokemonSubTitle ,Container, ResultTitle, CardContainer, PokemonTitle, StatDis, PokemonImg, TypeElement, TypeList, StatsElement } from './style/SearchResult.styled';
import { ColorRing } from 'react-loader-spinner';


export const SearchResult: React.FC = () => {
  const params = useParams();
  const navigatae = useNavigate();
  if(params.q === '' && params.q === undefined){
    navigatae('/404');
  }
  const [loading, error, result] = usePokemonSearch(params.q ?? '');
  const {name, img, types, stats, abilities} = result;
  if(loading){
    return <div><ColorRing/></div>
  }
  if(error){
    navigatae('/404');
  }

  return (
    <Container>
      <div>
      <ResultTitle>Result for: {params.q}</ResultTitle>
      <Link to='/' className='home-link'>Home</Link>
      </div>
      <CardContainer>
        <PokemonTitle>{name}</PokemonTitle>
        <div><PokemonImg src={img} alt={name} /></div>
        <TypeList>
         {types && types.map((type: {type: {name: string}}, id:number)=>{
          return (<TypeElement theme={type?.type.name} key={`${type?.type.name}-${id} `}>{type?.type.name}</TypeElement>)
        })} 
        </TypeList>
        <PokemonSubTitle>Stats</PokemonSubTitle>
       <StatsList>
        {stats && stats.map((stat:{base_stat: number, stat:{ name:string} }, id: number)=>{
         
          return (<StatsElement key={`${stat.stat.name}-${id}`}><StatDis>{stat.stat.name}</StatDis>: {stat.base_stat}</StatsElement>)
        })}
       </StatsList>
       <PokemonSubTitle>Abilities</PokemonSubTitle>
       <AbilitiesList>
        {abilities && abilities.map((ability: {ability: {name: string, url: string}}, id:number)=>{
          return (<AbilitiesElement key={`${ability.ability.name}-${id}`}>{ability.ability.name}</AbilitiesElement>)
        })}
       </AbilitiesList>
      </CardContainer>
    </Container>
  )
}
