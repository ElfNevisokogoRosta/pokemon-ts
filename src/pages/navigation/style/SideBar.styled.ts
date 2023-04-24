import styled from "styled-components";

const List = styled.ul`
  padding:0;
  margin: 0;
  overflow: hidden;
  ${(props)=>{
    if(props.theme === 'block'){
      return 'display: block;';
    }
    if(props.theme === 'none'){
      return 'display: none;';
    }
  }}
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px){
    display: block;
    position: absolute;
    width: 30%;
  } 
  @media (min-width: 1080px){
    width: 18%;
  }
`
const Container = styled.div`
  box-sizing: border-box;
  max-width: 768px;
  width: 100%;
  padding: 0px 15px;
  margin-bottom: 30px;
  ${(props)=>{
    if(props.theme === 'none'){
      return 'display: none;';
    }
    if(props.theme === 'block'){
      return 'display: block;';
    }
  }}
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 24px;
  background-color: #173EA5;
  color: #fff;
  border: none;
  border-radius: 50px;
  transition: 250ms background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover{
    background-color: #CD3131;
  }
  width: 100%;
  @media (min-width: 768px){
    display: none;
  }
 
`
export {List, Container, Button}