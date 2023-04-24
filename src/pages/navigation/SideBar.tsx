import React, {useState} from 'react'
import { useTypeData } from '../../utils/usePokemonsTypes'
import { NavLink, useParams } from 'react-router-dom';
import SvgIcon from './SvgIcon';
import { ITypes } from '../../utils/interafece';
import {List, Container, Button} from './style/SideBar.styled'
import { Circles } from 'react-loader-spinner';

export const SideBar: React.FC = () =>{
  const [loading, error, data]=useTypeData();
  const typeIcon = (type: string) => {
    switch (type) {
      case 'normal':
        return 'normal';
      case 'dark':
        return 'dark';
      case 'electric':
        return 'electric';
      case 'fairy':
        return 'fairy';
      case 'fighting':
        return 'fighting';
      case 'ground':
        return 'ground';
      case 'ice':
        return 'ice';
      case 'physic':
        return 'physic';
      case 'poison':
        return 'poison';
      case 'rock':
        return 'rock';
      case 'steel':
        return 'steel';
      case 'water':
        return 'steel';
      case 'flying':
        return 'flying';
      case 'bug':
        return 'bug';
      case 'ghost':
        return 'ghost';
      case 'fire':
        return 'fire';
      case 'grass':
        return 'grass';
      case 'psychic':
        return 'psyhic';
      case 'dragon':
        return 'dragon';
      default:
        return 'standart';
    }
  };
  const [showMore, setShowMore] = useState<string>('none');
  const params = useParams();
  const theme: string = params.q? ('none'):('block');
  const showMoreHandler = ()=>{
    if(showMore === 'block'){
      setShowMore('none');
    }
    if(showMore === 'none'){
      setShowMore('block');
    }
   
  }
  if(loading){
    return <><Circles/></>
  }
  if(error){
    return <>All goes wrong</>
  }
  return (
    <nav>
  <Container theme={theme}>
    
  <List theme={showMore}>
      
       {data?.map((type: ITypes)=>{
      return <li key={type.url}><NavLink to={`/${type.name}` } className='navLink'>
        <SvgIcon id={typeIcon(type.name)}/>{type.name}
        </NavLink></li>
    }) }

  </List>
  <Button onClick={showMoreHandler}>Show/Hide pokemon types</Button>
 
  </Container>
  </nav>)
}