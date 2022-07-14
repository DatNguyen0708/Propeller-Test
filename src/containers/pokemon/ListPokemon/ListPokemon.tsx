import React, { useEffect, useMemo } from "react";
import PokemonItem from "@Containers/pokemon/PokemonItem/PokemonItem";
import { useAppDispatch, useAppSelector } from "@Redux/hooks";
import { pokemonActions, pokemonSelector, pokemonSliceActions } from "@States/pokemon";
import styles from "@Containers/pokemon/ListPokemon/ListPokemon.module.scss";
import { InfiniteScroll } from "@Components/Common";

export const ListPokemon = () => {
  const dispatch = useAppDispatch();
  const { offset, limit, count, listPokemon } = useAppSelector(pokemonSelector);

  useEffect(() => {
    getListPokemon();
    return () => {
      dispatch(pokemonSliceActions.resetSlice());
    };
  }, []);

  const getListPokemon = async () => {
    try {
      dispatch(pokemonSliceActions.setLoading(true));
      const {
        payload: { results, count },
      } = await dispatch(pokemonActions.getListPokemon({ offset, limit }));
      dispatch(pokemonSliceActions.setListPokemon(results));
      if (offset === 0) dispatch(pokemonSliceActions.setCountPokemon(count));
      dispatch(pokemonSliceActions.setOffset(offset + 15));
      dispatch(pokemonSliceActions.setLoading(false));
    } catch (err) {
      dispatch(pokemonSliceActions.setLoading(false));
    }
  };

  const handleInfiniteOnLoad = async () => {
    if (listPokemon.length < count) {
      await getListPokemon();
    }
  };

  const renderPokemon = useMemo(() => {
    if (listPokemon?.length) {
      return listPokemon.map((pokemon, index) => {
        // return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
        return <PokemonItem key={index} name={pokemon.name} />;
      });
    } else {
      return (
        <div className="mt-16 flex flex-col items-center justify-center">
          <span className="text-4xl text-white">No Item Pokemon here.</span>
        </div>
      );
    }
  }, [listPokemon.length]);

  return (
    <InfiniteScroll
      useWindow={true}
      loadMorePlacement="bottom"
      useListHeightThreshold={true}
      onLoadEnd={handleInfiniteOnLoad}
      className={styles["poke-container"]}
      offsetThreshold={100}
    >
      {renderPokemon}
    </InfiniteScroll>
  );
};

ListPokemon.displayName = "ListPokemon";

export default ListPokemon;
