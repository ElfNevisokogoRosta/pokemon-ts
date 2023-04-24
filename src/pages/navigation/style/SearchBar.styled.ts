import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #173EA5;
  padding: 15px 0px;
  margin-bottom: 30px;
  box-sizing: border-box;
`
const Container = styled.div`
  width: 100%;
  padding: 0px 15px;
  display: flex;
  justify-content: space-evenly;
  margin: 0px auto ;
  gap: 40px;
  box-sizing: border-box;
  @media (min-width: 480px) {
    max-width: 480px;
  }
  @media (min-width: 768px){
    max-width: 768px;
  }
  @media (min-width: 1080px){
    max-width: 1080px;
  }
`
const Select = styled.select`
  width: 20%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Cpath d='M8 12l8 8 8-8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
`
const Form = styled.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
  @media (min-width: 1080px) {
    gap: 30px;
  }
`
const Label= styled.label`
  display: block;
`
const Input = styled.input`
  height: 40px;
  padding-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px; 
  width: 200px;
  @media (min-width: 768px) {
    font-size: 18px;
    width: 250px;
  }
`
const Button = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 15px;
  cursor: pointer;
  transition: 250ms background-color cubic-bezier(0.075, 0.82, 0.165, 1), 250ms color cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover{
    background-color: #CD3131;
    color: #fff;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export {HeaderContainer, Select, Form, Container,Label, Input, Button}