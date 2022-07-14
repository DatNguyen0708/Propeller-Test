import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@Redux/store";
import { IListPokemon, IPokemonState } from "@States/pokemon/pokemon.type";

const initialState: IPokemonState = {
  // Response
  count: 0,
  listPokemon: [],

  // Request
  offset: 0,
  limit: 15,
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setListPokemon: (state, action: PayloadAction<IListPokemon[]>) => {
      state.listPokemon = [...state.listPokemon, ...action.payload];
    },
    setCountPokemon: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    resetSlice: (state) => {
      state.offset = initialState.offset;
      state.limit = initialState.limit;
      state.isLoading = initialState.isLoading;
    },
  },
});

export const pokemonSliceActions = pokemonSlice.actions;
export const pokemonSelector = (state: RootState) => state.pokemonReducer;

export default pokemonSlice.reducer;
