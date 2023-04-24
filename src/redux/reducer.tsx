import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "../utils/interafece";

const PokemonInitialState: IPokemon = {
  page: 1,
  perPage: 10,
  typeNumber: 0,
  total: 0,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: PokemonInitialState,
  reducers: {
    nextPage(state, actions){
      state.page++;
    },
    resetPage(state, actions){
      state.page = 1;
    },
    setPerPage(state, actions: PayloadAction<number>){
      state.perPage = actions.payload;
    },
    setTypeNumber(state, actions: PayloadAction<number>){
      state.typeNumber = actions.payload;
    },
    setTotalNumber(state, actions: PayloadAction<number>){
      state.total = actions.payload;
    },
  }
})

export const {
  nextPage,
  resetPage,
  setPerPage,
  setTypeNumber,
  setTotalNumber,
} = pokemonSlice.actions;
export const pokemon = pokemonSlice.reducer;