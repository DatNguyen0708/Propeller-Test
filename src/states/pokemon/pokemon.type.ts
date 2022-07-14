export interface IPokemonFilteredDto {
  offset: number;
  limit: number;
}

export interface IPokemonState {
  count: number;
  listPokemon: IListPokemon[];
  offset: number;
  limit: number;
  isLoading: boolean;
}

export interface IListPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetail {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: ITypePokemon[];
  stats: IStatsPokemon[];
}

export interface ITypePokemon {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IStatsPokemon {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
