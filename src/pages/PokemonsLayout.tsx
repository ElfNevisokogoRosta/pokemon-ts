import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'
import { usePokemons } from '../utils/usePokemons'
import { ColorRing } from 'react-loader-spinner'

export const PokemonsLayout: React.FC = () => {
  const [loading, error]= usePokemons();
  if(error){
    return (<div>Something going wrong</div>)
  }
  return (
    <div>
       <Navigation/>
      {loading? (<ColorRing/>): (<Outlet/>)}
    </div>
  )
}
