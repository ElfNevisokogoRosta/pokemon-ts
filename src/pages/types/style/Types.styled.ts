import styled from "styled-components";

const Container = styled.div`
width: 100%;
padding-left: 15px;
padding-right: 15px;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
text-align: center;
margin-bottom: 30px;
@media (min-width: 768px){
  max-width: 768px;
}
@media (min-width: 1080px){
  max-width: 1080px;
}
`
const Button = styled.button`
  background-color: #173EA5;
  display: block;
  width: 328px;
  border-radius: 50px;
  font-size: 18px;
  padding: 16px 118px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  cursor: pointer;
  :hover{
    background-color: transparent;
    color: #173EA5;
    border: 2px solid #173EA5;
  }
`

export {Container, Button}