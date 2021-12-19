import findPokemons from "./findPokemons";

export default function findPreEvolution(pokemon) {
    //this is slower than it should be. should i list preevolutions in data?
    return Object.values(findPokemons("evolution:"+pokemon.id))[0]?.[0];
}