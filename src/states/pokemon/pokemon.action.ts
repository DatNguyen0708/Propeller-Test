import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "@Services/api.service";
import { ENDPOINT } from "@Utils/endpoint";
import { IPokemonFilteredDto } from "@States/pokemon/pokemon.type";

class PokemonActions {
  getListPokemon = createAsyncThunk(
    "pokemon/getListPokemon",
    async (query: IPokemonFilteredDto) => {
      try {
        const res: any = await apiService.get(ENDPOINT.POKEMON.GET_LIST_POKEMON, query);
        return res.data;
      } catch (error) {
        return [];
      }
    }
  );
  detailPokemon = createAsyncThunk("pokemon/detailPokemon", async (pokemonName: string) => {
    try {
      const res: any = await apiService.get(ENDPOINT.POKEMON.DETAIL_POKEMON(pokemonName), {});
      return res.data;
    } catch (error) {
      return [];
    }
  });
}

export default new PokemonActions();
