import { Pokemon } from "../../src/entities/Pokemon";

export const pokemonList = {
  count: 1302,
  next: null,
  previous: null,
  results: [
    { name: "articuno", url: "https://pokeapi.co/api/v2/pokemon/144/" }, //rare, ice
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" }, // normal, flying, forest
    { name: "mankey", url: "https://pokeapi.co/api/v2/pokemon/56/" }, // fight, mountain
    { name: "sandshrew", url: "https://pokeapi.co/api/v2/pokemon/27/" }, // ground, rough
    { name: "omanyte", url: "https://pokeapi.co/api/v2/pokemon/138/" }, // rock, sea, water
    { name: "paras", url: "https://pokeapi.co/api/v2/pokemon/46/" }, // bug, grass, forest
    { name: "gastly", url: "https://pokeapi.co/api/v2/pokemon/92/" }, // ghost, cave, poison
    { name: "magnemite", url: "https://pokeapi.co/api/v2/pokemon/81/" }, // steel, electric, rough
    { name: "houndour", url: "https://pokeapi.co/api/v2/pokemon/228/" }, // fire, dark, rough
    { name: "abra", url: "https://pokeapi.co/api/v2/pokemon/63/" }, // psychic, urban
    { name: "dratini", url: "https://pokeapi.co/api/v2/pokemon/147/" }, // dragon, edge
    { name: "jigglypuff", url: "https://pokeapi.co/api/v2/pokemon/39/" }, // normal, fairy, grassland
  ],
};

export const pokemonDetails: Pokemon[] = [
  {
    abilities: [
      {
        ability: {
          name: "pressure",
          url: "https://pokeapi.co/api/v2/ability/46/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "snow-cloak",
          url: "https://pokeapi.co/api/v2/ability/81/",
        },
        slot: 3,
      },
    ],
    base_experience: 290,
    height: 17,
    held_items: [],
    id: 144,
    moves: [
      {
        move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/" },
      },
      {
        move: { name: "gust", url: "https://pokeapi.co/api/v2/move/16/" },
      },
      {
        move: { name: "whirlwind", url: "https://pokeapi.co/api/v2/move/18/" },
      },
      {
        move: { name: "fly", url: "https://pokeapi.co/api/v2/move/19/" },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "leer", url: "https://pokeapi.co/api/v2/move/43/" },
      },
      {
        move: { name: "roar", url: "https://pokeapi.co/api/v2/move/46/" },
      },
      {
        move: { name: "mist", url: "https://pokeapi.co/api/v2/move/54/" },
      },
      {
        move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" },
      },
      {
        move: { name: "ice-beam", url: "https://pokeapi.co/api/v2/move/58/" },
      },
      {
        move: { name: "blizzard", url: "https://pokeapi.co/api/v2/move/59/" },
      },
      {
        move: {
          name: "bubble-beam",
          url: "https://pokeapi.co/api/v2/move/61/",
        },
      },
      {
        move: { name: "hyper-beam", url: "https://pokeapi.co/api/v2/move/63/" },
      },
      {
        move: { name: "peck", url: "https://pokeapi.co/api/v2/move/64/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "agility", url: "https://pokeapi.co/api/v2/move/97/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
      },
      {
        move: { name: "haze", url: "https://pokeapi.co/api/v2/move/114/" },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "sky-attack",
          url: "https://pokeapi.co/api/v2/move/143/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: {
          name: "mind-reader",
          url: "https://pokeapi.co/api/v2/move/170/",
        },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: {
          name: "powder-snow",
          url: "https://pokeapi.co/api/v2/move/181/",
        },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      },
      {
        move: { name: "icy-wind", url: "https://pokeapi.co/api/v2/move/196/" },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "sandstorm", url: "https://pokeapi.co/api/v2/move/201/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: {
          name: "steel-wing",
          url: "https://pokeapi.co/api/v2/move/211/",
        },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: { name: "twister", url: "https://pokeapi.co/api/v2/move/239/" },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: {
          name: "mirror-coat",
          url: "https://pokeapi.co/api/v2/move/243/",
        },
      },
      {
        move: {
          name: "ancient-power",
          url: "https://pokeapi.co/api/v2/move/246/",
        },
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
      },
      {
        move: { name: "hail", url: "https://pokeapi.co/api/v2/move/258/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "feather-dance",
          url: "https://pokeapi.co/api/v2/move/297/",
        },
      },
      {
        move: {
          name: "weather-ball",
          url: "https://pokeapi.co/api/v2/move/311/",
        },
      },
      {
        move: {
          name: "air-cutter",
          url: "https://pokeapi.co/api/v2/move/314/",
        },
      },
      {
        move: {
          name: "signal-beam",
          url: "https://pokeapi.co/api/v2/move/324/",
        },
      },
      {
        move: {
          name: "sheer-cold",
          url: "https://pokeapi.co/api/v2/move/329/",
        },
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
      },
      {
        move: {
          name: "icicle-spear",
          url: "https://pokeapi.co/api/v2/move/333/",
        },
      },
      {
        move: {
          name: "water-pulse",
          url: "https://pokeapi.co/api/v2/move/352/",
        },
      },
      {
        move: { name: "roost", url: "https://pokeapi.co/api/v2/move/355/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "pluck", url: "https://pokeapi.co/api/v2/move/365/" },
      },
      {
        move: { name: "tailwind", url: "https://pokeapi.co/api/v2/move/366/" },
      },
      {
        move: { name: "u-turn", url: "https://pokeapi.co/api/v2/move/369/" },
      },
      {
        move: { name: "air-slash", url: "https://pokeapi.co/api/v2/move/403/" },
      },
      {
        move: {
          name: "brave-bird",
          url: "https://pokeapi.co/api/v2/move/413/",
        },
      },
      {
        move: {
          name: "giga-impact",
          url: "https://pokeapi.co/api/v2/move/416/",
        },
      },
      {
        move: { name: "avalanche", url: "https://pokeapi.co/api/v2/move/419/" },
      },
      {
        move: { name: "ice-shard", url: "https://pokeapi.co/api/v2/move/420/" },
      },
      {
        move: { name: "defog", url: "https://pokeapi.co/api/v2/move/432/" },
      },
      {
        move: {
          name: "ominous-wind",
          url: "https://pokeapi.co/api/v2/move/466/",
        },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: { name: "sky-drop", url: "https://pokeapi.co/api/v2/move/507/" },
      },
      {
        move: {
          name: "frost-breath",
          url: "https://pokeapi.co/api/v2/move/524/",
        },
      },
      {
        move: { name: "hurricane", url: "https://pokeapi.co/api/v2/move/542/" },
      },
      {
        move: {
          name: "freeze-dry",
          url: "https://pokeapi.co/api/v2/move/573/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "laser-focus",
          url: "https://pokeapi.co/api/v2/move/673/",
        },
      },
      {
        move: {
          name: "aurora-veil",
          url: "https://pokeapi.co/api/v2/move/694/",
        },
      },
      {
        move: {
          name: "triple-axel",
          url: "https://pokeapi.co/api/v2/move/813/",
        },
      },
      {
        move: {
          name: "dual-wingbeat",
          url: "https://pokeapi.co/api/v2/move/814/",
        },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
      {
        move: {
          name: "ice-spinner",
          url: "https://pokeapi.co/api/v2/move/861/",
        },
      },
      {
        move: { name: "snowscape", url: "https://pokeapi.co/api/v2/move/883/" },
      },
    ],
    name: "articuno",
    species: {
      name: "articuno",
      url: "https://pokeapi.co/api/v2/pokemon-species/144/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    },
    stats: [
      {
        base_stat: 90,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 85,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 100,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 95,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 125,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 85,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 554,
  },
  {
    abilities: [
      {
        ability: {
          name: "keen-eye",
          url: "https://pokeapi.co/api/v2/ability/51/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "tangled-feet",
          url: "https://pokeapi.co/api/v2/ability/77/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "big-pecks",
          url: "https://pokeapi.co/api/v2/ability/145/",
        },
        slot: 3,
      },
    ],
    base_experience: 50,
    height: 3,
    held_items: [],
    id: 16,
    moves: [
      {
        move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/" },
      },
      {
        move: { name: "gust", url: "https://pokeapi.co/api/v2/move/16/" },
      },
      {
        move: {
          name: "wing-attack",
          url: "https://pokeapi.co/api/v2/move/17/",
        },
      },
      {
        move: { name: "whirlwind", url: "https://pokeapi.co/api/v2/move/18/" },
      },
      {
        move: { name: "fly", url: "https://pokeapi.co/api/v2/move/19/" },
      },
      {
        move: {
          name: "sand-attack",
          url: "https://pokeapi.co/api/v2/move/28/",
        },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "agility", url: "https://pokeapi.co/api/v2/move/97/" },
      },
      {
        move: {
          name: "quick-attack",
          url: "https://pokeapi.co/api/v2/move/98/",
        },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: {
          name: "mirror-move",
          url: "https://pokeapi.co/api/v2/move/119/",
        },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "sky-attack",
          url: "https://pokeapi.co/api/v2/move/143/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "feint-attack",
          url: "https://pokeapi.co/api/v2/move/185/",
        },
      },
      {
        move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      },
      {
        move: { name: "foresight", url: "https://pokeapi.co/api/v2/move/193/" },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: {
          name: "steel-wing",
          url: "https://pokeapi.co/api/v2/move/211/",
        },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: { name: "pursuit", url: "https://pokeapi.co/api/v2/move/228/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: { name: "twister", url: "https://pokeapi.co/api/v2/move/239/" },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "uproar", url: "https://pokeapi.co/api/v2/move/253/" },
      },
      {
        move: { name: "heat-wave", url: "https://pokeapi.co/api/v2/move/257/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "feather-dance",
          url: "https://pokeapi.co/api/v2/move/297/",
        },
      },
      {
        move: {
          name: "air-cutter",
          url: "https://pokeapi.co/api/v2/move/314/",
        },
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
      },
      {
        move: { name: "roost", url: "https://pokeapi.co/api/v2/move/355/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "pluck", url: "https://pokeapi.co/api/v2/move/365/" },
      },
      {
        move: { name: "tailwind", url: "https://pokeapi.co/api/v2/move/366/" },
      },
      {
        move: { name: "u-turn", url: "https://pokeapi.co/api/v2/move/369/" },
      },
      {
        move: { name: "air-slash", url: "https://pokeapi.co/api/v2/move/403/" },
      },
      {
        move: {
          name: "brave-bird",
          url: "https://pokeapi.co/api/v2/move/413/",
        },
      },
      {
        move: { name: "defog", url: "https://pokeapi.co/api/v2/move/432/" },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "ominous-wind",
          url: "https://pokeapi.co/api/v2/move/466/",
        },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: { name: "work-up", url: "https://pokeapi.co/api/v2/move/526/" },
      },
      {
        move: { name: "hurricane", url: "https://pokeapi.co/api/v2/move/542/" },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
    ],
    name: "pidgey",
    species: {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon-species/16/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    },
    stats: [
      {
        base_stat: 40,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 45,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 40,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 35,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 35,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 56,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      },
    ],
    weight: 18,
  },
  {
    abilities: [
      {
        ability: {
          name: "vital-spirit",
          url: "https://pokeapi.co/api/v2/ability/72/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "anger-point",
          url: "https://pokeapi.co/api/v2/ability/83/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "defiant",
          url: "https://pokeapi.co/api/v2/ability/128/",
        },
        slot: 3,
      },
    ],
    base_experience: 61,
    height: 5,
    held_items: [
      {
        item: {
          name: "payapa-berry",
          url: "https://pokeapi.co/api/v2/item/170/",
        },
      },
    ],
    id: 56,
    moves: [
      {
        move: { name: "karate-chop", url: "https://pokeapi.co/api/v2/move/2/" },
      },
      {
        move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" },
      },
      {
        move: { name: "pay-day", url: "https://pokeapi.co/api/v2/move/6/" },
      },
      {
        move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" },
      },
      {
        move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" },
      },
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
      },
      {
        move: { name: "scratch", url: "https://pokeapi.co/api/v2/move/10/" },
      },
      {
        move: { name: "mega-kick", url: "https://pokeapi.co/api/v2/move/25/" },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: { name: "thrash", url: "https://pokeapi.co/api/v2/move/37/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "leer", url: "https://pokeapi.co/api/v2/move/43/" },
      },
      {
        move: { name: "submission", url: "https://pokeapi.co/api/v2/move/66/" },
      },
      {
        move: { name: "low-kick", url: "https://pokeapi.co/api/v2/move/67/" },
      },
      {
        move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      },
      {
        move: {
          name: "seismic-toss",
          url: "https://pokeapi.co/api/v2/move/69/",
        },
      },
      {
        move: { name: "strength", url: "https://pokeapi.co/api/v2/move/70/" },
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
      },
      {
        move: { name: "thunder", url: "https://pokeapi.co/api/v2/move/87/" },
      },
      {
        move: { name: "earthquake", url: "https://pokeapi.co/api/v2/move/89/" },
      },
      {
        move: { name: "dig", url: "https://pokeapi.co/api/v2/move/91/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "meditate", url: "https://pokeapi.co/api/v2/move/96/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: { name: "screech", url: "https://pokeapi.co/api/v2/move/103/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "defense-curl",
          url: "https://pokeapi.co/api/v2/move/111/",
        },
      },
      {
        move: {
          name: "focus-energy",
          url: "https://pokeapi.co/api/v2/move/116/",
        },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "metronome", url: "https://pokeapi.co/api/v2/move/118/" },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
      },
      {
        move: {
          name: "fury-swipes",
          url: "https://pokeapi.co/api/v2/move/154/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "rock-slide",
          url: "https://pokeapi.co/api/v2/move/157/",
        },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "reversal", url: "https://pokeapi.co/api/v2/move/179/" },
      },
      {
        move: { name: "spite", url: "https://pokeapi.co/api/v2/move/180/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "scary-face",
          url: "https://pokeapi.co/api/v2/move/184/",
        },
      },
      {
        move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      },
      {
        move: { name: "foresight", url: "https://pokeapi.co/api/v2/move/193/" },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "outrage", url: "https://pokeapi.co/api/v2/move/200/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: {
          name: "dynamic-punch",
          url: "https://pokeapi.co/api/v2/move/223/",
        },
      },
      {
        move: { name: "encore", url: "https://pokeapi.co/api/v2/move/227/" },
      },
      {
        move: { name: "pursuit", url: "https://pokeapi.co/api/v2/move/228/" },
      },
      {
        move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "cross-chop",
          url: "https://pokeapi.co/api/v2/move/238/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "psych-up", url: "https://pokeapi.co/api/v2/move/244/" },
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
      },
      {
        move: { name: "beat-up", url: "https://pokeapi.co/api/v2/move/251/" },
      },
      {
        move: { name: "uproar", url: "https://pokeapi.co/api/v2/move/253/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "focus-punch",
          url: "https://pokeapi.co/api/v2/move/264/",
        },
      },
      {
        move: {
          name: "smelling-salts",
          url: "https://pokeapi.co/api/v2/move/265/",
        },
      },
      {
        move: { name: "taunt", url: "https://pokeapi.co/api/v2/move/269/" },
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
      },
      {
        move: { name: "role-play", url: "https://pokeapi.co/api/v2/move/272/" },
      },
      {
        move: { name: "revenge", url: "https://pokeapi.co/api/v2/move/279/" },
      },
      {
        move: {
          name: "brick-break",
          url: "https://pokeapi.co/api/v2/move/280/",
        },
      },
      {
        move: { name: "endeavor", url: "https://pokeapi.co/api/v2/move/283/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: { name: "overheat", url: "https://pokeapi.co/api/v2/move/315/" },
      },
      {
        move: { name: "rock-tomb", url: "https://pokeapi.co/api/v2/move/317/" },
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
      },
      {
        move: { name: "bulk-up", url: "https://pokeapi.co/api/v2/move/339/" },
      },
      {
        move: { name: "covet", url: "https://pokeapi.co/api/v2/move/343/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "u-turn", url: "https://pokeapi.co/api/v2/move/369/" },
      },
      {
        move: {
          name: "close-combat",
          url: "https://pokeapi.co/api/v2/move/370/",
        },
      },
      {
        move: { name: "payback", url: "https://pokeapi.co/api/v2/move/371/" },
      },
      {
        move: { name: "assurance", url: "https://pokeapi.co/api/v2/move/372/" },
      },
      {
        move: { name: "fling", url: "https://pokeapi.co/api/v2/move/374/" },
      },
      {
        move: {
          name: "punishment",
          url: "https://pokeapi.co/api/v2/move/386/",
        },
      },
      {
        move: {
          name: "poison-jab",
          url: "https://pokeapi.co/api/v2/move/398/",
        },
      },
      {
        move: {
          name: "night-slash",
          url: "https://pokeapi.co/api/v2/move/400/",
        },
      },
      {
        move: { name: "seed-bomb", url: "https://pokeapi.co/api/v2/move/402/" },
      },
      {
        move: {
          name: "drain-punch",
          url: "https://pokeapi.co/api/v2/move/409/",
        },
      },
      {
        move: {
          name: "vacuum-wave",
          url: "https://pokeapi.co/api/v2/move/410/",
        },
      },
      {
        move: {
          name: "focus-blast",
          url: "https://pokeapi.co/api/v2/move/411/",
        },
      },
      {
        move: {
          name: "shadow-claw",
          url: "https://pokeapi.co/api/v2/move/421/",
        },
      },
      {
        move: {
          name: "rock-climb",
          url: "https://pokeapi.co/api/v2/move/431/",
        },
      },
      {
        move: { name: "gunk-shot", url: "https://pokeapi.co/api/v2/move/441/" },
      },
      {
        move: {
          name: "stone-edge",
          url: "https://pokeapi.co/api/v2/move/444/",
        },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "hone-claws",
          url: "https://pokeapi.co/api/v2/move/468/",
        },
      },
      {
        move: {
          name: "smack-down",
          url: "https://pokeapi.co/api/v2/move/479/",
        },
      },
      {
        move: { name: "low-sweep", url: "https://pokeapi.co/api/v2/move/490/" },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "acrobatics",
          url: "https://pokeapi.co/api/v2/move/512/",
        },
      },
      {
        move: { name: "retaliate", url: "https://pokeapi.co/api/v2/move/514/" },
      },
      {
        move: {
          name: "final-gambit",
          url: "https://pokeapi.co/api/v2/move/515/",
        },
      },
      {
        move: { name: "bulldoze", url: "https://pokeapi.co/api/v2/move/523/" },
      },
      {
        move: { name: "work-up", url: "https://pokeapi.co/api/v2/move/526/" },
      },
      {
        move: { name: "dual-chop", url: "https://pokeapi.co/api/v2/move/530/" },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "power-up-punch",
          url: "https://pokeapi.co/api/v2/move/612/",
        },
      },
      {
        move: {
          name: "throat-chop",
          url: "https://pokeapi.co/api/v2/move/675/",
        },
      },
      {
        move: {
          name: "power-trip",
          url: "https://pokeapi.co/api/v2/move/681/",
        },
      },
      {
        move: {
          name: "stomping-tantrum",
          url: "https://pokeapi.co/api/v2/move/707/",
        },
      },
      {
        move: { name: "lash-out", url: "https://pokeapi.co/api/v2/move/808/" },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
    ],
    name: "mankey",
    species: {
      name: "mankey",
      url: "https://pokeapi.co/api/v2/pokemon-species/56/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    },
    stats: [
      {
        base_stat: 40,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 80,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 35,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 35,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 45,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 70,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      },
    ],
    weight: 280,
  },
  {
    abilities: [
      {
        ability: {
          name: "sand-veil",
          url: "https://pokeapi.co/api/v2/ability/8/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "sand-rush",
          url: "https://pokeapi.co/api/v2/ability/146/",
        },
        slot: 3,
      },
    ],
    base_experience: 60,
    height: 6,
    held_items: [
      {
        item: {
          name: "quick-claw",
          url: "https://pokeapi.co/api/v2/item/194/",
        },
      },
      {
        item: { name: "grip-claw", url: "https://pokeapi.co/api/v2/item/263/" },
      },
    ],
    id: 27,
    moves: [
      {
        move: { name: "scratch", url: "https://pokeapi.co/api/v2/move/10/" },
      },
      {
        move: {
          name: "swords-dance",
          url: "https://pokeapi.co/api/v2/move/14/",
        },
      },
      {
        move: { name: "cut", url: "https://pokeapi.co/api/v2/move/15/" },
      },
      {
        move: {
          name: "sand-attack",
          url: "https://pokeapi.co/api/v2/move/28/",
        },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: {
          name: "poison-sting",
          url: "https://pokeapi.co/api/v2/move/40/",
        },
      },
      {
        move: { name: "submission", url: "https://pokeapi.co/api/v2/move/66/" },
      },
      {
        move: { name: "low-kick", url: "https://pokeapi.co/api/v2/move/67/" },
      },
      {
        move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      },
      {
        move: {
          name: "seismic-toss",
          url: "https://pokeapi.co/api/v2/move/69/",
        },
      },
      {
        move: { name: "strength", url: "https://pokeapi.co/api/v2/move/70/" },
      },
      {
        move: { name: "earthquake", url: "https://pokeapi.co/api/v2/move/89/" },
      },
      {
        move: { name: "fissure", url: "https://pokeapi.co/api/v2/move/90/" },
      },
      {
        move: { name: "dig", url: "https://pokeapi.co/api/v2/move/91/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "agility", url: "https://pokeapi.co/api/v2/move/97/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "defense-curl",
          url: "https://pokeapi.co/api/v2/move/111/",
        },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
      },
      {
        move: { name: "amnesia", url: "https://pokeapi.co/api/v2/move/133/" },
      },
      {
        move: {
          name: "leech-life",
          url: "https://pokeapi.co/api/v2/move/141/",
        },
      },
      {
        move: {
          name: "fury-swipes",
          url: "https://pokeapi.co/api/v2/move/154/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "rock-slide",
          url: "https://pokeapi.co/api/v2/move/157/",
        },
      },
      {
        move: {
          name: "super-fang",
          url: "https://pokeapi.co/api/v2/move/162/",
        },
      },
      {
        move: { name: "slash", url: "https://pokeapi.co/api/v2/move/163/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "flail", url: "https://pokeapi.co/api/v2/move/175/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      },
      {
        move: { name: "spikes", url: "https://pokeapi.co/api/v2/move/191/" },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "sandstorm", url: "https://pokeapi.co/api/v2/move/201/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "rollout", url: "https://pokeapi.co/api/v2/move/205/" },
      },
      {
        move: {
          name: "false-swipe",
          url: "https://pokeapi.co/api/v2/move/206/",
        },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: {
          name: "fury-cutter",
          url: "https://pokeapi.co/api/v2/move/210/",
        },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: { name: "safeguard", url: "https://pokeapi.co/api/v2/move/219/" },
      },
      {
        move: { name: "magnitude", url: "https://pokeapi.co/api/v2/move/222/" },
      },
      {
        move: {
          name: "dynamic-punch",
          url: "https://pokeapi.co/api/v2/move/223/",
        },
      },
      {
        move: {
          name: "rapid-spin",
          url: "https://pokeapi.co/api/v2/move/229/",
        },
      },
      {
        move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" },
      },
      {
        move: {
          name: "metal-claw",
          url: "https://pokeapi.co/api/v2/move/232/",
        },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "focus-punch",
          url: "https://pokeapi.co/api/v2/move/264/",
        },
      },
      {
        move: {
          name: "brick-break",
          url: "https://pokeapi.co/api/v2/move/280/",
        },
      },
      {
        move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      },
      {
        move: { name: "endeavor", url: "https://pokeapi.co/api/v2/move/283/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "crush-claw",
          url: "https://pokeapi.co/api/v2/move/306/",
        },
      },
      {
        move: { name: "rock-tomb", url: "https://pokeapi.co/api/v2/move/317/" },
      },
      {
        move: { name: "sand-tomb", url: "https://pokeapi.co/api/v2/move/328/" },
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
      },
      {
        move: { name: "mud-shot", url: "https://pokeapi.co/api/v2/move/341/" },
      },
      {
        move: { name: "covet", url: "https://pokeapi.co/api/v2/move/343/" },
      },
      {
        move: { name: "gyro-ball", url: "https://pokeapi.co/api/v2/move/360/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "fling", url: "https://pokeapi.co/api/v2/move/374/" },
      },
      {
        move: {
          name: "poison-jab",
          url: "https://pokeapi.co/api/v2/move/398/",
        },
      },
      {
        move: {
          name: "night-slash",
          url: "https://pokeapi.co/api/v2/move/400/",
        },
      },
      {
        move: { name: "x-scissor", url: "https://pokeapi.co/api/v2/move/404/" },
      },
      {
        move: {
          name: "earth-power",
          url: "https://pokeapi.co/api/v2/move/414/",
        },
      },
      {
        move: {
          name: "shadow-claw",
          url: "https://pokeapi.co/api/v2/move/421/",
        },
      },
      {
        move: {
          name: "rock-climb",
          url: "https://pokeapi.co/api/v2/move/431/",
        },
      },
      {
        move: {
          name: "stone-edge",
          url: "https://pokeapi.co/api/v2/move/444/",
        },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "stealth-rock",
          url: "https://pokeapi.co/api/v2/move/446/",
        },
      },
      {
        move: {
          name: "hone-claws",
          url: "https://pokeapi.co/api/v2/move/468/",
        },
      },
      {
        move: {
          name: "smack-down",
          url: "https://pokeapi.co/api/v2/move/479/",
        },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: { name: "chip-away", url: "https://pokeapi.co/api/v2/move/498/" },
      },
      {
        move: { name: "bulldoze", url: "https://pokeapi.co/api/v2/move/523/" },
      },
      {
        move: { name: "work-up", url: "https://pokeapi.co/api/v2/move/526/" },
      },
      {
        move: {
          name: "rototiller",
          url: "https://pokeapi.co/api/v2/move/563/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "high-horsepower",
          url: "https://pokeapi.co/api/v2/move/667/",
        },
      },
      {
        move: {
          name: "throat-chop",
          url: "https://pokeapi.co/api/v2/move/675/",
        },
      },
      {
        move: {
          name: "stomping-tantrum",
          url: "https://pokeapi.co/api/v2/move/707/",
        },
      },
      {
        move: {
          name: "steel-roller",
          url: "https://pokeapi.co/api/v2/move/798/",
        },
      },
      {
        move: {
          name: "scorching-sands",
          url: "https://pokeapi.co/api/v2/move/815/",
        },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
    ],
    name: "sandshrew",
    species: {
      name: "sandshrew",
      url: "https://pokeapi.co/api/v2/pokemon-species/27/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    },
    stats: [
      {
        base_stat: 50,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 75,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 85,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 20,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 30,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 40,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      },
    ],
    weight: 120,
  },
  {
    abilities: [
      {
        ability: {
          name: "swift-swim",
          url: "https://pokeapi.co/api/v2/ability/33/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "shell-armor",
          url: "https://pokeapi.co/api/v2/ability/75/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "weak-armor",
          url: "https://pokeapi.co/api/v2/ability/133/",
        },
        slot: 3,
      },
    ],
    base_experience: 71,
    height: 4,
    held_items: [],
    id: 138,
    moves: [
      {
        move: { name: "bind", url: "https://pokeapi.co/api/v2/move/20/" },
      },
      {
        move: { name: "slam", url: "https://pokeapi.co/api/v2/move/21/" },
      },
      {
        move: {
          name: "sand-attack",
          url: "https://pokeapi.co/api/v2/move/28/",
        },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: {
          name: "horn-attack",
          url: "https://pokeapi.co/api/v2/move/30/",
        },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "leer", url: "https://pokeapi.co/api/v2/move/43/" },
      },
      {
        move: { name: "bite", url: "https://pokeapi.co/api/v2/move/44/" },
      },
      {
        move: { name: "supersonic", url: "https://pokeapi.co/api/v2/move/48/" },
      },
      {
        move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" },
      },
      {
        move: { name: "hydro-pump", url: "https://pokeapi.co/api/v2/move/56/" },
      },
      {
        move: { name: "surf", url: "https://pokeapi.co/api/v2/move/57/" },
      },
      {
        move: { name: "ice-beam", url: "https://pokeapi.co/api/v2/move/58/" },
      },
      {
        move: { name: "blizzard", url: "https://pokeapi.co/api/v2/move/59/" },
      },
      {
        move: {
          name: "bubble-beam",
          url: "https://pokeapi.co/api/v2/move/61/",
        },
      },
      {
        move: {
          name: "aurora-beam",
          url: "https://pokeapi.co/api/v2/move/62/",
        },
      },
      {
        move: { name: "rock-throw", url: "https://pokeapi.co/api/v2/move/88/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: { name: "withdraw", url: "https://pokeapi.co/api/v2/move/110/" },
      },
      {
        move: { name: "haze", url: "https://pokeapi.co/api/v2/move/114/" },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "waterfall", url: "https://pokeapi.co/api/v2/move/127/" },
      },
      {
        move: {
          name: "spike-cannon",
          url: "https://pokeapi.co/api/v2/move/131/",
        },
      },
      {
        move: { name: "constrict", url: "https://pokeapi.co/api/v2/move/132/" },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "rock-slide",
          url: "https://pokeapi.co/api/v2/move/157/",
        },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: { name: "spikes", url: "https://pokeapi.co/api/v2/move/191/" },
      },
      {
        move: { name: "icy-wind", url: "https://pokeapi.co/api/v2/move/196/" },
      },
      {
        move: { name: "sandstorm", url: "https://pokeapi.co/api/v2/move/201/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "rollout", url: "https://pokeapi.co/api/v2/move/205/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: {
          name: "ancient-power",
          url: "https://pokeapi.co/api/v2/move/246/",
        },
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
      },
      {
        move: { name: "whirlpool", url: "https://pokeapi.co/api/v2/move/250/" },
      },
      {
        move: { name: "hail", url: "https://pokeapi.co/api/v2/move/258/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: { name: "dive", url: "https://pokeapi.co/api/v2/move/291/" },
      },
      {
        move: { name: "rock-tomb", url: "https://pokeapi.co/api/v2/move/317/" },
      },
      {
        move: { name: "tickle", url: "https://pokeapi.co/api/v2/move/321/" },
      },
      {
        move: {
          name: "muddy-water",
          url: "https://pokeapi.co/api/v2/move/330/",
        },
      },
      {
        move: {
          name: "iron-defense",
          url: "https://pokeapi.co/api/v2/move/334/",
        },
      },
      {
        move: { name: "mud-shot", url: "https://pokeapi.co/api/v2/move/341/" },
      },
      {
        move: {
          name: "rock-blast",
          url: "https://pokeapi.co/api/v2/move/350/",
        },
      },
      {
        move: {
          name: "water-pulse",
          url: "https://pokeapi.co/api/v2/move/352/",
        },
      },
      {
        move: { name: "gyro-ball", url: "https://pokeapi.co/api/v2/move/360/" },
      },
      {
        move: { name: "brine", url: "https://pokeapi.co/api/v2/move/362/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "wring-out", url: "https://pokeapi.co/api/v2/move/378/" },
      },
      {
        move: {
          name: "toxic-spikes",
          url: "https://pokeapi.co/api/v2/move/390/",
        },
      },
      {
        move: {
          name: "rock-polish",
          url: "https://pokeapi.co/api/v2/move/397/",
        },
      },
      {
        move: {
          name: "earth-power",
          url: "https://pokeapi.co/api/v2/move/414/",
        },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "stealth-rock",
          url: "https://pokeapi.co/api/v2/move/446/",
        },
      },
      {
        move: {
          name: "smack-down",
          url: "https://pokeapi.co/api/v2/move/479/",
        },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: { name: "scald", url: "https://pokeapi.co/api/v2/move/503/" },
      },
      {
        move: {
          name: "shell-smash",
          url: "https://pokeapi.co/api/v2/move/504/",
        },
      },
      {
        move: {
          name: "reflect-type",
          url: "https://pokeapi.co/api/v2/move/513/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "meteor-beam",
          url: "https://pokeapi.co/api/v2/move/800/",
        },
      },
    ],
    name: "omanyte",
    species: {
      name: "omanyte",
      url: "https://pokeapi.co/api/v2/pokemon-species/138/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    },
    stats: [
      {
        base_stat: 35,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 40,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 100,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 90,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 55,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 35,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      },
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      },
    ],
    weight: 75,
  },
  {
    abilities: [
      {
        ability: {
          name: "effect-spore",
          url: "https://pokeapi.co/api/v2/ability/27/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "dry-skin",
          url: "https://pokeapi.co/api/v2/ability/87/",
        },
        slot: 2,
      },
      {
        ability: { name: "damp", url: "https://pokeapi.co/api/v2/ability/6/" },
        slot: 3,
      },
    ],
    base_experience: 57,
    height: 3,
    held_items: [
      {
        item: {
          name: "tiny-mushroom",
          url: "https://pokeapi.co/api/v2/item/86/",
        },
      },
      {
        item: {
          name: "big-mushroom",
          url: "https://pokeapi.co/api/v2/item/87/",
        },
      },
      {
        item: {
          name: "balm-mushroom",
          url: "https://pokeapi.co/api/v2/item/621/",
        },
      },
    ],
    id: 46,
    moves: [
      {
        move: { name: "scratch", url: "https://pokeapi.co/api/v2/move/10/" },
      },
      {
        move: {
          name: "swords-dance",
          url: "https://pokeapi.co/api/v2/move/14/",
        },
      },
      {
        move: { name: "cut", url: "https://pokeapi.co/api/v2/move/15/" },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "psybeam", url: "https://pokeapi.co/api/v2/move/60/" },
      },
      {
        move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      },
      {
        move: { name: "absorb", url: "https://pokeapi.co/api/v2/move/71/" },
      },
      {
        move: { name: "mega-drain", url: "https://pokeapi.co/api/v2/move/72/" },
      },
      {
        move: { name: "leech-seed", url: "https://pokeapi.co/api/v2/move/73/" },
      },
      {
        move: { name: "growth", url: "https://pokeapi.co/api/v2/move/74/" },
      },
      {
        move: { name: "solar-beam", url: "https://pokeapi.co/api/v2/move/76/" },
      },
      {
        move: {
          name: "poison-powder",
          url: "https://pokeapi.co/api/v2/move/77/",
        },
      },
      {
        move: { name: "stun-spore", url: "https://pokeapi.co/api/v2/move/78/" },
      },
      {
        move: {
          name: "sleep-powder",
          url: "https://pokeapi.co/api/v2/move/79/",
        },
      },
      {
        move: {
          name: "string-shot",
          url: "https://pokeapi.co/api/v2/move/81/",
        },
      },
      {
        move: { name: "dig", url: "https://pokeapi.co/api/v2/move/91/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "agility", url: "https://pokeapi.co/api/v2/move/97/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: { name: "screech", url: "https://pokeapi.co/api/v2/move/103/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
      },
      {
        move: {
          name: "leech-life",
          url: "https://pokeapi.co/api/v2/move/141/",
        },
      },
      {
        move: { name: "spore", url: "https://pokeapi.co/api/v2/move/147/" },
      },
      {
        move: { name: "flash", url: "https://pokeapi.co/api/v2/move/148/" },
      },
      {
        move: {
          name: "fury-swipes",
          url: "https://pokeapi.co/api/v2/move/154/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: { name: "slash", url: "https://pokeapi.co/api/v2/move/163/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "flail", url: "https://pokeapi.co/api/v2/move/175/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "sludge-bomb",
          url: "https://pokeapi.co/api/v2/move/188/",
        },
      },
      {
        move: {
          name: "giga-drain",
          url: "https://pokeapi.co/api/v2/move/202/",
        },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: {
          name: "false-swipe",
          url: "https://pokeapi.co/api/v2/move/206/",
        },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: {
          name: "fury-cutter",
          url: "https://pokeapi.co/api/v2/move/210/",
        },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: { name: "pursuit", url: "https://pokeapi.co/api/v2/move/228/" },
      },
      {
        move: {
          name: "sweet-scent",
          url: "https://pokeapi.co/api/v2/move/230/",
        },
      },
      {
        move: {
          name: "metal-claw",
          url: "https://pokeapi.co/api/v2/move/232/",
        },
      },
      {
        move: { name: "synthesis", url: "https://pokeapi.co/api/v2/move/235/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "nature-power",
          url: "https://pokeapi.co/api/v2/move/267/",
        },
      },
      {
        move: {
          name: "brick-break",
          url: "https://pokeapi.co/api/v2/move/280/",
        },
      },
      {
        move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "aromatherapy",
          url: "https://pokeapi.co/api/v2/move/312/",
        },
      },
      {
        move: {
          name: "bullet-seed",
          url: "https://pokeapi.co/api/v2/move/331/",
        },
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: {
          name: "worry-seed",
          url: "https://pokeapi.co/api/v2/move/388/",
        },
      },
      {
        move: { name: "seed-bomb", url: "https://pokeapi.co/api/v2/move/402/" },
      },
      {
        move: { name: "x-scissor", url: "https://pokeapi.co/api/v2/move/404/" },
      },
      {
        move: {
          name: "energy-ball",
          url: "https://pokeapi.co/api/v2/move/412/",
        },
      },
      {
        move: {
          name: "cross-poison",
          url: "https://pokeapi.co/api/v2/move/440/",
        },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "grass-knot",
          url: "https://pokeapi.co/api/v2/move/447/",
        },
      },
      {
        move: { name: "bug-bite", url: "https://pokeapi.co/api/v2/move/450/" },
      },
      {
        move: {
          name: "hone-claws",
          url: "https://pokeapi.co/api/v2/move/468/",
        },
      },
      {
        move: {
          name: "wide-guard",
          url: "https://pokeapi.co/api/v2/move/469/",
        },
      },
      {
        move: { name: "venoshock", url: "https://pokeapi.co/api/v2/move/474/" },
      },
      {
        move: {
          name: "rage-powder",
          url: "https://pokeapi.co/api/v2/move/476/",
        },
      },
      {
        move: { name: "after-you", url: "https://pokeapi.co/api/v2/move/495/" },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "struggle-bug",
          url: "https://pokeapi.co/api/v2/move/522/",
        },
      },
      {
        move: {
          name: "rototiller",
          url: "https://pokeapi.co/api/v2/move/563/",
        },
      },
      {
        move: {
          name: "fell-stinger",
          url: "https://pokeapi.co/api/v2/move/565/",
        },
      },
      {
        move: {
          name: "grassy-terrain",
          url: "https://pokeapi.co/api/v2/move/580/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
    ],
    name: "paras",
    species: {
      name: "paras",
      url: "https://pokeapi.co/api/v2/pokemon-species/46/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    },
    stats: [
      {
        base_stat: 35,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 70,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 55,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 45,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 55,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 25,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      },
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
    ],
    weight: 54,
  },
  {
    abilities: [
      {
        ability: {
          name: "levitate",
          url: "https://pokeapi.co/api/v2/ability/26/",
        },
        slot: 1,
      },
    ],
    base_experience: 62,
    height: 13,
    held_items: [],
    id: 92,
    moves: [
      {
        move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" },
      },
      {
        move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" },
      },
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "disable", url: "https://pokeapi.co/api/v2/move/50/" },
      },
      {
        move: { name: "mega-drain", url: "https://pokeapi.co/api/v2/move/72/" },
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
      },
      {
        move: { name: "thunder", url: "https://pokeapi.co/api/v2/move/87/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "psychic", url: "https://pokeapi.co/api/v2/move/94/" },
      },
      {
        move: { name: "hypnosis", url: "https://pokeapi.co/api/v2/move/95/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: {
          name: "night-shade",
          url: "https://pokeapi.co/api/v2/move/101/",
        },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "confuse-ray",
          url: "https://pokeapi.co/api/v2/move/109/",
        },
      },
      {
        move: { name: "haze", url: "https://pokeapi.co/api/v2/move/114/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: {
          name: "self-destruct",
          url: "https://pokeapi.co/api/v2/move/120/",
        },
      },
      {
        move: { name: "lick", url: "https://pokeapi.co/api/v2/move/122/" },
      },
      {
        move: { name: "smog", url: "https://pokeapi.co/api/v2/move/123/" },
      },
      {
        move: {
          name: "dream-eater",
          url: "https://pokeapi.co/api/v2/move/138/",
        },
      },
      {
        move: {
          name: "poison-gas",
          url: "https://pokeapi.co/api/v2/move/139/",
        },
      },
      {
        move: { name: "psywave", url: "https://pokeapi.co/api/v2/move/149/" },
      },
      {
        move: { name: "explosion", url: "https://pokeapi.co/api/v2/move/153/" },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "nightmare", url: "https://pokeapi.co/api/v2/move/171/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "spite", url: "https://pokeapi.co/api/v2/move/180/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "scary-face",
          url: "https://pokeapi.co/api/v2/move/184/",
        },
      },
      {
        move: {
          name: "sludge-bomb",
          url: "https://pokeapi.co/api/v2/move/188/",
        },
      },
      {
        move: {
          name: "zap-cannon",
          url: "https://pokeapi.co/api/v2/move/192/",
        },
      },
      {
        move: {
          name: "destiny-bond",
          url: "https://pokeapi.co/api/v2/move/194/",
        },
      },
      {
        move: {
          name: "perish-song",
          url: "https://pokeapi.co/api/v2/move/195/",
        },
      },
      {
        move: { name: "icy-wind", url: "https://pokeapi.co/api/v2/move/196/" },
      },
      {
        move: {
          name: "giga-drain",
          url: "https://pokeapi.co/api/v2/move/202/",
        },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "mean-look", url: "https://pokeapi.co/api/v2/move/212/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: {
          name: "pain-split",
          url: "https://pokeapi.co/api/v2/move/220/",
        },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "psych-up", url: "https://pokeapi.co/api/v2/move/244/" },
      },
      {
        move: {
          name: "shadow-ball",
          url: "https://pokeapi.co/api/v2/move/247/",
        },
      },
      {
        move: { name: "uproar", url: "https://pokeapi.co/api/v2/move/253/" },
      },
      {
        move: { name: "torment", url: "https://pokeapi.co/api/v2/move/259/" },
      },
      {
        move: {
          name: "will-o-wisp",
          url: "https://pokeapi.co/api/v2/move/261/",
        },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: { name: "taunt", url: "https://pokeapi.co/api/v2/move/269/" },
      },
      {
        move: { name: "trick", url: "https://pokeapi.co/api/v2/move/271/" },
      },
      {
        move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      },
      {
        move: {
          name: "skill-swap",
          url: "https://pokeapi.co/api/v2/move/285/",
        },
      },
      {
        move: { name: "imprison", url: "https://pokeapi.co/api/v2/move/286/" },
      },
      {
        move: { name: "grudge", url: "https://pokeapi.co/api/v2/move/288/" },
      },
      {
        move: { name: "snatch", url: "https://pokeapi.co/api/v2/move/289/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: { name: "astonish", url: "https://pokeapi.co/api/v2/move/310/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "payback", url: "https://pokeapi.co/api/v2/move/371/" },
      },
      {
        move: { name: "embargo", url: "https://pokeapi.co/api/v2/move/373/" },
      },
      {
        move: {
          name: "sucker-punch",
          url: "https://pokeapi.co/api/v2/move/389/",
        },
      },
      {
        move: {
          name: "poison-jab",
          url: "https://pokeapi.co/api/v2/move/398/",
        },
      },
      {
        move: {
          name: "dark-pulse",
          url: "https://pokeapi.co/api/v2/move/399/",
        },
      },
      {
        move: {
          name: "energy-ball",
          url: "https://pokeapi.co/api/v2/move/412/",
        },
      },
      {
        move: {
          name: "nasty-plot",
          url: "https://pokeapi.co/api/v2/move/417/",
        },
      },
      {
        move: {
          name: "trick-room",
          url: "https://pokeapi.co/api/v2/move/433/",
        },
      },
      {
        move: { name: "gunk-shot", url: "https://pokeapi.co/api/v2/move/441/" },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "ominous-wind",
          url: "https://pokeapi.co/api/v2/move/466/",
        },
      },
      {
        move: {
          name: "wonder-room",
          url: "https://pokeapi.co/api/v2/move/472/",
        },
      },
      {
        move: { name: "venoshock", url: "https://pokeapi.co/api/v2/move/474/" },
      },
      {
        move: {
          name: "telekinesis",
          url: "https://pokeapi.co/api/v2/move/477/",
        },
      },
      {
        move: {
          name: "sludge-wave",
          url: "https://pokeapi.co/api/v2/move/482/",
        },
      },
      {
        move: {
          name: "acid-spray",
          url: "https://pokeapi.co/api/v2/move/491/",
        },
      },
      {
        move: { name: "foul-play", url: "https://pokeapi.co/api/v2/move/492/" },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "clear-smog",
          url: "https://pokeapi.co/api/v2/move/499/",
        },
      },
      {
        move: {
          name: "ally-switch",
          url: "https://pokeapi.co/api/v2/move/502/",
        },
      },
      {
        move: { name: "hex", url: "https://pokeapi.co/api/v2/move/506/" },
      },
      {
        move: {
          name: "reflect-type",
          url: "https://pokeapi.co/api/v2/move/513/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "dazzling-gleam",
          url: "https://pokeapi.co/api/v2/move/605/",
        },
      },
      {
        move: {
          name: "infestation",
          url: "https://pokeapi.co/api/v2/move/611/",
        },
      },
      {
        move: {
          name: "skitter-smack",
          url: "https://pokeapi.co/api/v2/move/806/",
        },
      },
      {
        move: {
          name: "poltergeist",
          url: "https://pokeapi.co/api/v2/move/809/",
        },
      },
      {
        move: {
          name: "corrosive-gas",
          url: "https://pokeapi.co/api/v2/move/810/",
        },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
    ],
    name: "gastly",
    species: {
      name: "gastly",
      url: "https://pokeapi.co/api/v2/pokemon-species/92/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    },
    stats: [
      {
        base_stat: 30,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 35,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 30,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 100,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 35,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 80,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    weight: 1,
  },
  {
    abilities: [
      {
        ability: {
          name: "magnet-pull",
          url: "https://pokeapi.co/api/v2/ability/42/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "sturdy",
          url: "https://pokeapi.co/api/v2/ability/5/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "analytic",
          url: "https://pokeapi.co/api/v2/ability/148/",
        },
        slot: 3,
      },
    ],
    base_experience: 65,
    height: 3,
    held_items: [
      {
        item: {
          name: "metal-coat",
          url: "https://pokeapi.co/api/v2/item/210/",
        },
      },
    ],
    id: 81,
    moves: [
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "supersonic", url: "https://pokeapi.co/api/v2/move/48/" },
      },
      {
        move: { name: "sonic-boom", url: "https://pokeapi.co/api/v2/move/49/" },
      },
      {
        move: {
          name: "thunder-shock",
          url: "https://pokeapi.co/api/v2/move/84/",
        },
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
      },
      {
        move: {
          name: "thunder-wave",
          url: "https://pokeapi.co/api/v2/move/86/",
        },
      },
      {
        move: { name: "thunder", url: "https://pokeapi.co/api/v2/move/87/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "teleport", url: "https://pokeapi.co/api/v2/move/100/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: { name: "screech", url: "https://pokeapi.co/api/v2/move/103/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "confuse-ray",
          url: "https://pokeapi.co/api/v2/move/109/",
        },
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: { name: "flash", url: "https://pokeapi.co/api/v2/move/148/" },
      },
      {
        move: { name: "explosion", url: "https://pokeapi.co/api/v2/move/153/" },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "zap-cannon",
          url: "https://pokeapi.co/api/v2/move/192/",
        },
      },
      {
        move: { name: "lock-on", url: "https://pokeapi.co/api/v2/move/199/" },
      },
      {
        move: { name: "sandstorm", url: "https://pokeapi.co/api/v2/move/201/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "rollout", url: "https://pokeapi.co/api/v2/move/205/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "spark", url: "https://pokeapi.co/api/v2/move/209/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "psych-up", url: "https://pokeapi.co/api/v2/move/244/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: { name: "charge", url: "https://pokeapi.co/api/v2/move/268/" },
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
      },
      {
        move: {
          name: "magic-coat",
          url: "https://pokeapi.co/api/v2/move/277/",
        },
      },
      {
        move: { name: "recycle", url: "https://pokeapi.co/api/v2/move/278/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "metal-sound",
          url: "https://pokeapi.co/api/v2/move/319/",
        },
      },
      {
        move: {
          name: "signal-beam",
          url: "https://pokeapi.co/api/v2/move/324/",
        },
      },
      {
        move: {
          name: "iron-defense",
          url: "https://pokeapi.co/api/v2/move/334/",
        },
      },
      {
        move: {
          name: "shock-wave",
          url: "https://pokeapi.co/api/v2/move/351/",
        },
      },
      {
        move: { name: "gravity", url: "https://pokeapi.co/api/v2/move/356/" },
      },
      {
        move: { name: "gyro-ball", url: "https://pokeapi.co/api/v2/move/360/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: {
          name: "magnet-rise",
          url: "https://pokeapi.co/api/v2/move/393/",
        },
      },
      {
        move: {
          name: "mirror-shot",
          url: "https://pokeapi.co/api/v2/move/429/",
        },
      },
      {
        move: {
          name: "flash-cannon",
          url: "https://pokeapi.co/api/v2/move/430/",
        },
      },
      {
        move: { name: "discharge", url: "https://pokeapi.co/api/v2/move/435/" },
      },
      {
        move: { name: "iron-head", url: "https://pokeapi.co/api/v2/move/442/" },
      },
      {
        move: {
          name: "magnet-bomb",
          url: "https://pokeapi.co/api/v2/move/443/",
        },
      },
      {
        move: {
          name: "charge-beam",
          url: "https://pokeapi.co/api/v2/move/451/",
        },
      },
      {
        move: {
          name: "heavy-slam",
          url: "https://pokeapi.co/api/v2/move/484/",
        },
      },
      {
        move: {
          name: "electro-ball",
          url: "https://pokeapi.co/api/v2/move/486/",
        },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "volt-switch",
          url: "https://pokeapi.co/api/v2/move/521/",
        },
      },
      {
        move: {
          name: "electroweb",
          url: "https://pokeapi.co/api/v2/move/527/",
        },
      },
      {
        move: {
          name: "wild-charge",
          url: "https://pokeapi.co/api/v2/move/528/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "eerie-impulse",
          url: "https://pokeapi.co/api/v2/move/598/",
        },
      },
      {
        move: {
          name: "electric-terrain",
          url: "https://pokeapi.co/api/v2/move/604/",
        },
      },
      {
        move: {
          name: "steel-beam",
          url: "https://pokeapi.co/api/v2/move/796/",
        },
      },
      {
        move: {
          name: "rising-voltage",
          url: "https://pokeapi.co/api/v2/move/804/",
        },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
    ],
    name: "magnemite",
  
    species: {
      name: "magnemite",
      url: "https://pokeapi.co/api/v2/pokemon-species/81/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    },
    stats: [
      {
        base_stat: 25,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 35,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 70,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 95,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 55,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      },
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      },
    ],
    weight: 60,
  },
  {
    abilities: [
      {
        ability: {
          name: "early-bird",
          url: "https://pokeapi.co/api/v2/ability/48/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "flash-fire",
          url: "https://pokeapi.co/api/v2/ability/18/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "unnerve",
          url: "https://pokeapi.co/api/v2/ability/127/",
        },
        slot: 3,
      },
    ],
    base_experience: 66,
    height: 6,
    held_items: [],
    id: 228,
    moves: [
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "leer", url: "https://pokeapi.co/api/v2/move/43/" },
      },
      {
        move: { name: "bite", url: "https://pokeapi.co/api/v2/move/44/" },
      },
      {
        move: { name: "roar", url: "https://pokeapi.co/api/v2/move/46/" },
      },
      {
        move: { name: "ember", url: "https://pokeapi.co/api/v2/move/52/" },
      },
      {
        move: {
          name: "flamethrower",
          url: "https://pokeapi.co/api/v2/move/53/",
        },
      },
      {
        move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      },
      {
        move: { name: "solar-beam", url: "https://pokeapi.co/api/v2/move/76/" },
      },
      {
        move: { name: "fire-spin", url: "https://pokeapi.co/api/v2/move/83/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: { name: "smog", url: "https://pokeapi.co/api/v2/move/123/" },
      },
      {
        move: {
          name: "fire-blast",
          url: "https://pokeapi.co/api/v2/move/126/",
        },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "dream-eater",
          url: "https://pokeapi.co/api/v2/move/138/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "super-fang",
          url: "https://pokeapi.co/api/v2/move/162/",
        },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "nightmare", url: "https://pokeapi.co/api/v2/move/171/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "reversal", url: "https://pokeapi.co/api/v2/move/179/" },
      },
      {
        move: { name: "spite", url: "https://pokeapi.co/api/v2/move/180/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "scary-face",
          url: "https://pokeapi.co/api/v2/move/184/",
        },
      },
      {
        move: {
          name: "feint-attack",
          url: "https://pokeapi.co/api/v2/move/185/",
        },
      },
      {
        move: {
          name: "sludge-bomb",
          url: "https://pokeapi.co/api/v2/move/188/",
        },
      },
      {
        move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      },
      {
        move: {
          name: "destiny-bond",
          url: "https://pokeapi.co/api/v2/move/194/",
        },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: {
          name: "pain-split",
          url: "https://pokeapi.co/api/v2/move/220/",
        },
      },
      {
        move: { name: "pursuit", url: "https://pokeapi.co/api/v2/move/228/" },
      },
      {
        move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "crunch", url: "https://pokeapi.co/api/v2/move/242/" },
      },
      {
        move: {
          name: "shadow-ball",
          url: "https://pokeapi.co/api/v2/move/247/",
        },
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
      },
      {
        move: { name: "beat-up", url: "https://pokeapi.co/api/v2/move/251/" },
      },
      {
        move: { name: "uproar", url: "https://pokeapi.co/api/v2/move/253/" },
      },
      {
        move: { name: "heat-wave", url: "https://pokeapi.co/api/v2/move/257/" },
      },
      {
        move: { name: "torment", url: "https://pokeapi.co/api/v2/move/259/" },
      },
      {
        move: {
          name: "will-o-wisp",
          url: "https://pokeapi.co/api/v2/move/261/",
        },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: { name: "taunt", url: "https://pokeapi.co/api/v2/move/269/" },
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
      },
      {
        move: { name: "role-play", url: "https://pokeapi.co/api/v2/move/272/" },
      },
      {
        move: { name: "snatch", url: "https://pokeapi.co/api/v2/move/289/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "hyper-voice",
          url: "https://pokeapi.co/api/v2/move/304/",
        },
      },
      {
        move: { name: "overheat", url: "https://pokeapi.co/api/v2/move/315/" },
      },
      {
        move: {
          name: "odor-sleuth",
          url: "https://pokeapi.co/api/v2/move/316/",
        },
      },
      {
        move: { name: "howl", url: "https://pokeapi.co/api/v2/move/336/" },
      },
      {
        move: { name: "mud-shot", url: "https://pokeapi.co/api/v2/move/341/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "feint", url: "https://pokeapi.co/api/v2/move/364/" },
      },
      {
        move: { name: "payback", url: "https://pokeapi.co/api/v2/move/371/" },
      },
      {
        move: { name: "embargo", url: "https://pokeapi.co/api/v2/move/373/" },
      },
      {
        move: {
          name: "punishment",
          url: "https://pokeapi.co/api/v2/move/386/",
        },
      },
      {
        move: {
          name: "sucker-punch",
          url: "https://pokeapi.co/api/v2/move/389/",
        },
      },
      {
        move: {
          name: "flare-blitz",
          url: "https://pokeapi.co/api/v2/move/394/",
        },
      },
      {
        move: {
          name: "dark-pulse",
          url: "https://pokeapi.co/api/v2/move/399/",
        },
      },
      {
        move: {
          name: "nasty-plot",
          url: "https://pokeapi.co/api/v2/move/417/",
        },
      },
      {
        move: {
          name: "thunder-fang",
          url: "https://pokeapi.co/api/v2/move/422/",
        },
      },
      {
        move: { name: "fire-fang", url: "https://pokeapi.co/api/v2/move/424/" },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "flame-charge",
          url: "https://pokeapi.co/api/v2/move/488/",
        },
      },
      {
        move: { name: "foul-play", url: "https://pokeapi.co/api/v2/move/492/" },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "incinerate",
          url: "https://pokeapi.co/api/v2/move/510/",
        },
      },
      {
        move: { name: "retaliate", url: "https://pokeapi.co/api/v2/move/514/" },
      },
      {
        move: { name: "inferno", url: "https://pokeapi.co/api/v2/move/517/" },
      },
      {
        move: { name: "snarl", url: "https://pokeapi.co/api/v2/move/555/" },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "psychic-fangs",
          url: "https://pokeapi.co/api/v2/move/706/",
        },
      },
      {
        move: {
          name: "burning-jealousy",
          url: "https://pokeapi.co/api/v2/move/807/",
        },
      },
      {
        move: { name: "lash-out", url: "https://pokeapi.co/api/v2/move/808/" },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
      {
        move: {
          name: "trailblaze",
          url: "https://pokeapi.co/api/v2/move/885/",
        },
      },
      {
        move: {
          name: "comeuppance",
          url: "https://pokeapi.co/api/v2/move/894/",
        },
      },
      {
        move: {
          name: "temper-flare",
          url: "https://pokeapi.co/api/v2/move/915/",
        },
      },
    ],
    name: "houndour",
    species: {
      name: "houndour",
      url: "https://pokeapi.co/api/v2/pokemon-species/228/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/228.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    },
    stats: [
      {
        base_stat: 45,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 60,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 30,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 80,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 50,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 65,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      },
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      },
    ],
    weight: 108,
  },
  {
    abilities: [
      {
        ability: {
          name: "synchronize",
          url: "https://pokeapi.co/api/v2/ability/28/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "inner-focus",
          url: "https://pokeapi.co/api/v2/ability/39/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "magic-guard",
          url: "https://pokeapi.co/api/v2/ability/98/",
        },
        slot: 3,
      },
    ],
    base_experience: 62,
    height: 9,
    held_items: [
      {
        item: {
          name: "twisted-spoon",
          url: "https://pokeapi.co/api/v2/item/225/",
        },
      },
    ],
    id: 63,
    moves: [
      {
        move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" },
      },
      {
        move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" },
      },
      {
        move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" },
      },
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
      },
      {
        move: { name: "mega-kick", url: "https://pokeapi.co/api/v2/move/25/" },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "submission", url: "https://pokeapi.co/api/v2/move/66/" },
      },
      {
        move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      },
      {
        move: {
          name: "seismic-toss",
          url: "https://pokeapi.co/api/v2/move/69/",
        },
      },
      {
        move: {
          name: "thunder-wave",
          url: "https://pokeapi.co/api/v2/move/86/",
        },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "confusion", url: "https://pokeapi.co/api/v2/move/93/" },
      },
      {
        move: { name: "psychic", url: "https://pokeapi.co/api/v2/move/94/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "teleport", url: "https://pokeapi.co/api/v2/move/100/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: { name: "barrier", url: "https://pokeapi.co/api/v2/move/112/" },
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "metronome", url: "https://pokeapi.co/api/v2/move/118/" },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
      },
      {
        move: {
          name: "dream-eater",
          url: "https://pokeapi.co/api/v2/move/138/",
        },
      },
      {
        move: { name: "flash", url: "https://pokeapi.co/api/v2/move/148/" },
      },
      {
        move: { name: "psywave", url: "https://pokeapi.co/api/v2/move/149/" },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "tri-attack",
          url: "https://pokeapi.co/api/v2/move/161/",
        },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "nightmare", url: "https://pokeapi.co/api/v2/move/171/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "zap-cannon",
          url: "https://pokeapi.co/api/v2/move/192/",
        },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: { name: "safeguard", url: "https://pokeapi.co/api/v2/move/219/" },
      },
      {
        move: {
          name: "dynamic-punch",
          url: "https://pokeapi.co/api/v2/move/223/",
        },
      },
      {
        move: { name: "encore", url: "https://pokeapi.co/api/v2/move/227/" },
      },
      {
        move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "psych-up", url: "https://pokeapi.co/api/v2/move/244/" },
      },
      {
        move: {
          name: "shadow-ball",
          url: "https://pokeapi.co/api/v2/move/247/",
        },
      },
      {
        move: { name: "torment", url: "https://pokeapi.co/api/v2/move/259/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "focus-punch",
          url: "https://pokeapi.co/api/v2/move/264/",
        },
      },
      {
        move: { name: "taunt", url: "https://pokeapi.co/api/v2/move/269/" },
      },
      {
        move: { name: "trick", url: "https://pokeapi.co/api/v2/move/271/" },
      },
      {
        move: { name: "role-play", url: "https://pokeapi.co/api/v2/move/272/" },
      },
      {
        move: {
          name: "magic-coat",
          url: "https://pokeapi.co/api/v2/move/277/",
        },
      },
      {
        move: { name: "recycle", url: "https://pokeapi.co/api/v2/move/278/" },
      },
      {
        move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      },
      {
        move: {
          name: "skill-swap",
          url: "https://pokeapi.co/api/v2/move/285/",
        },
      },
      {
        move: { name: "snatch", url: "https://pokeapi.co/api/v2/move/289/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "signal-beam",
          url: "https://pokeapi.co/api/v2/move/324/",
        },
      },
      {
        move: { name: "calm-mind", url: "https://pokeapi.co/api/v2/move/347/" },
      },
      {
        move: {
          name: "shock-wave",
          url: "https://pokeapi.co/api/v2/move/351/",
        },
      },
      {
        move: { name: "gravity", url: "https://pokeapi.co/api/v2/move/356/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "embargo", url: "https://pokeapi.co/api/v2/move/373/" },
      },
      {
        move: { name: "fling", url: "https://pokeapi.co/api/v2/move/374/" },
      },
      {
        move: {
          name: "psycho-shift",
          url: "https://pokeapi.co/api/v2/move/375/",
        },
      },
      {
        move: {
          name: "power-trick",
          url: "https://pokeapi.co/api/v2/move/379/",
        },
      },
      {
        move: {
          name: "power-swap",
          url: "https://pokeapi.co/api/v2/move/384/",
        },
      },
      {
        move: {
          name: "guard-swap",
          url: "https://pokeapi.co/api/v2/move/385/",
        },
      },
      {
        move: {
          name: "drain-punch",
          url: "https://pokeapi.co/api/v2/move/409/",
        },
      },
      {
        move: {
          name: "energy-ball",
          url: "https://pokeapi.co/api/v2/move/412/",
        },
      },
      {
        move: {
          name: "zen-headbutt",
          url: "https://pokeapi.co/api/v2/move/428/",
        },
      },
      {
        move: {
          name: "trick-room",
          url: "https://pokeapi.co/api/v2/move/433/",
        },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "grass-knot",
          url: "https://pokeapi.co/api/v2/move/447/",
        },
      },
      {
        move: {
          name: "charge-beam",
          url: "https://pokeapi.co/api/v2/move/451/",
        },
      },
      {
        move: {
          name: "guard-split",
          url: "https://pokeapi.co/api/v2/move/470/",
        },
      },
      {
        move: {
          name: "wonder-room",
          url: "https://pokeapi.co/api/v2/move/472/",
        },
      },
      {
        move: { name: "psyshock", url: "https://pokeapi.co/api/v2/move/473/" },
      },
      {
        move: {
          name: "telekinesis",
          url: "https://pokeapi.co/api/v2/move/477/",
        },
      },
      {
        move: {
          name: "magic-room",
          url: "https://pokeapi.co/api/v2/move/478/",
        },
      },
      {
        move: { name: "foul-play", url: "https://pokeapi.co/api/v2/move/492/" },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "ally-switch",
          url: "https://pokeapi.co/api/v2/move/502/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "dazzling-gleam",
          url: "https://pokeapi.co/api/v2/move/605/",
        },
      },
      {
        move: {
          name: "psychic-terrain",
          url: "https://pokeapi.co/api/v2/move/678/",
        },
      },
      {
        move: {
          name: "speed-swap",
          url: "https://pokeapi.co/api/v2/move/683/",
        },
      },
    ],
    name: "abra",
    species: {
      name: "abra",
      url: "https://pokeapi.co/api/v2/pokemon-species/63/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    },
    stats: [
      {
        base_stat: 25,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 20,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 15,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 105,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 55,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 90,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      },
    ],
    weight: 195,
  },
  {
    abilities: [
      {
        ability: {
          name: "shed-skin",
          url: "https://pokeapi.co/api/v2/ability/61/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "marvel-scale",
          url: "https://pokeapi.co/api/v2/ability/63/",
        },
        slot: 3,
      },
    ],
    base_experience: 60,
    height: 18,
    held_items: [
      {
        item: {
          name: "dragon-scale",
          url: "https://pokeapi.co/api/v2/item/212/",
        },
      },
    ],
    id: 147,
    moves: [
      {
        move: { name: "bind", url: "https://pokeapi.co/api/v2/move/20/" },
      },
      {
        move: { name: "slam", url: "https://pokeapi.co/api/v2/move/21/" },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "wrap", url: "https://pokeapi.co/api/v2/move/35/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "leer", url: "https://pokeapi.co/api/v2/move/43/" },
      },
      {
        move: { name: "supersonic", url: "https://pokeapi.co/api/v2/move/48/" },
      },
      {
        move: {
          name: "flamethrower",
          url: "https://pokeapi.co/api/v2/move/53/",
        },
      },
      {
        move: { name: "mist", url: "https://pokeapi.co/api/v2/move/54/" },
      },
      {
        move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" },
      },
      {
        move: { name: "hydro-pump", url: "https://pokeapi.co/api/v2/move/56/" },
      },
      {
        move: { name: "surf", url: "https://pokeapi.co/api/v2/move/57/" },
      },
      {
        move: { name: "ice-beam", url: "https://pokeapi.co/api/v2/move/58/" },
      },
      {
        move: { name: "blizzard", url: "https://pokeapi.co/api/v2/move/59/" },
      },
      {
        move: {
          name: "bubble-beam",
          url: "https://pokeapi.co/api/v2/move/61/",
        },
      },
      {
        move: { name: "hyper-beam", url: "https://pokeapi.co/api/v2/move/63/" },
      },
      {
        move: {
          name: "dragon-rage",
          url: "https://pokeapi.co/api/v2/move/82/",
        },
      },
      {
        move: { name: "fire-spin", url: "https://pokeapi.co/api/v2/move/83/" },
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
      },
      {
        move: {
          name: "thunder-wave",
          url: "https://pokeapi.co/api/v2/move/86/",
        },
      },
      {
        move: { name: "thunder", url: "https://pokeapi.co/api/v2/move/87/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "agility", url: "https://pokeapi.co/api/v2/move/97/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
      },
      {
        move: { name: "haze", url: "https://pokeapi.co/api/v2/move/114/" },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: {
          name: "fire-blast",
          url: "https://pokeapi.co/api/v2/move/126/",
        },
      },
      {
        move: { name: "waterfall", url: "https://pokeapi.co/api/v2/move/127/" },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "zap-cannon",
          url: "https://pokeapi.co/api/v2/move/192/",
        },
      },
      {
        move: { name: "icy-wind", url: "https://pokeapi.co/api/v2/move/196/" },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "outrage", url: "https://pokeapi.co/api/v2/move/200/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: { name: "safeguard", url: "https://pokeapi.co/api/v2/move/219/" },
      },
      {
        move: {
          name: "dragon-breath",
          url: "https://pokeapi.co/api/v2/move/225/",
        },
      },
      {
        move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: { name: "twister", url: "https://pokeapi.co/api/v2/move/239/" },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: {
          name: "extreme-speed",
          url: "https://pokeapi.co/api/v2/move/245/",
        },
      },
      {
        move: { name: "whirlpool", url: "https://pokeapi.co/api/v2/move/250/" },
      },
      {
        move: { name: "hail", url: "https://pokeapi.co/api/v2/move/258/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "dragon-dance",
          url: "https://pokeapi.co/api/v2/move/349/",
        },
      },
      {
        move: {
          name: "shock-wave",
          url: "https://pokeapi.co/api/v2/move/351/",
        },
      },
      {
        move: {
          name: "water-pulse",
          url: "https://pokeapi.co/api/v2/move/352/",
        },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "aqua-tail", url: "https://pokeapi.co/api/v2/move/401/" },
      },
      {
        move: {
          name: "dragon-pulse",
          url: "https://pokeapi.co/api/v2/move/406/",
        },
      },
      {
        move: {
          name: "dragon-rush",
          url: "https://pokeapi.co/api/v2/move/407/",
        },
      },
      {
        move: {
          name: "giga-impact",
          url: "https://pokeapi.co/api/v2/move/416/",
        },
      },
      {
        move: {
          name: "draco-meteor",
          url: "https://pokeapi.co/api/v2/move/434/",
        },
      },
      {
        move: { name: "iron-head", url: "https://pokeapi.co/api/v2/move/442/" },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: { name: "aqua-jet", url: "https://pokeapi.co/api/v2/move/453/" },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "incinerate",
          url: "https://pokeapi.co/api/v2/move/510/",
        },
      },
      {
        move: {
          name: "dragon-tail",
          url: "https://pokeapi.co/api/v2/move/525/",
        },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "brutal-swing",
          url: "https://pokeapi.co/api/v2/move/693/",
        },
      },
      {
        move: {
          name: "breaking-swipe",
          url: "https://pokeapi.co/api/v2/move/784/",
        },
      },
      {
        move: {
          name: "scale-shot",
          url: "https://pokeapi.co/api/v2/move/799/",
        },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
      {
        move: {
          name: "chilling-water",
          url: "https://pokeapi.co/api/v2/move/886/",
        },
      },
      {
        move: {
          name: "dragon-cheer",
          url: "https://pokeapi.co/api/v2/move/913/",
        },
      },
    ],
    name: "dratini",
    species: {
      name: "dratini",
      url: "https://pokeapi.co/api/v2/pokemon-species/147/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    },
    stats: [
      {
        base_stat: 41,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 64,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 45,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 50,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 50,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 50,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      }
    ],
    weight: 33,
  },
  {
    abilities: [
      {
        ability: {
          name: "cute-charm",
          url: "https://pokeapi.co/api/v2/ability/56/",
        },
        slot: 1,
      },
      {
        ability: {
          name: "competitive",
          url: "https://pokeapi.co/api/v2/ability/172/",
        },
        slot: 2,
      },
      {
        ability: {
          name: "friend-guard",
          url: "https://pokeapi.co/api/v2/ability/132/",
        },
        slot: 3,
      },
    ],
    base_experience: 95,
    height: 5,
    held_items: [
      {
        item: { name: "moon-stone", url: "https://pokeapi.co/api/v2/item/81/" },
      },
      {
        item: {
          name: "oran-berry",
          url: "https://pokeapi.co/api/v2/item/132/",
        },
      },
    ],
    id: 39,
    moves: [
      {
        move: { name: "pound", url: "https://pokeapi.co/api/v2/move/1/" },
      },
      {
        move: { name: "double-slap", url: "https://pokeapi.co/api/v2/move/3/" },
      },
      {
        move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" },
      },
      {
        move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" },
      },
      {
        move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" },
      },
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
      },
      {
        move: { name: "mega-kick", url: "https://pokeapi.co/api/v2/move/25/" },
      },
      {
        move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      },
      {
        move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      },
      {
        move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
      },
      {
        move: { name: "sing", url: "https://pokeapi.co/api/v2/move/47/" },
      },
      {
        move: { name: "disable", url: "https://pokeapi.co/api/v2/move/50/" },
      },
      {
        move: {
          name: "flamethrower",
          url: "https://pokeapi.co/api/v2/move/53/",
        },
      },
      {
        move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" },
      },
      {
        move: { name: "ice-beam", url: "https://pokeapi.co/api/v2/move/58/" },
      },
      {
        move: { name: "blizzard", url: "https://pokeapi.co/api/v2/move/59/" },
      },
      {
        move: {
          name: "bubble-beam",
          url: "https://pokeapi.co/api/v2/move/61/",
        },
      },
      {
        move: { name: "submission", url: "https://pokeapi.co/api/v2/move/66/" },
      },
      {
        move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      },
      {
        move: {
          name: "seismic-toss",
          url: "https://pokeapi.co/api/v2/move/69/",
        },
      },
      {
        move: { name: "strength", url: "https://pokeapi.co/api/v2/move/70/" },
      },
      {
        move: { name: "solar-beam", url: "https://pokeapi.co/api/v2/move/76/" },
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
      },
      {
        move: {
          name: "thunder-wave",
          url: "https://pokeapi.co/api/v2/move/86/",
        },
      },
      {
        move: { name: "thunder", url: "https://pokeapi.co/api/v2/move/87/" },
      },
      {
        move: { name: "dig", url: "https://pokeapi.co/api/v2/move/91/" },
      },
      {
        move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      },
      {
        move: { name: "psychic", url: "https://pokeapi.co/api/v2/move/94/" },
      },
      {
        move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      },
      {
        move: { name: "teleport", url: "https://pokeapi.co/api/v2/move/100/" },
      },
      {
        move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      },
      {
        move: { name: "screech", url: "https://pokeapi.co/api/v2/move/103/" },
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
      },
      {
        move: {
          name: "defense-curl",
          url: "https://pokeapi.co/api/v2/move/111/",
        },
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
      },
      {
        move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      },
      {
        move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      },
      {
        move: { name: "metronome", url: "https://pokeapi.co/api/v2/move/118/" },
      },
      {
        move: {
          name: "self-destruct",
          url: "https://pokeapi.co/api/v2/move/120/",
        },
      },
      {
        move: {
          name: "fire-blast",
          url: "https://pokeapi.co/api/v2/move/126/",
        },
      },
      {
        move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
      },
      {
        move: { name: "amnesia", url: "https://pokeapi.co/api/v2/move/133/" },
      },
      {
        move: {
          name: "dream-eater",
          url: "https://pokeapi.co/api/v2/move/138/",
        },
      },
      {
        move: { name: "flash", url: "https://pokeapi.co/api/v2/move/148/" },
      },
      {
        move: { name: "psywave", url: "https://pokeapi.co/api/v2/move/149/" },
      },
      {
        move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      },
      {
        move: {
          name: "tri-attack",
          url: "https://pokeapi.co/api/v2/move/161/",
        },
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
      },
      {
        move: { name: "thief", url: "https://pokeapi.co/api/v2/move/168/" },
      },
      {
        move: { name: "nightmare", url: "https://pokeapi.co/api/v2/move/171/" },
      },
      {
        move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      },
      {
        move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      },
      {
        move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      },
      {
        move: {
          name: "sweet-kiss",
          url: "https://pokeapi.co/api/v2/move/186/",
        },
      },
      {
        move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      },
      {
        move: {
          name: "zap-cannon",
          url: "https://pokeapi.co/api/v2/move/192/",
        },
      },
      {
        move: { name: "icy-wind", url: "https://pokeapi.co/api/v2/move/196/" },
      },
      {
        move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      },
      {
        move: { name: "sandstorm", url: "https://pokeapi.co/api/v2/move/201/" },
      },
      {
        move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      },
      {
        move: { name: "charm", url: "https://pokeapi.co/api/v2/move/204/" },
      },
      {
        move: { name: "rollout", url: "https://pokeapi.co/api/v2/move/205/" },
      },
      {
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
      },
      {
        move: { name: "heal-bell", url: "https://pokeapi.co/api/v2/move/215/" },
      },
      {
        move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
      },
      {
        move: { name: "safeguard", url: "https://pokeapi.co/api/v2/move/219/" },
      },
      {
        move: {
          name: "pain-split",
          url: "https://pokeapi.co/api/v2/move/220/",
        },
      },
      {
        move: {
          name: "dynamic-punch",
          url: "https://pokeapi.co/api/v2/move/223/",
        },
      },
      {
        move: {
          name: "baton-pass",
          url: "https://pokeapi.co/api/v2/move/226/",
        },
      },
      {
        move: { name: "encore", url: "https://pokeapi.co/api/v2/move/227/" },
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
      },
      {
        move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      },
      {
        move: { name: "psych-up", url: "https://pokeapi.co/api/v2/move/244/" },
      },
      {
        move: {
          name: "shadow-ball",
          url: "https://pokeapi.co/api/v2/move/247/",
        },
      },
      {
        move: { name: "uproar", url: "https://pokeapi.co/api/v2/move/253/" },
      },
      {
        move: { name: "stockpile", url: "https://pokeapi.co/api/v2/move/254/" },
      },
      {
        move: { name: "spit-up", url: "https://pokeapi.co/api/v2/move/255/" },
      },
      {
        move: { name: "swallow", url: "https://pokeapi.co/api/v2/move/256/" },
      },
      {
        move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      },
      {
        move: {
          name: "focus-punch",
          url: "https://pokeapi.co/api/v2/move/264/",
        },
      },
      {
        move: { name: "taunt", url: "https://pokeapi.co/api/v2/move/269/" },
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
      },
      {
        move: { name: "role-play", url: "https://pokeapi.co/api/v2/move/272/" },
      },
      {
        move: {
          name: "magic-coat",
          url: "https://pokeapi.co/api/v2/move/277/",
        },
      },
      {
        move: { name: "recycle", url: "https://pokeapi.co/api/v2/move/278/" },
      },
      {
        move: {
          name: "brick-break",
          url: "https://pokeapi.co/api/v2/move/280/",
        },
      },
      {
        move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      },
      {
        move: { name: "endeavor", url: "https://pokeapi.co/api/v2/move/283/" },
      },
      {
        move: {
          name: "skill-swap",
          url: "https://pokeapi.co/api/v2/move/285/",
        },
      },
      {
        move: { name: "snatch", url: "https://pokeapi.co/api/v2/move/289/" },
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
      },
      {
        move: {
          name: "hyper-voice",
          url: "https://pokeapi.co/api/v2/move/304/",
        },
      },
      {
        move: {
          name: "fake-tears",
          url: "https://pokeapi.co/api/v2/move/313/",
        },
      },
      {
        move: { name: "bounce", url: "https://pokeapi.co/api/v2/move/340/" },
      },
      {
        move: { name: "covet", url: "https://pokeapi.co/api/v2/move/343/" },
      },
      {
        move: {
          name: "magical-leaf",
          url: "https://pokeapi.co/api/v2/move/345/",
        },
      },
      {
        move: { name: "calm-mind", url: "https://pokeapi.co/api/v2/move/347/" },
      },
      {
        move: {
          name: "shock-wave",
          url: "https://pokeapi.co/api/v2/move/351/",
        },
      },
      {
        move: {
          name: "water-pulse",
          url: "https://pokeapi.co/api/v2/move/352/",
        },
      },
      {
        move: { name: "gravity", url: "https://pokeapi.co/api/v2/move/356/" },
      },
      {
        move: {
          name: "wake-up-slap",
          url: "https://pokeapi.co/api/v2/move/358/",
        },
      },
      {
        move: { name: "gyro-ball", url: "https://pokeapi.co/api/v2/move/360/" },
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
      },
      {
        move: { name: "fling", url: "https://pokeapi.co/api/v2/move/374/" },
      },
      {
        move: { name: "copycat", url: "https://pokeapi.co/api/v2/move/383/" },
      },
      {
        move: {
          name: "last-resort",
          url: "https://pokeapi.co/api/v2/move/387/",
        },
      },
      {
        move: {
          name: "dark-pulse",
          url: "https://pokeapi.co/api/v2/move/399/",
        },
      },
      {
        move: {
          name: "drain-punch",
          url: "https://pokeapi.co/api/v2/move/409/",
        },
      },
      {
        move: {
          name: "energy-ball",
          url: "https://pokeapi.co/api/v2/move/412/",
        },
      },
      {
        move: {
          name: "nasty-plot",
          url: "https://pokeapi.co/api/v2/move/417/",
        },
      },
      {
        move: {
          name: "zen-headbutt",
          url: "https://pokeapi.co/api/v2/move/428/",
        },
      },
      {
        move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      },
      {
        move: {
          name: "stealth-rock",
          url: "https://pokeapi.co/api/v2/move/446/",
        },
      },
      {
        move: {
          name: "grass-knot",
          url: "https://pokeapi.co/api/v2/move/447/",
        },
      },
      {
        move: {
          name: "charge-beam",
          url: "https://pokeapi.co/api/v2/move/451/",
        },
      },
      {
        move: { name: "psyshock", url: "https://pokeapi.co/api/v2/move/473/" },
      },
      {
        move: {
          name: "telekinesis",
          url: "https://pokeapi.co/api/v2/move/477/",
        },
      },
      {
        move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      },
      {
        move: {
          name: "echoed-voice",
          url: "https://pokeapi.co/api/v2/move/497/",
        },
      },
      {
        move: {
          name: "stored-power",
          url: "https://pokeapi.co/api/v2/move/500/",
        },
      },
      {
        move: {
          name: "ally-switch",
          url: "https://pokeapi.co/api/v2/move/502/",
        },
      },
      {
        move: {
          name: "incinerate",
          url: "https://pokeapi.co/api/v2/move/510/",
        },
      },
      {
        move: { name: "retaliate", url: "https://pokeapi.co/api/v2/move/514/" },
      },
      {
        move: { name: "work-up", url: "https://pokeapi.co/api/v2/move/526/" },
      },
      {
        move: {
          name: "wild-charge",
          url: "https://pokeapi.co/api/v2/move/528/",
        },
      },
      {
        move: {
          name: "disarming-voice",
          url: "https://pokeapi.co/api/v2/move/574/",
        },
      },
      {
        move: {
          name: "draining-kiss",
          url: "https://pokeapi.co/api/v2/move/577/",
        },
      },
      {
        move: {
          name: "misty-terrain",
          url: "https://pokeapi.co/api/v2/move/581/",
        },
      },
      {
        move: {
          name: "play-rough",
          url: "https://pokeapi.co/api/v2/move/583/",
        },
      },
      {
        move: { name: "play-nice", url: "https://pokeapi.co/api/v2/move/589/" },
      },
      {
        move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      },
      {
        move: {
          name: "dazzling-gleam",
          url: "https://pokeapi.co/api/v2/move/605/",
        },
      },
      {
        move: {
          name: "power-up-punch",
          url: "https://pokeapi.co/api/v2/move/612/",
        },
      },
      {
        move: {
          name: "body-press",
          url: "https://pokeapi.co/api/v2/move/776/",
        },
      },
      {
        move: {
          name: "steel-roller",
          url: "https://pokeapi.co/api/v2/move/798/",
        },
      },
      {
        move: {
          name: "misty-explosion",
          url: "https://pokeapi.co/api/v2/move/802/",
        },
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
      },
      {
        move: {
          name: "ice-spinner",
          url: "https://pokeapi.co/api/v2/move/861/",
        },
      },
      {
        move: {
          name: "trailblaze",
          url: "https://pokeapi.co/api/v2/move/885/",
        },
      },
      {
        move: {
          name: "chilling-water",
          url: "https://pokeapi.co/api/v2/move/886/",
        },
      },
      {
        move: {
          name: "alluring-voice",
          url: "https://pokeapi.co/api/v2/move/914/",
        },
      },
      {
        move: {
          name: "psychic-noise",
          url: "https://pokeapi.co/api/v2/move/917/",
        },
      },
    ],
    name: "jigglypuff",
  
    species: {
      name: "jigglypuff",
      url: "https://pokeapi.co/api/v2/pokemon-species/39/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    },
    stats: [
      {
        base_stat: 115,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 45,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 20,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 45,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 25,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 20,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      },
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      },
    ],
    weight: 55,
  },
];
