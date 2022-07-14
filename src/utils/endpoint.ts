const ENDPOINT = {
  POKEMON: {
    GET_LIST_POKEMON: "/pokemon",
    DETAIL_POKEMON: (pokemonName: string) => `/pokemon/${pokemonName}`,
  },
};

export { ENDPOINT };
