import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { IPokemon } from '../../utils/interafece';
import { useDispatch } from 'react-redux';
import { resetPage, setPerPage } from '../../redux/reducer';
import { HeaderContainer, Select, Container, Form, Label, Input, Button } from './style/SearchBar.styled';

export const SearchBar: React.FC = () => {
  const {perPage}:IPokemon = useSelector((state:{pokemon:IPokemon} )=>state.pokemon)
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const perPageHandler= (e: React.ChangeEvent<HTMLSelectElement>)=>{
    const newValue: number = Number(e.target.value);
    dispatch(resetPage(perPage));
    dispatch(setPerPage(newValue));
  }
  return (
    <HeaderContainer>
      <Container>

      <Select value={perPage} onChange={perPageHandler} >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value='50'>50</option>
      </Select>
      <form 
       onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = e.currentTarget.q?.value;
        if (query !== ''&& query !== undefined) {
          try {
            navigate(`/search/${query}`);
          } catch (error) {
            console.error(error);
          }
        }
      }}>
        <Form>
        <Label>
          <Input type='text' name='q'  placeholder='Enter pokemon name' />
        </Label>
        <Button>Search</Button>
        </Form>
       
      </form>
      </Container>
     
    </HeaderContainer>
  )
}
