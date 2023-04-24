import styled from "styled-components";

const Element = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 50px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  ${(props)=>{
    if(props !== undefined){
      switch(props.theme){
        case 'normal':
              return `background-color: #919AA280;`;
            case 'fire':
              return `background-color: #FF9D5580;`;
            case 'water':
              return `background-color: #5090D680;`;
            case 'grass':
              return `background-color: #63BC5A80;`;
            case 'electric':
              return `background-color: #F4D23C80;`;
            case 'ice':
              return `background-color: #73CEC080;`;
            case 'fighting':
              return `background-color: #CE416B80;`;
            case 'poison':
              return `background-color: #B567CE80;`;
            case 'ground':
              return `background-color: #D9784580;`;
            case 'flying':
              return `background-color: #89AAE380;`;
            case 'psychic':
              return `background-color: #FA717980;`;
            case 'bug':
              return `background-color: #91C12F80;`;
            case 'rock':
              return `background-color: #C5B78C80;`;
            case 'ghost':
              return `background-color: #5269AD80;`;
            case 'dragon':
              return `background-color: #0B6DC380;`;
            case 'dark':
              return `background-color: #5A546580;`;
            case 'steel':
              return `background-color: #5A8EA280;`;
            case 'fairy':
              return `background-color: #EC8FE680;`;
            default:
              return `background-color: #BFBFBF80;`;
      }
    }
  }}
  @media (min-width: 1080px) {
    margin-bottom:20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`
const Title = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin: 0;
  font-size: 36px;
  @media (min-width: 1080px) {
    font-size: 24px;
  }
`
const Image = styled.img`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right:auto ;
`
const TypeList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`
const TypeElement = styled.li`
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
  }}
  list-style-type: none;
  width: 100%;
`
const TypeText = styled.p`
  margin: 0;
  padding: 15px 30px;
  font-size: 24px;
  text-transform: capitalize;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  @media (min-width: 1080px) {
    font-size: 18px;
  }
`
const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 30px 20px;
  @media (min-width: 1080px) {
    padding: 15px 10px;
  }
`
const StatsElement = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
`
const StatsDis = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  @media (min-width: 1080px) {
    font-size: 11px;
  }
 
`
const StatTitle = styled.span`
  text-transform: uppercase;
`
export {StatTitle,StatsDis,Element, Title, Image, TypeList, TypeElement, TypeText, StatsList, StatsElement}