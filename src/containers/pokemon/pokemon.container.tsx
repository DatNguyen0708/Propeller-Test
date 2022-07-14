import ListPokemon from "@Containers/pokemon/ListPokemon/ListPokemon";
import { memo } from "react";
import Head from "next/head";

const PokemonContainer = memo(() => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <ListPokemon />
    </>
  );
});

PokemonContainer.displayName = "PokemonContainer";

export default PokemonContainer;
