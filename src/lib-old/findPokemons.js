import useGlobalContext from "../context/global";

export default function findPokemons(query) {
    const {game: {pokemons} } = useGlobalContext();
    let searchResult = {...pokemons};

    if (query) {
        //each subquery is a different filter instruction (taking the form of a string), separated by spaces
        const subqueries = query.split(" ").map(subquery => {
            if (subquery.includes("=")) {//is exactly
                subquery = subquery.split("=");
                subquery.push(true);
                return subquery;
            } else if (subquery.includes(":")) {//includes
                subquery = subquery.split(":");
                subquery.push(false);
                return subquery;
            } else { //default case, no tag indicates searching for name
                return subquery = ["name", subquery.replace(/[^0-9a-z ]/g, "").replace(/ +/g, "-"), false];
            }
        })

        //deconstruct subquery right here
        subqueries.forEach(( [tag, search, strict] ) => { //iterate over each subquery to filter the pokemon list more and more
            let result = Object.entries(pokemons).map(( [pokemonID, pokemon] ) => {
                //need to implement strict mode: only searches if all conditions are exactly equal to the result
                //probably with a second switch statement
                switch (tag) { //tag to search by
                    case "ability": return [pokemonID, pokemon.filter(( {abilities} ) => abilities?.includes(search))];
                    case "egg-group": return [pokemonID, pokemon.filter(({ eggGroups }) => eggGroups?.includes(search))];
                    case "name": return [pokemonID, pokemon.filter(( {name} ) => name?.toLowerCase().includes(search))];
                    case "type": return [pokemonID, pokemon.filter(({ types }) => types?.includes(search))];
                    case "evolution": return [pokemonID, pokemon.filter(({ evolutions }) => evolutions?.includes(search))];
                }
            });
            result = result.filter(( [,pokemon] ) => pokemon.some(form => form));
            searchResult = Object.fromEntries(result);
        })
    }

    return searchResult;
}