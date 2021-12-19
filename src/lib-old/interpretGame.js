import interpretPokemons from "./interpretPokemons.js";

export default function interpretGame(game, games) {
    return {
        ...game,
        pokemons: interpretPokemons(game, games)
    };
}