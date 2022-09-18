import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { usePlausible } from "next-plausible";
// import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  // const {
  //   data: pokemonPair,
  //   refetch,
  //   isLoading,
  // } = trpc.useQuery(["get-pokemon-pair"], {
  //   refetchInterval: false,
  //   refetchOnReconnect: false,
  //   refetchOnWindowFocus: false,
  // });

  const {
    data: pokemonPair,
    refetch,
    isLoading,
  } = { data: [], refetch: () => null, isLoading: false };

  // const voteMutation = trpc.useMutation(["cast-vote"]);
  const voteMutation = {};
  const plausible = usePlausible();

  const voteForRoundest = (selected: number) => {
    if (!pokemonPair) return; // Early escape to make Typescript happy

    if (selected === pokemonPair?.firstPokemon.id) {
      // If voted for 1st pokemon, fire voteFor with first ID
      voteMutation.mutate({
        votedFor: pokemonPair.firstPokemon.id,
        votedAgainst: pokemonPair.secondPokemon.id,
      });
    } else {
      // else fire voteFor with second ID
      voteMutation.mutate({
        votedFor: pokemonPair.secondPokemon.id,
        votedAgainst: pokemonPair.firstPokemon.id,
      });
    }

    plausible("cast-vote");
    refetch();
  };

  const fetchingNext = voteMutation.isLoading || isLoading;

  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center relative">
      <Head>
        <title>Roundest Pokemon</title>
      </Head>
      <div className="text-2xl text-center pt-8">Which Pokémon is Rounder?</div>
      {pokemonPair && (
        <div className="p-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
          {/* <PokemonListing
            pokemon={pokemonPair.firstPokemon}
            vote={() => voteForRoundest(pokemonPair.firstPokemon.id)}
            disabled={fetchingNext}
          />
          <div className="p-8 italic text-xl">{"or"}</div>
          <PokemonListing
            pokemon={pokemonPair.secondPokemon}
            vote={() => voteForRoundest(pokemonPair.secondPokemon.id)}
            disabled={fetchingNext}
          /> */}
          <div className="p-2" />
        </div>
      )}
      {!pokemonPair && <img src="/rings.svg" className="w-48" />}
      <div className="w-full text-xl text-center pb-2">
        <a href="https://twitter.com/t3dotgg">Twitter</a>
        <span className="p-4">{"-"}</span>
        <Link href="/results">
          <a>Results</a>
        </Link>
        <span className="p-4">{"-"}</span>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
