import fetchGames from "./fetchGames";

export default function getAllPokemonPaths() {
    const games = fetchGames();
    
    return Object.values(games).map(( {pokemons} ) => {
        return Object.keys(pokemons).map(pokemonID => {
            return {params: {pokemon: pokemonID} };
        });
    }).flat();
}