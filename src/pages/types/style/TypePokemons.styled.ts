import styled from "styled-components";
const Container = styled.div`
  max-width: 480px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  @media (min-width: 768px){
    max-width: 65%;
    margin-left: 35%;
  }
  @media (min-width: 1080px){
    margin-left: 20%;
    max-width: 80%;
  }
  
`
const TypeList = styled.ul`
  margin: 0;
  padding: 0;
  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export {Container, TypeList};