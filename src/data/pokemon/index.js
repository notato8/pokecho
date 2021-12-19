import blackWhite from "./black-white.json";
import blackWhite2 from "./black-white-2.json";
import crystal from "./crystal.json";
import diamondPearl from "./diamond-pearl.json";
import emerald from "./emerald.json";
import fireRedLeafGreen from "./fire-red-leaf-green.json";
import goldSilver from "./gold-silver.json";
import heartGoldSoulSilver from "./heart-gold-soul-silver.json";
import letsGoPikachuEevee from "./lets-go-pikachu-lets-go-eevee.json";
import omegaRubyAlphaSapphire from "./omega-ruby-alpha-sapphire.json";
import platinum from "./platinum.json";
import redBlue from "./red-blue.json";
import rubySapphire from "./ruby-sapphire.json";
import sunMoon from "./sun-moon.json";
import swordShield from "./sword-shield.json";
import ultraSunMoon from "./ultra-sun-ultra-moon.json";
import xY from "./x-y.json";
import yellow from "./yellow.json";
import interpretPokemons from "../../lib/pokemon/interpretPokemons";

const games = {
    swordShield,
    letsGoPikachuEevee,
    ultraSunMoon,
    sunMoon,
    omegaRubyAlphaSapphire,
    xY,
    blackWhite2,
    blackWhite,
    heartGoldSoulSilver,
    platinum,
    diamondPearl,
    fireRedLeafGreen,
    emerald,
    rubySapphire,
    crystal,
    goldSilver,
    yellow,
    redBlue
};

export default Object.fromEntries(
    Object.entries(games).map(([key, value]) => {
        return [
            key,
            {
                ...value,
                pokemons: interpretPokemons(value, games)
            } 
        ]
    })
);