import { useContext, createContext } from "react";

const GlobalContext = createContext();
export default useGlobalContext = () => useContext(GlobalContext);

export function GlobalContextProvider(props) {
    const [gameID, setGameID] = useState("sword-shield");
    const games = pageProps.games;
    const game = games ? interpretGame(games[gameID], games) : null;

    const pokemonID = pageProps.pokemonID;
    const pokemon = game ? game.pokemons[pokemonID] : null;
    const [formN, setFormN] = useState(0);
    const form = pokemon ? (pokemon[formN] ? pokemon[formN] : pokemon[0]) : null;

    const moves = game ? game.moves : null;

    const [search, setSearch] = useState("");

    const defaultContext = {
        setGameID,
        setFormN,
        setSearch,
        games,
        gameID,
        game,
        pokemonID,
        pokemon,
        formN,
        form,
        moves,
        search
    }
}