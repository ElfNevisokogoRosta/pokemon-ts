import styled from "styled-components";

const Container = styled.div`
  max-width: 480px;
  box-sizing: border-box;
  padding: 0px 15px;
  margin: 0px auto;
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`
const ResultTitle = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
`
const CardContainer = styled.div`

`
const PokemonTitle = styled.h3`
  text-transform: capitalize;
  font-size: 24px;
  text-align: center;
  margin: 10px 0px 15px 0px;
`
const PokemonImg = styled.img`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 220px;
  }
`
const TypeList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const TypeElement = styled.li`
  text-align: center;
  width: 100%;
  padding: 15px;
  ${(props)=>{
    if(props !== undefined){
      switch(props.theme){
        case 'normal':
              return `background-color: #919AA2;`;
            case 'fire':
              return `background-color: #FF9D55;`;
            case 'water':
              return `background-color: #5090D6;`;
            case 'grass':
              return `background-color: #63BC5A;`;
            case 'electric':
              return `background-color: #F4D23C;`;
            case 'ice':
              return `background-color: #73CEC0;`;
            case 'fighting':
              return `background-color: #CE416B;`;
            case 'poison':
              return `background-color: #B567CE;`;
            case 'ground':
              return `background-color: #D97845;`;
            case 'flying':
              return `background-color: #89AAE3;`;
            case 'psychic':
              return `background-color: #FA7179;`;
            case 'bug':
              return `background-color: #91C12F;`;
            case 'rock':
              return `background-color: #C5B78C;`;
            case 'ghost':
              return `background-color: #5269AD;`;
            case 'dragon':
              return `background-color: #0B6DC3;`;
            case 'dark':
              return `background-color: #5A5465;`;
            case 'steel':
              return `background-color: #5A8EA2;`;
            case 'fairy':
              return `background-color: #EC8FE6;`;
            default:
              return `background-color: #BFBFBF;`;
      }
    }
  }};
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
  color: #333333;
`
const PokemonSubTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333333;
  text-align: center;
`
const StatsList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`
const StatsElement = styled.li`
  font-weight: 700;
`
const StatDis = styled.span`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
`
const AbilitiesList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`
const AbilitiesElement = styled.li`
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
`
export { AbilitiesElement ,AbilitiesList ,StatsElement ,StatDis,StatsList,PokemonSubTitle ,Container,ResultTitle, CardContainer, PokemonTitle, PokemonImg, TypeList, TypeElement } 