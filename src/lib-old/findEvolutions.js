import useGlobalContext from "../context/global";
import findPokemons from "./findPokemons";

export default function findEvolutions(pokemon) {
    const {game: {pokemons} } = useGlobalContext();

    //it returns an array of evolutions
    return pokemon.evolutions?.map(evolution => {
        const splitID = evolution.split(".");

        return pokemons[splitID[0]].find(form => form.id === evolution);
    });
}