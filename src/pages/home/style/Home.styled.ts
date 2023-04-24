import styled from "styled-components";
const NextPage = styled.button`
  width: 328px;
  font-size: 26px;
  padding: 16px 66px;
  border-radius: 50px;
  border: none;
  background-color:#333333;
  color: #fff;
  cursor: pointer;
  border: 3px solid transparent;
  transition: 250ms background-color cubic-bezier(0.075, 0.82, 0.165, 1), 250ms color cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    background-color: #fff;
    color: #333333;
    border-color:#333333;
  }
`
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
export {NextPage, Container}