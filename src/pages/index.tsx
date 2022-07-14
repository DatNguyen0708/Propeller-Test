import PokemonContainer from "@Containers/pokemon/pokemon.container";
import { PublicLayout } from "@Components/Templates";

const Pokemon = () => {
  return (
    <PublicLayout>
      <PokemonContainer />
    </PublicLayout>
  );
};

export default Pokemon;
