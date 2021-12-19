export default function interpretPokemons({pokemons, predecessor}, games) {
    let result = {};

    //might be better to map this, then use Object.fromEntries
    for (let [pokemonID, pokemon] of Object.entries(pokemons)) {
        let previousGame = games?.[predecessor];
        while (previousGame) {
            let previousPokemon = previousGame.pokemons?.[pokemonID];
            if (previousPokemon) {
                pokemon = {
                    ...previousPokemon,
                    ...pokemon,
                    moves: {
                        ...previousPokemon.moves,
                        ...pokemon.moves
                    }
                }
            }
            previousGame = games[previousGame.predecessor];
        }

        if (pokemon.forms) { //if the pokemon has any forms
            result[pokemonID] = pokemon.forms.map((form, i) => {
                const noForms = ({forms, ...pokemon}) => pokemon; //can this be done without a function?
                return {
                    ...noForms(pokemon), //don't pass the form data back down, unecessary
                    ...form, // the data from the form overwrites any other data
                    id: form.id ? pokemonID+"."+form.id : pokemonID, //special form id
                    n: i
                };
            });
        } else {
            result[pokemonID] = [{
                id: pokemonID,
                n: 0,
                ...pokemon
            }];
        }
    };

    return result;
}