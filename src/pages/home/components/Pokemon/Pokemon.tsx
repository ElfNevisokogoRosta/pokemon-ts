import React from 'react'
import { IPokemonComponent, IPokemonType } from '../../../../utils/interafece'
import { usePokemonLoad } from '../../../../utils/usePokemonLoad'
import {StatTitle,StatsDis,Element, Title, Image, TypeList, TypeElement, TypeText, StatsList, StatsElement} from '../../style/Pokemon.styled'
import { ColorRing } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

export const Pokemon: React.FC<IPokemonComponent> = ({url}) => {
  const [loading, error, data] = usePokemonLoad(url ?? '');
  const {name , img , type, stats} = data;
  const navigate = useNavigate();
  const themeChecker = (type: IPokemonType[] | undefined) => {
    if (type === undefined || type.length === 0) {
      return 'default';
    }
    return type[0].type.name;
  };
  const theme = themeChecker(type);
  if(error){
   <div>Error</div>
  }
  if(loading){
    <div><ColorRing/></div>
  }
  return (
    <Element theme={theme} onClick={()=>{navigate(`/search/${name}`)}}>
      <Title>{name}</Title>
      <Image src={img} alt={name} />
      <TypeList>
      {type &&  type.map((type: {slot: number, type:{name:string, url: string}}, id: number)=>{
        return (<TypeElement key={`${id}-${type?.type.name}`} theme={type?.type.name}>
          <TypeText>{type.type.name}</TypeText>
        </TypeElement>)
      })}
      </TypeList>
      <StatsList>
      {stats && stats.map((stat:{base_stat: number, effort: number, stat: { name: string, url: string} }, id)=>{
        return (<StatsElement key={`${id}-${stat.base_stat}`}>
          <StatsDis><StatTitle>{stat.stat.name}</StatTitle> : <span>{stat.base_stat}</span></StatsDis>
        </StatsElement>)
      })}
      </StatsList>
     
    </Element>
  )
}
