import Image from "next/image";

type Pokemon = {
  id: string;
  name: string;
  spriteUrl: string;
};

const PokemonListing: React.FC<{
  pokemon: Pokemon;
  vote: () => void;
  disabled: boolean;
}> = (props) => {
  return (
    <div
      className={`flex flex-col items-center transition-opacity ${
        props.disabled && "opacity-0"
      }`}
      key={props.pokemon.id}
    >
      <div className="text-xl text-center capitalize mt-[-0.5rem]">
        {props.pokemon.name}
      </div>
      <Image
        alt={props.pokemon.name}
        src={props.pokemon.spriteUrl}
        width={256}
        height={256}
        layout="fixed"
        className="animate-fade-in"
      />
      <button
        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => props.vote()}
        disabled={props.disabled}
      >
        Rounder
      </button>
    </div>
  );
};

export { PokemonListing };
