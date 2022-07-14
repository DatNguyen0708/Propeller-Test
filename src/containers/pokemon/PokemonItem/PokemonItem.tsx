import { memo, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { getAvatar } from "@Utils/helpers/getImageHelper";
import { IPokemonDetail } from "@States/pokemon/pokemon.type";
import { POKEMON_TYPE, POKEMON_TYPE_COLOR } from "@States/pokemon/pokemon.constant";
import { pokemonActions } from "@States/pokemon";
import { useAppDispatch } from "@Redux/hooks";

type Props = {
  name: string;
};

const PokemonItem = memo(({ name }: Props) => {
  const dispatch = useAppDispatch();
  const [pokemon, setPokemon] = useState<IPokemonDetail>({
    height: 0,
    id: 0,
    name: "",
    stats: [],
    types: [],
    weight: 0,
  });
  useEffect(() => {
    getDetailPokemon();
  }, []);

  const getDetailPokemon = async () => {
    try {
      const { payload: data } = await dispatch(pokemonActions.detailPokemon(name));
      setPokemon(data);
    } catch (err) {}
  };

  const { types } = pokemon;
  const type = types[0]?.type?.name;
  const renderType = () => {
    return (
      <div className={`h-7 w-7 rounded-full bg-gradient-to-b p-1 ${renderGradient()}`}>
        <img src={`/images/pokemon/type/${type}.svg`} alt="type" />
      </div>
    );
  };

  const renderGradient = () => {
    switch (type) {
      case POKEMON_TYPE.fire:
        return " from-red-400 to-red-700";
      case POKEMON_TYPE.grass:
        return " from-green-400 to-green-700";
      case POKEMON_TYPE.electric:
        return " from-yellow-100 via-yellow-300 to-yellow-500";
      case POKEMON_TYPE.water:
        return " from-blue-400 to-blue-700";
      case POKEMON_TYPE.ground:
        return " from-orange-500 to-yellow-300";
      case POKEMON_TYPE.rock:
        return " bg-conic-to-t from-orange-900 via-amber-100 to-orange-900";
      case POKEMON_TYPE.fairy:
        return " from-pink-400 to-pink-600";
      case POKEMON_TYPE.poison:
        return " from-fuchsia-600 to-pink-600";
      case POKEMON_TYPE.bug:
        return " from-emerald-500 to-lime-600";
      case POKEMON_TYPE.dragon:
        return " from-blue-700 via-blue-800 to-gray-900";
      case POKEMON_TYPE.psychic:
        return " from-pink-400 to-pink-600";
      case POKEMON_TYPE.flying:
        return " from-indigo-900 via-indigo-400 to-indigo-900";
      case POKEMON_TYPE.fighting:
        return " from-red-500 to-red-800";
      case POKEMON_TYPE.normal:
        return " from-gray-200 via-gray-400 to-gray-600";
      case POKEMON_TYPE.ice:
        return " from-sky-400 to-sky-200";
      case POKEMON_TYPE.ghost:
        return " from-purple-800 via-violet-900 to-purple-800";
      case POKEMON_TYPE.dark:
        return " bg-conic-to-l from-rose-900 via-amber-800 to-rose-400";
      case POKEMON_TYPE.steel:
        return " from-indigo-200 via-slate-600 to-indigo-200";
    }
  };

  if (!pokemon.id) return null;

  return (
    <div
      className={`relative m-5 overflow-hidden rounded-xl bg-gradient-to-b ${renderGradient()} shadow-${
        POKEMON_TYPE[type]
      }`}
      style={{ maxWidth: 220 }}
    >
      <div className="flex h-full flex-col">
        <div
          className="w-56 pt-5 pl-5 pr-5 pb-2"
          style={{
            backgroundImage: `url(/images/pokemon/type/${type}.svg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <LazyLoad>
            <img
              loading="lazy"
              src={getAvatar(pokemon.id)}
              alt="Avatar"
              onError={(event: any) => {
                event.target.src = "/images/pokemon/ball/pokeball.svg";
                event.onerror = null;
              }}
            />
          </LazyLoad>
        </div>
        <div className="mt-4 rounded-b-xl bg-white p-2">
          <h3
            className="my-4 flex justify-center text-center text-xl font-bold capitalize"
            style={{
              color: POKEMON_TYPE_COLOR[type],
              minHeight: 70,
            }}
          >
            {pokemon.name}
          </h3>
          <div className="flex">
            <div className="w-1/3 text-center">
              <span className="font-medium">Weight</span>
              <h5>{pokemon.weight}</h5>
            </div>
            <div className="w-1/3 text-center">
              <span className="font-medium">HP</span>
              <h5>{pokemon.stats[0]?.base_stat}</h5>
            </div>
            <div className="w-1/3 text-center">
              <span className="font-medium">Height</span>
              <h5>{pokemon.height}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-2">{renderType()}</div>
    </div>
  );
});

PokemonItem.displayName = "PokemonItem";

export default PokemonItem;
