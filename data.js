const pokemonData = [
    {
        "No.": "0001",
        "Pokémon en": "Bulbasaur",
        "Pokémon fr": "Bulbizarre",
        "Drops": "Melon Seeds 0-1, Miracle Seed 5%"
    },
    {
        "No.": "0002",
        "Pokémon en": "Ivysaur",
        "Pokémon fr": "Herbizarre",
        "Drops": "Melon Seeds 0-2, Miracle Seed 10%"
    },
    {
        "No.": "0003",
        "Pokémon en": "Venusaur",
        "Pokémon fr": "Florizarre",
        "Drops": "Melon Seeds 0-3, Miracle Seed 25%"
    },
    {
        "No.": "0004",
        "Pokémon en": "Charmander",
        "Pokémon fr": "Salamèche",
        "Drops": "Blaze Powder 0-1, Charcoal Stick 5%"
    },
    {
        "No.": "0005",
        "Pokémon en": "Charmeleon",
        "Pokémon fr": "Reptincel",
        "Drops": "Blaze Powder 0-2, Charcoal Stick 10%"
    },
    {
        "No.": "0006",
        "Pokémon en": "Charizard",
        "Pokémon fr": "Dracaufeu",
        "Drops": "Blaze Powder 0-3, Charcoal Stick 25%"
    },
    {
        "No.": "0007",
        "Pokémon en": "Squirtle",
        "Pokémon fr": "Carapuce",
        "Drops": "Turtle Scute 0-1, Mystic Water 5%"
    },
    {
        "No.": "0008",
        "Pokémon en": "Wartortle",
        "Pokémon fr": "Carabaffe",
        "Drops": "Turtle Scute 0-2, Mystic Water 10%"
    },
    {
        "No.": "0009",
        "Pokémon en": "Blastoise",
        "Pokémon fr": "Tortank",
        "Drops": "Turtle Scute 0-3, Mystic Water 25%"
    },
    {
        "No.": "0010",
        "Pokémon en": "Caterpie",
        "Pokémon fr": "Chenipan",
        "Drops": "String 0-1, Wepear Berry 2.5%"
    },
    {
        "No.": "0011",
        "Pokémon en": "Metapod",
        "Pokémon fr": "Chrysacier",
        "Drops": "String 0-2, Wepear Berry 2.5%"
    },
    {
        "No.": "0012",
        "Pokémon en": "Butterfree",
        "Pokémon fr": "Papilusion",
        "Drops": "Silver Powder 5%, Wepear Berry 5%"
    },
    {
        "No.": "0013",
        "Pokémon en": "Weedle",
        "Pokémon fr": "Aspicot",
        "Drops": "String 0-1, Pinap Berry 2.5%"
    },
    {
        "No.": "0014",
        "Pokémon en": "Kakuna",
        "Pokémon fr": "Coconfort",
        "Drops": "String 0-2, Pinap Berry 2.5%"
    },
    {
        "No.": "0015",
        "Pokémon en": "Beedrill",
        "Pokémon fr": "Dardargnan",
        "Drops": "Poison Barb 5%, Pinap Berry 5%"
    },
    {
        "No.": "0016",
        "Pokémon en": "Pidgey",
        "Pokémon fr": "Roucool",
        "Drops": "Feather 0-1, Raw Chicken 1, Chilan Berry 2.5%"
    },
    {
        "No.": "0017",
        "Pokémon en": "Pidgeotto",
        "Pokémon fr": "Roucoups",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Chilan Berry 5%"
    },
    {
        "No.": "0018",
        "Pokémon en": "Pidgeot",
        "Pokémon fr": "Roucarnage",
        "Drops": "Feather 0-3, Raw Chicken 1, Sharp Beak 5%, Chilan Berry 10%"
    },
    {
        "No.": "0019",
        "Pokémon en": "Rattata",
        "Pokémon fr": "Rattata",
        "Drops": "Rotten Flesh 0-1, Chilan Berry 2.5%"
    },
    {
        "No.": "0019",
        "Pokémon en": "Rattata [Alolan]",
        "Pokémon fr": "Rattata d'Alola",
        "Drops": "Rotten Flesh 0-1, Pecha Berry 2.5%"
    },
    {
        "No.": "0020",
        "Pokémon en": "Raticate",
        "Pokémon fr": "Rattatac",
        "Drops": "Rotten Flesh 0-2, Chilan Berry 5%"
    },
    {
        "No.": "0020",
        "Pokémon en": "Raticate [Alolan]",
        "Pokémon fr": "Rattatac d'Alola",
        "Drops": "Rotten Flesh 0-2, Pecha Berry 5%"
    },
    {
        "No.": "0021",
        "Pokémon en": "Spearow",
        "Pokémon fr": "Piafabec",
        "Drops": "Feather 0-1, Raw Chicken 1, Sharp Beak 2.5%, Charti Berry 2.5%"
    },
    {
        "No.": "0022",
        "Pokémon en": "Fearow",
        "Pokémon fr": "Rapasdepic",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 5%, Charti Berry 5%"
    },
    {
        "No.": "0023",
        "Pokémon en": "Ekans",
        "Pokémon fr": "Abo",
        "Drops": "Razor Fang 2.5%"
    },
    {
        "No.": "0024",
        "Pokémon en": "Arbok",
        "Pokémon fr": "Arbok",
        "Drops": "Razor Fang 5%"
    },
    {
        "No.": "0025",
        "Pokémon en": "Pikachu",
        "Pokémon fr": "Pikachu",
        "Drops": "Light Ball 5%, Thunder Stone 5%, Oran Berry 5%"
    },
    {
        "No.": "0026",
        "Pokémon en": "Raichu",
        "Pokémon fr": "Raichu",
        "Drops": "Light Ball 10%, Thunder Stone 10%, Oran Berry 10%"
    },
    {
        "No.": "0026",
        "Pokémon en": "Raichu [Alolan]",
        "Pokémon fr": "Raichu d'Alola",
        "Drops": "Light Ball 10%, Thunder Stone 10%, Oran Berry 10%"
    },
    {
        "No.": "0027",
        "Pokémon en": "Sandshrew",
        "Pokémon fr": "Sabelette",
        "Drops": "Armadillo Scute 0-1, Quick Claw 2.5%, Soft Sand 2.5%"
    },
    {
        "No.": "0028",
        "Pokémon en": "Sandslash",
        "Pokémon fr": "Sablaireau",
        "Drops": "Armadillo Scute 0-2, Quick Claw 5%, Soft Sand 5%"
    },
    {
        "No.": "0029",
        "Pokémon en": "Nidoran-F",
        "Pokémon fr": "",
        "Drops": "Poison Barb 2.5%, Pecha Berry 2.5%"
    },
    {
        "No.": "0030",
        "Pokémon en": "Nidorina",
        "Pokémon fr": "Nidorina",
        "Drops": "Poison Barb 5%, Pecha Berry 5%"
    },
    {
        "No.": "0031",
        "Pokémon en": "Nidoqueen",
        "Pokémon fr": "Nidoqueen",
        "Drops": "Poison Barb 10%, Pecha Berry 10%"
    },
    {
        "No.": "0032",
        "Pokémon en": "Nidoran-M",
        "Pokémon fr": "",
        "Drops": "Poison Barb 2.5%, Pecha Berry 2.5%"
    },
    {
        "No.": "0033",
        "Pokémon en": "Nidorino",
        "Pokémon fr": "Nidorino",
        "Drops": "Poison Barb 5%, Pecha Berry 5%"
    },
    {
        "No.": "0034",
        "Pokémon en": "Nidoking",
        "Pokémon fr": "Nidoking",
        "Drops": "Poison Barb 10%, Pecha Berry 10%"
    },
    {
        "No.": "0035",
        "Pokémon en": "Clefairy",
        "Pokémon fr": "Mélofée",
        "Drops": "Moon Stone 5%, Babiri Berry 5%, Fairy Feather 5%"
    },
    {
        "No.": "0036",
        "Pokémon en": "Clefable",
        "Pokémon fr": "Mélodelfe",
        "Drops": "Moon Stone 10%, Babiri Berry 10%, Fairy Feather 10%"
    },
    {
        "No.": "0037",
        "Pokémon en": "Vulpix",
        "Pokémon fr": "Goupix",
        "Drops": "Sweet Berries 1-3, Charcoal 2.5%, Rawst Berry 2.5%"
    },
    {
        "No.": "0037",
        "Pokémon en": "Vulpix [Alolan]",
        "Pokémon fr": "Goupix d'Alola",
        "Drops": "Sweet Berries 1-3, Snowball 0-1, Babiri Berry 2.5%"
    },
    {
        "No.": "0038",
        "Pokémon en": "Ninetales",
        "Pokémon fr": "Feunard",
        "Drops": "Sweet Berries 2-4, Charcoal 5%, Rawst Berry 5%"
    },
    {
        "No.": "0038",
        "Pokémon en": "Ninetales [Alolan]",
        "Pokémon fr": "Feunard d'Alola",
        "Drops": "Sweet Berries 2-4, Snowball 0-2, Babiri Berry 5%"
    },
    {
        "No.": "0039",
        "Pokémon en": "Jigglypuff",
        "Pokémon fr": "Rondoudou",
        "Drops": "Moon Stone 5%, Air Balloon 5%, Oran Berry 5%"
    },
    {
        "No.": "0040",
        "Pokémon en": "Wigglytuff",
        "Pokémon fr": "Grodoudou",
        "Drops": "Moon Stone 10%, Air Balloon 10%, Oran Berry 10%"
    },
    {
        "No.": "0041",
        "Pokémon en": "Zubat",
        "Pokémon fr": "Nosferapti",
        "Drops": "Phantom Membrane 2.5%, Razor Fang 2.5%, Persim Berry 2.5%"
    },
    {
        "No.": "0042",
        "Pokémon en": "Golbat",
        "Pokémon fr": "Nosferalto",
        "Drops": "Phantom Membrane 5%, Razor Fang 5%, Persim Berry 5%"
    },
    {
        "No.": "0043",
        "Pokémon en": "Oddish",
        "Pokémon fr": "Mystherbe",
        "Drops": "Absorb Bulb 2.5%, Pecha Berry 2.5%"
    },
    {
        "No.": "0044",
        "Pokémon en": "Gloom",
        "Pokémon fr": "Ortide",
        "Drops": "Absorb Bulb 5%, Pecha Berry 5%"
    },
    {
        "No.": "0045",
        "Pokémon en": "Vileplume",
        "Pokémon fr": "Rafflesia",
        "Drops": "Absorb Bulb 10%, Pecha Berry 10%"
    },
    {
        "No.": "0046",
        "Pokémon en": "Paras",
        "Pokémon fr": "Paras",
        "Drops": "Red Mushroom 0-2, Coba Berry 2.5%"
    },
    {
        "No.": "0047",
        "Pokémon en": "Parasect",
        "Pokémon fr": "Parasect",
        "Drops": "Red Mushroom 1, Coba Berry 5%"
    },
    {
        "No.": "0048",
        "Pokémon en": "Venonat",
        "Pokémon fr": "Mimitoss",
        "Drops": "String 0-1, Persim Berry 2.5%"
    },
    {
        "No.": "0049",
        "Pokémon en": "Venomoth",
        "Pokémon fr": "Aéromite",
        "Drops": "String 0-2, Silver Powder 5%, Persim Berry 5%"
    },
    {
        "No.": "0050",
        "Pokémon en": "Diglett",
        "Pokémon fr": "Taupiqueur",
        "Drops": "Dirt 0-1, Potato 2.5%, Big Root 2.5%, Soft Sand 2.5%"
    },
    {
        "No.": "0050",
        "Pokémon en": "Diglett [Alolan]",
        "Pokémon fr": "Taupiqueur d'Alola",
        "Drops": "Coarse Dirt 0-1, Potato 2.5%, Big Root 2.5%, Soft Sand 2.5%"
    },
    {
        "No.": "0051",
        "Pokémon en": "Dugtrio",
        "Pokémon fr": "Triopikeur",
        "Drops": "Dirt 0-2, Potato 5%, Big Root 5%, Soft Sand 5%"
    },
    {
        "No.": "0051",
        "Pokémon en": "Dugtrio [Alolan]",
        "Pokémon fr": "Triopikeur d'Alola",
        "Drops": "Coarse Dirt 0-2, Potato 5%, Big Root 5%, Soft Sand 5%"
    },
    {
        "No.": "0052",
        "Pokémon en": "Meowth",
        "Pokémon fr": "Miaouss",
        "Drops": "Gold Nugget 0-1, Quick Claw 2.5%, Pinap Berry 2.5%"
    },
    {
        "No.": "0052",
        "Pokémon en": "Meowth [Alolan]",
        "Pokémon fr": "Miaouss d'Alola",
        "Drops": "Gold Nugget 0-1, Quick Claw 2.5%, Bluk Berry 2.5%"
    },
    {
        "No.": "0052",
        "Pokémon en": "Meowth [Galarian]",
        "Pokémon fr": "Miaouss de Galar",
        "Drops": "Razor Claw 2.5%, Wepear Berry 2.5%"
    },
    {
        "No.": "0053",
        "Pokémon en": "Persian",
        "Pokémon fr": "Persian",
        "Drops": "Gold Nugget 0-2, Quick Claw 5%, Pinap Berry 5%"
    },
    {
        "No.": "0053",
        "Pokémon en": "Persian [Alolan]",
        "Pokémon fr": "Persian d'Alola",
        "Drops": "Gold Nugget 0-2, Quick Claw 5%, Bluk Berry 5%"
    },
    {
        "No.": "0054",
        "Pokémon en": "Psyduck",
        "Pokémon fr": "Psykokwak",
        "Drops": "Feather 0-1, Raw Chicken 1, Mystic Water 2.5%"
    },
    {
        "No.": "0055",
        "Pokémon en": "Golduck",
        "Pokémon fr": "Akwakwak",
        "Drops": "Feather 0-2, Raw Chicken 1, Mystic Water 5%"
    },
    {
        "No.": "0056",
        "Pokémon en": "Mankey",
        "Pokémon fr": "Férosinge",
        "Drops": "Muscle Band 2.5%, Payapa Berry 2.5%"
    },
    {
        "No.": "0057",
        "Pokémon en": "Primeape",
        "Pokémon fr": "Colossinge",
        "Drops": "Muscle Band 5%, Payapa Berry 5%"
    },
    {
        "No.": "0058",
        "Pokémon en": "Growlithe",
        "Pokémon fr": "Caninos",
        "Drops": "Bone 0-1, Rawst Berry 2.5%"
    },
    {
        "No.": "0059",
        "Pokémon en": "Arcanine",
        "Pokémon fr": "Arcanin",
        "Drops": "Bone 0-2, Rawst Berry 5%"
    },
    {
        "No.": "0060",
        "Pokémon en": "Poliwag",
        "Pokémon fr": "Ptitard",
        "Drops": "King's Rock 2.5%, Chesto Berry 2.5%"
    },
    {
        "No.": "0061",
        "Pokémon en": "Poliwhirl",
        "Pokémon fr": "Têtarte",
        "Drops": "King's Rock 5%, Chesto Berry 5%"
    },
    {
        "No.": "0062",
        "Pokémon en": "Poliwrath",
        "Pokémon fr": "Tartard",
        "Drops": "King's Rock 10%, Chesto Berry 10%"
    },
    {
        "No.": "0063",
        "Pokémon en": "Abra",
        "Pokémon fr": "Abra",
        "Drops": "Ender Pearl 0-1, Twisted Spoon 2.5%, Kasib Berry 2.5%"
    },
    {
        "No.": "0064",
        "Pokémon en": "Kadabra",
        "Pokémon fr": "Kadabra",
        "Drops": "Ender Pearl 0-2, Twisted Spoon 5%, Kasib Berry 5%"
    },
    {
        "No.": "0065",
        "Pokémon en": "Alakazam",
        "Pokémon fr": "Alakazam",
        "Drops": "Ender Pearl 0-3, Twisted Spoon 10%, Kasib Berry 10%"
    },
    {
        "No.": "0066",
        "Pokémon en": "Machop",
        "Pokémon fr": "Machoc",
        "Drops": "Focus Band 2.5%, Muscle Band 2.5%, Wepear Berry 2.5%"
    },
    {
        "No.": "0067",
        "Pokémon en": "Machoke",
        "Pokémon fr": "Machopeur",
        "Drops": "Focus Band 5%, Muscle Band 5%, Wepear Berry 5%"
    },
    {
        "No.": "0068",
        "Pokémon en": "Machamp",
        "Pokémon fr": "Mackogneur",
        "Drops": "Focus Band 10%, Muscle Band 10%, Wepear Berry 10%"
    },
    {
        "No.": "0069",
        "Pokémon en": "Bellsprout",
        "Pokémon fr": "Chétiflor",
        "Drops": "Big Root 2.5%, Pinap Berry 2.5%"
    },
    {
        "No.": "0070",
        "Pokémon en": "Weepinbell",
        "Pokémon fr": "Boustiflor",
        "Drops": "Big Root 5%, Pinap Berry 5%"
    },
    {
        "No.": "0071",
        "Pokémon en": "Victreebel",
        "Pokémon fr": "Empiflor",
        "Drops": "Big Root 10%, Pinap Berry 10%"
    },
    {
        "No.": "0072",
        "Pokémon en": "Tentacool",
        "Pokémon fr": "Tentacool",
        "Drops": "Ink Sac 1-3, Glow Ink Sac 1-3 10%, Poison Barb 2.5%"
    },
    {
        "No.": "0073",
        "Pokémon en": "Tentacruel",
        "Pokémon fr": "Tentacruel",
        "Drops": "Ink Sac 2-4, Glow Ink Sac 2-4 10%, Poison Barb 5%"
    },
    {
        "No.": "0074",
        "Pokémon en": "Geodude",
        "Pokémon fr": "Racaillou",
        "Drops": "Gravel 0-1, Everstone 2.5%, Black Augurite 2.5%, Rindo Berry 2.5%"
    },
    {
        "No.": "0075",
        "Pokémon en": "Graveler",
        "Pokémon fr": "Gravalanch",
        "Drops": "Gravel 0-2, Everstone 5%, Black Augurite 5%, Rindo Berry 5%"
    },
    {
        "No.": "0076",
        "Pokémon en": "Golem",
        "Pokémon fr": "Grolem",
        "Drops": "Gravel 0-3, Everstone 10%, Black Augurite 10%, Rindo Berry 10%"
    },
    {
        "No.": "0077",
        "Pokémon en": "Ponyta",
        "Pokémon fr": "Ponyta",
        "Drops": "Leather 0-1, Blaze Powder 2.5%, Shuca Berry 2.5%"
    },
    {
        "No.": "0077",
        "Pokémon en": "Ponyta [Galarian]",
        "Pokémon fr": "Ponyta de Galar",
        "Drops": "Leather 0-1, Razz Berry 2.5%"
    },
    {
        "No.": "0078",
        "Pokémon en": "Rapidash",
        "Pokémon fr": "Galopa",
        "Drops": "Leather 0-2, Blaze Powder 5%, Shuca Berry 5%"
    },
    {
        "No.": "0078",
        "Pokémon en": "Rapidash [Galarian]",
        "Pokémon fr": "Galopa de Galar",
        "Drops": "Leather 0-2, Razz Berry 5%"
    },
    {
        "No.": "0079",
        "Pokémon en": "Slowpoke",
        "Pokémon fr": "Ramoloss",
        "Drops": "King's Rock 2.5%, Chesto Berry 2.5%"
    },
    {
        "No.": "0080",
        "Pokémon en": "Slowbro",
        "Pokémon fr": "Flagadoss",
        "Drops": "King's Rock 5%, Chesto Berry 5%"
    },
    {
        "No.": "0081",
        "Pokémon en": "Magnemite",
        "Pokémon fr": "Magnéti",
        "Drops": "Raw Iron 0-1, Magnet 2.5%, Metal Coat 2.5%, Shuca Berry 2.5%"
    },
    {
        "No.": "0082",
        "Pokémon en": "Magneton",
        "Pokémon fr": "Magnéton",
        "Drops": "Raw Iron 0-2, Magnet 5%, Metal Coat 5%, Shuca Berry 5%"
    },
    {
        "No.": "0083",
        "Pokémon en": "Farfetch'd",
        "Pokémon fr": "Canarticho",
        "Drops": "Feather 0-1, Raw Chicken 1, Medicinal Leek 0-1, Chilan Berry 5%"
    },
    {
        "No.": "0083",
        "Pokémon en": "Farfetch'd [Galarian]",
        "Pokémon fr": "Canarticho de Galar",
        "Drops": "Feather 0-1, Raw Chicken 1, Medicinal Leek 0-1, Coba Berry 2.5%"
    },
    {
        "No.": "0084",
        "Pokémon en": "Doduo",
        "Pokémon fr": "Doduo",
        "Drops": "Feather 0-1, Raw Chicken 1, Sharp Beak 2.5%, Wacan Berry 2.5%"
    },
    {
        "No.": "0085",
        "Pokémon en": "Dodrio",
        "Pokémon fr": "Dodrio",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 5%, Wacan Berry 5%"
    },
    {
        "No.": "0086",
        "Pokémon en": "Seel",
        "Pokémon fr": "Otaria",
        "Drops": "Raw Cod 0-1, Never-Melt Ice 2.5%, Aspear Berry 2.5%"
    },
    {
        "No.": "0087",
        "Pokémon en": "Dewgong",
        "Pokémon fr": "Lamantine",
        "Drops": "Raw Cod 0-2, Never-Melt Ice 5%, Aspear Berry 5%"
    },
    {
        "No.": "0088",
        "Pokémon en": "Grimer",
        "Pokémon fr": "Tadmorv",
        "Drops": "Slimeball 0-1, Black Sludge 2.5%, Toxic Orb 2.5%"
    },
    {
        "No.": "0089",
        "Pokémon en": "Muk",
        "Pokémon fr": "Grotadmorv",
        "Drops": "Slimeball 0-2, Black Sludge 5%, Toxic Orb 5%"
    },
    {
        "No.": "0090",
        "Pokémon en": "Shellder",
        "Pokémon fr": "Kokiyas",
        "Drops": "Aspear Berry 2.5%, Shell Bell 2.5%"
    },
    {
        "No.": "0091",
        "Pokémon en": "Cloyster",
        "Pokémon fr": "Crustabri",
        "Drops": "Aspear Berry 5%, Shell Bell 5%"
    },
    {
        "No.": "0092",
        "Pokémon en": "Gastly",
        "Pokémon fr": "Fantominus",
        "Drops": "Spell Tag 2.5%, Payapa Berry 2.5%"
    },
    {
        "No.": "0093",
        "Pokémon en": "Haunter",
        "Pokémon fr": "Spectrum",
        "Drops": "Spell Tag 5%, Payapa Berry 5%"
    },
    {
        "No.": "0094",
        "Pokémon en": "Gengar",
        "Pokémon fr": "Ectoplasma",
        "Drops": "Spell Tag 10%, Payapa Berry 10%"
    },
    {
        "No.": "0095",
        "Pokémon en": "Onix",
        "Pokémon fr": "Onix",
        "Drops": "Stone 1-3, Hard Stone 2.5%, Passho Berry 2.5%"
    },
    {
        "No.": "0096",
        "Pokémon en": "Drowzee",
        "Pokémon fr": "Soporifik",
        "Drops": "Chesto Berry 2.5%"
    },
    {
        "No.": "0097",
        "Pokémon en": "Hypno",
        "Pokémon fr": "Hypnomade",
        "Drops": "Chesto Berry 5%"
    },
    {
        "No.": "0098",
        "Pokémon en": "Krabby",
        "Pokémon fr": "Krabby",
        "Drops": "King's Rock 2.5%, Pinap Berry 2.5%"
    },
    {
        "No.": "0099",
        "Pokémon en": "Kingler",
        "Pokémon fr": "Krabboss",
        "Drops": "King's Rock 5%, Pinap Berry 5%"
    },
    {
        "No.": "0100",
        "Pokémon en": "Voltorb",
        "Pokémon fr": "Voltorbe",
        "Drops": "Gunpowder 0-1"
    },
    {
        "No.": "0100",
        "Pokémon en": "Voltorb [Hisuian]",
        "Pokémon fr": "Voltorbe de Hisui",
        "Drops": "Gunpowder 0-1, Red Apricorn 0-1, Cheri Berry 2.5%"
    },
    {
        "No.": "0101",
        "Pokémon en": "Electrode",
        "Pokémon fr": "Électrode",
        "Drops": "Gunpowder 0-2"
    },
    {
        "No.": "0101",
        "Pokémon en": "Electrode [Hisuian]",
        "Pokémon fr": "Électrode de Hisui",
        "Drops": "Gunpowder 0-2, Red Apricorn 0-2, Cheri Berry 5%"
    },
    {
        "No.": "0102",
        "Pokémon en": "Exeggcute",
        "Pokémon fr": "Noeunoeuf",
        "Drops": "Egg 0-3, Oval Stone 2.5%, Tanga Berry 2.5%"
    },
    {
        "No.": "0103",
        "Pokémon en": "Exeggutor",
        "Pokémon fr": "Noadkoko",
        "Drops": "Egg 0-3, Oval Stone 5%, Tanga Berry 5%"
    },
    {
        "No.": "0103",
        "Pokémon en": "Exeggutor [Alolan]",
        "Pokémon fr": "Noadkoko d'Alola",
        "Drops": "Egg 0-3, Oval Stone 5%, Tanga Berry 5%"
    },
    {
        "No.": "0104",
        "Pokémon en": "Cubone",
        "Pokémon fr": "Osselait",
        "Drops": "Bone 0-1, Nanab Berry 2.5%"
    },
    {
        "No.": "0105",
        "Pokémon en": "Marowak",
        "Pokémon fr": "Ossatueur",
        "Drops": "Bone 1, Nanab Berry 5%"
    },
    {
        "No.": "0105",
        "Pokémon en": "Marowak [Alolan]",
        "Pokémon fr": "Ossatueur d'Alola",
        "Drops": "Bone 1"
    },
    {
        "No.": "0106",
        "Pokémon en": "Hitmonlee",
        "Pokémon fr": "Kicklee",
        "Drops": "Black Belt 5%, Payapa Berry 5%"
    },
    {
        "No.": "0107",
        "Pokémon en": "Hitmonchan",
        "Pokémon fr": "Tygnon",
        "Drops": "Black Belt 5%, Payapa Berry 5%"
    },
    {
        "No.": "0108",
        "Pokémon en": "Lickitung",
        "Pokémon fr": "Excelangue",
        "Drops": "Slimeball 0-1, Oran Berry 2.5%"
    },
    {
        "No.": "0109",
        "Pokémon en": "Koffing",
        "Pokémon fr": "Smogo",
        "Drops": "Black Sludge 2.5%, Smoke Ball 2.5%"
    },
    {
        "No.": "0110",
        "Pokémon en": "Weezing",
        "Pokémon fr": "Smogogo",
        "Drops": "Black Sludge 5%, Smoke Ball 5%"
    },
    {
        "No.": "0111",
        "Pokémon en": "Rhyhorn",
        "Pokémon fr": "Rhinocorne",
        "Drops": "Protector 2.5%, Passho Berry 2.5%"
    },
    {
        "No.": "0112",
        "Pokémon en": "Rhydon",
        "Pokémon fr": "Rhinoféros",
        "Drops": "Protector 5%, Passho Berry 5%"
    },
    {
        "No.": "0113",
        "Pokémon en": "Chansey",
        "Pokémon fr": "Leveinard",
        "Drops": "Lucky Egg 10% OR Oval Stone 10% OR Egg 50%"
    },
    {
        "No.": "0114",
        "Pokémon en": "Tangela",
        "Pokémon fr": "Saquedeneu",
        "Drops": "Vine 0-1, Big Root 2.5%"
    },
    {
        "No.": "0115",
        "Pokémon en": "Kangaskhan",
        "Pokémon fr": "Kangourex",
        "Drops": "Chilan Berry 5%"
    },
    {
        "No.": "0116",
        "Pokémon en": "Horsea",
        "Pokémon fr": "Hypotrempe",
        "Drops": "Prismarine Shard 0-1, Dragon Scale 2.5%"
    },
    {
        "No.": "0117",
        "Pokémon en": "Seadra",
        "Pokémon fr": "Hypocéan",
        "Drops": "Prismarine Shard 0-2, Dragon Scale 5%"
    },
    {
        "No.": "0118",
        "Pokémon en": "Goldeen",
        "Pokémon fr": "Poissirène",
        "Drops": "Raw Salmon 1, Bone Meal 5%, Mystic Water 2.5%, Wacan Berry 2.5%"
    },
    {
        "No.": "0119",
        "Pokémon en": "Seaking",
        "Pokémon fr": "Poissoroy",
        "Drops": "Raw Salmon 1, Bone Meal 10%, Mystic Water 5%, Wacan Berry 5%"
    },
    {
        "No.": "0120",
        "Pokémon en": "Staryu",
        "Pokémon fr": "Stari",
        "Drops": ""
    },
    {
        "No.": "0121",
        "Pokémon en": "Starmie",
        "Pokémon fr": "Staross",
        "Drops": ""
    },
    {
        "No.": "0122",
        "Pokémon en": "Mr. Mime",
        "Pokémon fr": "M. Mime",
        "Drops": "Light Clay 5%, Babiri Berry 5%"
    },
    {
        "No.": "0123",
        "Pokémon en": "Scyther",
        "Pokémon fr": "Insécateur",
        "Drops": "Wepear Berry 2.5%"
    },
    {
        "No.": "0124",
        "Pokémon en": "Jynx",
        "Pokémon fr": "Lippoutou",
        "Drops": "Aspear Berry 5%"
    },
    {
        "No.": "0125",
        "Pokémon en": "Electabuzz",
        "Pokémon fr": "Élektek",
        "Drops": "Redstone 0-2, Electirizer 5%, Cheri Berry 5%"
    },
    {
        "No.": "0126",
        "Pokémon en": "Magmar",
        "Pokémon fr": "Magmar",
        "Drops": "Blaze Powder 5%, Magmarizer 5%, Rawst Berry 5%"
    },
    {
        "No.": "0127",
        "Pokémon en": "Pinsir",
        "Pokémon fr": "Scarabrute",
        "Drops": "Pinap Berry 5%"
    },
    {
        "No.": "0128",
        "Pokémon en": "Tauros",
        "Pokémon fr": "Tauros",
        "Drops": "Leather 0-2, Raw Beef 1-3"
    },
    {
        "No.": "0129",
        "Pokémon en": "Magikarp",
        "Pokémon fr": "Magicarpe",
        "Drops": "Raw Salmon 1, Bone Meal 5%, Wacan Berry 2.5%"
    },
    {
        "No.": "0130",
        "Pokémon en": "Gyarados",
        "Pokémon fr": "Léviator",
        "Drops": "Raw Salmon 1, Bone Meal 10%, Wacan Berry 5%"
    },
    {
        "No.": "0131",
        "Pokémon en": "Lapras",
        "Pokémon fr": "Lokhlass",
        "Drops": "Mystic Water 5%, Never-Melt Ice 5%, Heart of the Sea 5%, Aspear Berry 5%"
    },
    {
        "No.": "0132",
        "Pokémon en": "Ditto",
        "Pokémon fr": "Métamorph",
        "Drops": "Quick Powder 0-1, Metal Powder 5%"
    },
    {
        "No.": "0133",
        "Pokémon en": "Eevee",
        "Pokémon fr": "Évoli",
        "Drops": "Silk Scarf 5%, Eviolite 5%"
    },
    {
        "No.": "0134",
        "Pokémon en": "Vaporeon",
        "Pokémon fr": "Aquali",
        "Drops": "Water Stone 25%, Mystic Water 10%"
    },
    {
        "No.": "0135",
        "Pokémon en": "Jolteon",
        "Pokémon fr": "Voltali",
        "Drops": "Thunder Stone 25%, Magnet 10%"
    },
    {
        "No.": "0136",
        "Pokémon en": "Flareon",
        "Pokémon fr": "Pyroli",
        "Drops": "Fire Stone 25%, Charcoal Stick 10%"
    },
    {
        "No.": "0137",
        "Pokémon en": "Porygon",
        "Pokémon fr": "Porygon",
        "Drops": ""
    },
    {
        "No.": "0138",
        "Pokémon en": "Omanyte",
        "Pokémon fr": "Amonita",
        "Drops": "Nautilus Shell 1, Bone Meal 5%"
    },
    {
        "No.": "0139",
        "Pokémon en": "Omastar",
        "Pokémon fr": "Amonistar",
        "Drops": "Nautilus Shell 1, Bone Meal 10%"
    },
    {
        "No.": "0140",
        "Pokémon en": "Kabuto",
        "Pokémon fr": "Kabuto",
        "Drops": "Razor Claw 5%, Bone Meal 5%"
    },
    {
        "No.": "0141",
        "Pokémon en": "Kabutops",
        "Pokémon fr": "Kabutops",
        "Drops": "Razor Claw 10%, Bone Meal 10%"
    },
    {
        "No.": "0142",
        "Pokémon en": "Aerodactyl",
        "Pokémon fr": "Ptéra",
        "Drops": "Bone 0-3, Rocky Helmet 10%"
    },
    {
        "No.": "0143",
        "Pokémon en": "Snorlax",
        "Pokémon fr": "Ronflex",
        "Drops": "Apple 0-3, Apple 0-3, Chesto Berry 5%, Leftovers 5%"
    },
    {
        "No.": "0147",
        "Pokémon en": "Dratini",
        "Pokémon fr": "Minidraco",
        "Drops": "Dragon's Breath 0-1, Dragon Fang 2.5%, Dragon Scale 2.5%, Yache Berry 2.5%"
    },
    {
        "No.": "0148",
        "Pokémon en": "Dragonair",
        "Pokémon fr": "Draco",
        "Drops": "Dragon's Breath 0-2, Dragon Fang 5%, Dragon Scale 5%, Yache Berry 5%"
    },
    {
        "No.": "0149",
        "Pokémon en": "Dragonite",
        "Pokémon fr": "Dracolosse",
        "Drops": "Dragon's Breath 0-3, Dragon Fang 10%, Dragon Scale 10%, Yache Berry 10%"
    },
    {
        "No.": "0152",
        "Pokémon en": "Chikorita",
        "Pokémon fr": "Germignon",
        "Drops": "Miracle Seed 5%"
    },
    {
        "No.": "0153",
        "Pokémon en": "Bayleef",
        "Pokémon fr": "Macronium",
        "Drops": "Miracle Seed 10%"
    },
    {
        "No.": "0154",
        "Pokémon en": "Meganium",
        "Pokémon fr": "Méganium",
        "Drops": "Miracle Seed 25%"
    },
    {
        "No.": "0155",
        "Pokémon en": "Cyndaquil",
        "Pokémon fr": "Héricendre",
        "Drops": "Charcoal Stick 5%"
    },
    {
        "No.": "0156",
        "Pokémon en": "Quilava",
        "Pokémon fr": "Feurisson",
        "Drops": "Charcoal Stick 10%"
    },
    {
        "No.": "0157",
        "Pokémon en": "Typhlosion",
        "Pokémon fr": "Typhlosion",
        "Drops": "Charcoal Stick 25%"
    },
    {
        "No.": "0157",
        "Pokémon en": "Typhlosion [Hisuian]",
        "Pokémon fr": "Typhlosion de Hisui",
        "Drops": "Charcoal Stick 25%"
    },
    {
        "No.": "0158",
        "Pokémon en": "Totodile",
        "Pokémon fr": "Kaiminus",
        "Drops": "Mystic Water 5%"
    },
    {
        "No.": "0159",
        "Pokémon en": "Croconaw",
        "Pokémon fr": "Crocrodil",
        "Drops": "Mystic Water 10%"
    },
    {
        "No.": "0160",
        "Pokémon en": "Feraligatr",
        "Pokémon fr": "Aligatueur",
        "Drops": "Mystic Water 25%"
    },
    {
        "No.": "0161",
        "Pokémon en": "Sentret",
        "Pokémon fr": "Fouinette",
        "Drops": "Silk Scarf 2.5%, Oran Berry 2.5%"
    },
    {
        "No.": "0162",
        "Pokémon en": "Furret",
        "Pokémon fr": "Fouinar",
        "Drops": "Silk Scarf 5%, Oran Berry 5%"
    },
    {
        "No.": "0163",
        "Pokémon en": "Hoothoot",
        "Pokémon fr": "Hoothoot",
        "Drops": "Feather 0-1, Raw Chicken 1, Wise Glasses 2.5%, Chilan Berry 2.5%"
    },
    {
        "No.": "0164",
        "Pokémon en": "Noctowl",
        "Pokémon fr": "Noarfang",
        "Drops": "Feather 0-2, Raw Chicken 1, Wise Glasses 5%, Chilan Berry 5%"
    },
    {
        "No.": "0165",
        "Pokémon en": "Ledyba",
        "Pokémon fr": "Coxy",
        "Drops": "Charti Berry 2.5%"
    },
    {
        "No.": "0166",
        "Pokémon en": "Ledian",
        "Pokémon fr": "Coxyclaque",
        "Drops": "Charti Berry 5%"
    },
    {
        "No.": "0167",
        "Pokémon en": "Spinarak",
        "Pokémon fr": "Mimigal",
        "Drops": "String 0-1, Spider Eye 0-1, Rotten Flesh 0-1, Poison Barb 2.5%"
    },
    {
        "No.": "0168",
        "Pokémon en": "Ariados",
        "Pokémon fr": "Migalos",
        "Drops": "String 0-2, Spider Eye 0-2, Rotten Flesh 0-2, Poison Barb 5%"
    },
    {
        "No.": "0169",
        "Pokémon en": "Crobat",
        "Pokémon fr": "Nostenfer",
        "Drops": "Phantom Membrane 10%, Razor Fang 10%, Persim Berry 10%"
    },
    {
        "No.": "0170",
        "Pokémon en": "Chinchou",
        "Pokémon fr": "Loupio",
        "Drops": "Prismarine Crystal 0-1, Deep Sea Scale 2.5%, Persim Berry 2.5%"
    },
    {
        "No.": "0171",
        "Pokémon en": "Lanturn",
        "Pokémon fr": "Lanturn",
        "Drops": "Prismarine Crystal 0-2, Deep Sea Scale 5%, Persim Berry 5%"
    },
    {
        "No.": "0172",
        "Pokémon en": "Pichu",
        "Pokémon fr": "Pichu",
        "Drops": "Light Ball 2.5%, Thunder Stone 2.5%, Oran Berry 2.5%"
    },
    {
        "No.": "0173",
        "Pokémon en": "Cleffa",
        "Pokémon fr": "Mélo",
        "Drops": "Moon Stone 2.5%, Babiri Berry 2.5%, Fairy Feather 2.5%"
    },
    {
        "No.": "0174",
        "Pokémon en": "Igglybuff",
        "Pokémon fr": "Toudoudou",
        "Drops": "Moon Stone 2.5%, Air Balloon 2.5%, Oran Berry 2.5%"
    },
    {
        "No.": "0177",
        "Pokémon en": "Natu",
        "Pokémon fr": "Natu",
        "Drops": "Feather 0-1, Raw Chicken 1, Wise Glasses 2.5%, Persim Berry 2.5%"
    },
    {
        "No.": "0178",
        "Pokémon en": "Xatu",
        "Pokémon fr": "Xatu",
        "Drops": "Feather 0-2, Raw Chicken 1, Wise Glasses 5%, Persim Berry 5%"
    },
    {
        "No.": "0179",
        "Pokémon en": "Mareep",
        "Pokémon fr": "Wattouat",
        "Drops": "Raw Mutton 1-2, White Wool 1-2, Cheri Berry 2.5%"
    },
    {
        "No.": "0180",
        "Pokémon en": "Flaaffy",
        "Pokémon fr": "Lainergie",
        "Drops": "Raw Mutton 1-3, White Wool 1, Cheri Berry 5%"
    },
    {
        "No.": "0181",
        "Pokémon en": "Ampharos",
        "Pokémon fr": "Pharamp",
        "Drops": "Raw Mutton 2-4, Cheri Berry 10%"
    },
    {
        "No.": "0182",
        "Pokémon en": "Bellossom",
        "Pokémon fr": "Joliflor",
        "Drops": "Absorb Bulb 10%, Pecha Berry 10%"
    },
    {
        "No.": "0185",
        "Pokémon en": "Sudowoodo",
        "Pokémon fr": "Simularbre",
        "Drops": "Hard Stone 5%, Passho Berry 5%"
    },
    {
        "No.": "0186",
        "Pokémon en": "Politoed",
        "Pokémon fr": "Tarpaud",
        "Drops": "Verdant Froglight 1, King's Rock 10%, Chesto Berry 10%"
    },
    {
        "No.": "0190",
        "Pokémon en": "Aipom",
        "Pokémon fr": "Capumain",
        "Drops": "Nanab Berry 2.5%"
    },
    {
        "No.": "0191",
        "Pokémon en": "Sunkern",
        "Pokémon fr": "Tournegrin",
        "Drops": "Wheat Seeds 1, Coba Berry 2.5%"
    },
    {
        "No.": "0192",
        "Pokémon en": "Sunflora",
        "Pokémon fr": "Héliatronc",
        "Drops": "Sunflower 1, Coba Berry 5%"
    },
    {
        "No.": "0193",
        "Pokémon en": "Yanma",
        "Pokémon fr": "Yanma",
        "Drops": "Charti Berry 2.5%"
    },
    {
        "No.": "0194",
        "Pokémon en": "Wooper",
        "Pokémon fr": "Axoloto",
        "Drops": "Clay Ball 0-1, Rindo Berry 2.5%"
    },
    {
        "No.": "0194",
        "Pokémon en": "Wooper [Paldean]",
        "Pokémon fr": "Axoloto de Paldea",
        "Drops": "Clay Ball 0-1, Pecha Berry 2.5%"
    },
    {
        "No.": "0195",
        "Pokémon en": "Quagsire",
        "Pokémon fr": "Maraiste",
        "Drops": "Clay Ball 0-2, Rindo Berry 5%"
    },
    {
        "No.": "0196",
        "Pokémon en": "Espeon",
        "Pokémon fr": "Mentali",
        "Drops": "Sun Stone 25%, Twisted Spoon 10%"
    },
    {
        "No.": "0197",
        "Pokémon en": "Umbreon",
        "Pokémon fr": "Noctali",
        "Drops": "Moon Stone 25%, Black Glasses 10%"
    },
    {
        "No.": "0198",
        "Pokémon en": "Murkrow",
        "Pokémon fr": "Cornèbre",
        "Drops": "Feather 0-1, Raw Chicken 1, Bluk Berry 2.5%"
    },
    {
        "No.": "0199",
        "Pokémon en": "Slowking",
        "Pokémon fr": "Roigada",
        "Drops": "King's Rock 10%, Chesto Berry 10%"
    },
    {
        "No.": "0200",
        "Pokémon en": "Misdreavus",
        "Pokémon fr": "Feuforêve",
        "Drops": "Phantom Membrane 2.5%, Spell Tag 2.5%, Kasib Berry 2.5%"
    },
    {
        "No.": "0202",
        "Pokémon en": "Wobbuffet",
        "Pokémon fr": "Qulbutoké",
        "Drops": "Colbur Berry 5%"
    },
    {
        "No.": "0203",
        "Pokémon en": "Girafarig",
        "Pokémon fr": "Girafarig",
        "Drops": "Leather 0-1, Razor Fang 2.5%, Persim Berry 2.5%"
    },
    {
        "No.": "0204",
        "Pokémon en": "Pineco",
        "Pokémon fr": "Pomdepik",
        "Drops": "String 0-1, Occa Berry 2.5%, Iron Ball 2.5%"
    },
    {
        "No.": "0205",
        "Pokémon en": "Forretress",
        "Pokémon fr": "Foretress",
        "Drops": "String 0-2, Occa Berry 5%, Iron Ball 5%"
    },
    {
        "No.": "0207",
        "Pokémon en": "Gligar",
        "Pokémon fr": "Scorplane",
        "Drops": "Phantom Membrane 2.5%, Razor Fang 2.5%, Poison Barb 2.5%, Yache Berry 2.5%"
    },
    {
        "No.": "0208",
        "Pokémon en": "Steelix",
        "Pokémon fr": "Steelix",
        "Drops": "Raw Iron 2-4, Metal Coat 5%, Passho Berry 5%"
    },
    {
        "No.": "0209",
        "Pokémon en": "Snubbull",
        "Pokémon fr": "Snubbull",
        "Drops": "Bone 0-1, Babiri Berry 2.5%"
    },
    {
        "No.": "0210",
        "Pokémon en": "Granbull",
        "Pokémon fr": "Granbull",
        "Drops": "Bone 0-2, Babiri Berry 5%"
    },
    {
        "No.": "0211",
        "Pokémon en": "Qwilfish",
        "Pokémon fr": "Qwilfish",
        "Drops": "Pufferfish 1, Prismarine Shard 0-1, Poison Barb 2.5%"
    },
    {
        "No.": "0211",
        "Pokémon en": "Qwilfish [Hisuian]",
        "Pokémon fr": "Qwilfish de Hisui",
        "Drops": "Pufferfish 1, Prismarine Shard 0-1, Poison Barb 2.5%"
    },
    {
        "No.": "0212",
        "Pokémon en": "Scizor",
        "Pokémon fr": "Cizayox",
        "Drops": "Wepear Berry 5%"
    },
    {
        "No.": "0213",
        "Pokémon en": "Shuckle",
        "Pokémon fr": "Caratroc",
        "Drops": "Berry Juice 1"
    },
    {
        "No.": "0214",
        "Pokémon en": "Heracross",
        "Pokémon fr": "Scarhino",
        "Drops": "Coba Berry 5%"
    },
    {
        "No.": "0215",
        "Pokémon en": "Sneasel",
        "Pokémon fr": "Farfuret",
        "Drops": "Razor Claw 2.5%, Quick Claw 2.5%, Chople Berry 2.5%"
    },
    {
        "No.": "0215",
        "Pokémon en": "Sneasel [Hisuian]",
        "Pokémon fr": "Farfuret de Hisui",
        "Drops": "Razor Claw 2.5%, Poison Barb 2.5%, Payapa Berry 2.5%"
    },
    {
        "No.": "0216",
        "Pokémon en": "Teddiursa",
        "Pokémon fr": "Teddiursa",
        "Drops": "Sweet Berries 1-3, Honey Bottle 2.5%, Peat Block 2.5%, Oran Berry 2.5%"
    },
    {
        "No.": "0217",
        "Pokémon en": "Ursaring",
        "Pokémon fr": "Ursaring",
        "Drops": "Sweet Berries 2-4, Honey Bottle 5%, Peat Block 5%, Oran Berry 5%"
    },
    {
        "No.": "0218",
        "Pokémon en": "Slugma",
        "Pokémon fr": "Limagma",
        "Drops": "Magma Cream 0-1, Passho Berry 2.5%"
    },
    {
        "No.": "0219",
        "Pokémon en": "Magcargo",
        "Pokémon fr": "Volcaropod",
        "Drops": "Magma Cream 0-2, Basalt 1, Passho Berry 5%"
    },
    {
        "No.": "0220",
        "Pokémon en": "Swinub",
        "Pokémon fr": "Marcacrin",
        "Drops": "Raw Porkchop 1, Brown Wool 1, Never-Melt Ice 2.5%, Aspear Berry 2.5%"
    },
    {
        "No.": "0221",
        "Pokémon en": "Piloswine",
        "Pokémon fr": "Cochignon",
        "Drops": "Raw Porkchop 1-2, Brown Wool 1-2, Never-Melt Ice 5%, Aspear Berry 5%"
    },
    {
        "No.": "0222",
        "Pokémon en": "Corsola",
        "Pokémon fr": "Corayon",
        "Drops": "Rindo Berry 5%"
    },
    {
        "No.": "0223",
        "Pokémon en": "Remoraid",
        "Pokémon fr": "Rémoraid",
        "Drops": "Raw Cod 1, Bone Meal 5%, Aspear Berry 2.5%"
    },
    {
        "No.": "0224",
        "Pokémon en": "Octillery",
        "Pokémon fr": "Octillery",
        "Drops": "Ink Sac 1-3, Aspear Berry 5%"
    },
    {
        "No.": "0225",
        "Pokémon en": "Delibird",
        "Pokémon fr": "Cadoizo",
        "Drops": "Feather 0-2, Raw Chicken 1, Charti Berry 5%"
    },
    {
        "No.": "0226",
        "Pokémon en": "Mantine",
        "Pokémon fr": "Démanta",
        "Drops": "Raw Cod 0-2, Wacan Berry 5%"
    },
    {
        "No.": "0227",
        "Pokémon en": "Skarmory",
        "Pokémon fr": "Airmure",
        "Drops": "Sharp Beak 5%, Metal Coat 5%, Pinap Berry 5%"
    },
    {
        "No.": "0230",
        "Pokémon en": "Kingdra",
        "Pokémon fr": "Hyporoi",
        "Drops": "Prismarine Shard 0-3, Dragon Scale 10%"
    },
    {
        "No.": "0231",
        "Pokémon en": "Phanpy",
        "Pokémon fr": "Phanpy",
        "Drops": "Clay Ball 0-1, Passho Berry 2.5%"
    },
    {
        "No.": "0232",
        "Pokémon en": "Donphan",
        "Pokémon fr": "Donphan",
        "Drops": "Clay Ball 0-2, Protector 5%, Passho Berry 5%"
    },
    {
        "No.": "0233",
        "Pokémon en": "Porygon2",
        "Pokémon fr": "Porygon2",
        "Drops": "Up-Grade 25%"
    },
    {
        "No.": "0234",
        "Pokémon en": "Stantler",
        "Pokémon fr": "Cerfrousse",
        "Drops": "Leather 0-1, Persim Berry 2.5%"
    },
    {
        "No.": "0235",
        "Pokémon en": "Smeargle",
        "Pokémon fr": "Queulorior",
        "Drops": ""
    },
    {
        "No.": "0236",
        "Pokémon en": "Tyrogue",
        "Pokémon fr": "Debugant",
        "Drops": "Black Belt 2.5%, Payapa Berry 2.5%"
    },
    {
        "No.": "0237",
        "Pokémon en": "Hitmontop",
        "Pokémon fr": "Kapoera",
        "Drops": "Black Belt 5%, Payapa Berry 5%"
    },
    {
        "No.": "0238",
        "Pokémon en": "Smoochum",
        "Pokémon fr": "Lippouti",
        "Drops": "Aspear Berry 2.5%"
    },
    {
        "No.": "0239",
        "Pokémon en": "Elekid",
        "Pokémon fr": "Élekid",
        "Drops": "Redstone 0-1, Electirizer 2.5%, Cheri Berry 2.5%"
    },
    {
        "No.": "0240",
        "Pokémon en": "Magby",
        "Pokémon fr": "Magby",
        "Drops": "Blaze Powder 2.5%, Magmarizer 2.5%, Rawst Berry 2.5%"
    },
    {
        "No.": "0241",
        "Pokémon en": "Miltank",
        "Pokémon fr": "Écrémeuh",
        "Drops": "Leather 0-2, Raw Beef 1-3, Oran Berry 5%"
    },
    {
        "No.": "0242",
        "Pokémon en": "Blissey",
        "Pokémon fr": "Leuphorie",
        "Drops": "Lucky Egg 25% OR Oval Stone 25% OR Egg 50%"
    },
    {
        "No.": "0246",
        "Pokémon en": "Larvitar",
        "Pokémon fr": "Embrylex",
        "Drops": "Hard Stone 2.5%, Chople Berry 2.5%"
    },
    {
        "No.": "0247",
        "Pokémon en": "Pupitar",
        "Pokémon fr": "Ymphect",
        "Drops": "Hard Stone 5%, Chople Berry 5%"
    },
    {
        "No.": "0248",
        "Pokémon en": "Tyranitar",
        "Pokémon fr": "Tyranocif",
        "Drops": "Hard Stone 10%, Chople Berry 10%"
    },
    {
        "No.": "0252",
        "Pokémon en": "Treecko",
        "Pokémon fr": "Arcko",
        "Drops": "Stick 0-1, Miracle Seed 5%"
    },
    {
        "No.": "0253",
        "Pokémon en": "Grovyle",
        "Pokémon fr": "Massko",
        "Drops": "Stick 0-2, Miracle Seed 10%"
    },
    {
        "No.": "0254",
        "Pokémon en": "Sceptile",
        "Pokémon fr": "Jungko",
        "Drops": "Stick 0-3, Miracle Seed 25%"
    },
    {
        "No.": "0255",
        "Pokémon en": "Torchic",
        "Pokémon fr": "Poussifeu",
        "Drops": "Feather 0-1, Raw Chicken 1, Charcoal Stick 5%"
    },
    {
        "No.": "0256",
        "Pokémon en": "Combusken",
        "Pokémon fr": "Galifeu",
        "Drops": "Feather 0-2, Raw Chicken 1, Charcoal Stick 10%"
    },
    {
        "No.": "0257",
        "Pokémon en": "Blaziken",
        "Pokémon fr": "Braségali",
        "Drops": "Feather 0-3, Raw Chicken 1, Charcoal Stick 25%"
    },
    {
        "No.": "0258",
        "Pokémon en": "Mudkip",
        "Pokémon fr": "Gobou",
        "Drops": "Clay Ball 0-1, Mystic Water 5%"
    },
    {
        "No.": "0259",
        "Pokémon en": "Marshtomp",
        "Pokémon fr": "Flobio",
        "Drops": "Clay Ball 0-2, Mystic Water 10%"
    },
    {
        "No.": "0260",
        "Pokémon en": "Swampert",
        "Pokémon fr": "Laggron",
        "Drops": "Clay Ball 0-3, Mystic Water 25%"
    },
    {
        "No.": "0261",
        "Pokémon en": "Poochyena",
        "Pokémon fr": "Medhyèna",
        "Drops": "Bone 0-1, Rotten Flesh 0-1, Pecha Berry 2.5%"
    },
    {
        "No.": "0262",
        "Pokémon en": "Mightyena",
        "Pokémon fr": "Grahyèna",
        "Drops": "Bone 0-2, Rotten Flesh 0-2, Pecha Berry 5%"
    },
    {
        "No.": "0263",
        "Pokémon en": "Zigzagoon",
        "Pokémon fr": "Zigzaton",
        "Drops": "Oran Berry 2.5%"
    },
    {
        "No.": "0263",
        "Pokémon en": "Zigzagoon [Galarian]",
        "Pokémon fr": "Zigzaton de Galar",
        "Drops": "Chople Berry 2.5%"
    },
    {
        "No.": "0264",
        "Pokémon en": "Linoone",
        "Pokémon fr": "Linéon",
        "Drops": "Oran Berry 5%"
    },
    {
        "No.": "0264",
        "Pokémon en": "Linoone [Galarian]",
        "Pokémon fr": "Linéon de Galar",
        "Drops": "Chople Berry 5%"
    },
    {
        "No.": "0270",
        "Pokémon en": "Lotad",
        "Pokémon fr": "Nénupiot",
        "Drops": "Lily Pad 0-1, Mental Herb 2.5%, Kebia Berry 2.5%"
    },
    {
        "No.": "0271",
        "Pokémon en": "Lombre",
        "Pokémon fr": "Lombre",
        "Drops": "Lily Pad 0-2, Mental Herb 5%, Kebia Berry 5%"
    },
    {
        "No.": "0272",
        "Pokémon en": "Ludicolo",
        "Pokémon fr": "Ludicolo",
        "Drops": "Lily Pad 0-3, Mental Herb 10%, Kebia Berry 10%"
    },
    {
        "No.": "0273",
        "Pokémon en": "Seedot",
        "Pokémon fr": "Grainipiot",
        "Drops": "Dark Oak Sapling 0-1, Tanga Berry 2.5%"
    },
    {
        "No.": "0274",
        "Pokémon en": "Nuzleaf",
        "Pokémon fr": "Pifeuil",
        "Drops": "Dark Oak Sapling 0-2, Tanga Berry 5%"
    },
    {
        "No.": "0275",
        "Pokémon en": "Shiftry",
        "Pokémon fr": "Tengalice",
        "Drops": "Dark Oak Sapling 0-3, Tanga Berry 10%"
    },
    {
        "No.": "0276",
        "Pokémon en": "Taillow",
        "Pokémon fr": "Nirondelle",
        "Drops": "Feather 0-1, Raw Chicken 1, Charti Berry 2.5%"
    },
    {
        "No.": "0277",
        "Pokémon en": "Swellow",
        "Pokémon fr": "Hélédelle",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Charti Berry 5%"
    },
    {
        "No.": "0278",
        "Pokémon en": "Wingull",
        "Pokémon fr": "Goélise",
        "Drops": "Feather 0-1, Raw Chicken 1, Wacan Berry 2.5%"
    },
    {
        "No.": "0279",
        "Pokémon en": "Pelipper",
        "Pokémon fr": "Bekipan",
        "Drops": "Feather 0-2, Raw Chicken 1, Wacan Berry 5%"
    },
    {
        "No.": "0280",
        "Pokémon en": "Ralts",
        "Pokémon fr": "Tarsal",
        "Drops": "Ender Pearl 0-1, Dawn Stone 2.5%, Twisted Spoon 2.5%, Kasib Berry 2.5%"
    },
    {
        "No.": "0281",
        "Pokémon en": "Kirlia",
        "Pokémon fr": "Kirlia",
        "Drops": "Ender Pearl 0-2, Dawn Stone 5%, Twisted Spoon 5%, Kasib Berry 5%"
    },
    {
        "No.": "0282",
        "Pokémon en": "Gardevoir",
        "Pokémon fr": "Gardevoir",
        "Drops": "Ender Pearl 0-3, Dawn Stone 10%, Twisted Spoon 10%, Kasib Berry 10%"
    },
    {
        "No.": "0283",
        "Pokémon en": "Surskit",
        "Pokémon fr": "Arakdo",
        "Drops": "Honey Bottle 2.5%, Wacan Berry 2.5%"
    },
    {
        "No.": "0284",
        "Pokémon en": "Masquerain",
        "Pokémon fr": "Maskadra",
        "Drops": "Honey Bottle 2.5%, Silver Powder 5%, Wacan Berry 5%"
    },
    {
        "No.": "0285",
        "Pokémon en": "Shroomish",
        "Pokémon fr": "Balignon",
        "Drops": "Brown Mushroom 0-1, Kebia Berry 2.5%"
    },
    {
        "No.": "0286",
        "Pokémon en": "Breloom",
        "Pokémon fr": "Chapignon",
        "Drops": "Brown Mushroom 0-2, Kebia Berry 5%"
    },
    {
        "No.": "0287",
        "Pokémon en": "Slakoth",
        "Pokémon fr": "Parecool",
        "Drops": "Chesto Berry 2.5%"
    },
    {
        "No.": "0288",
        "Pokémon en": "Vigoroth",
        "Pokémon fr": "Vigoroth",
        "Drops": "Chesto Berry 5%"
    },
    {
        "No.": "0289",
        "Pokémon en": "Slaking",
        "Pokémon fr": "Monaflèmit",
        "Drops": "Chesto Berry 10%"
    },
    {
        "No.": "0290",
        "Pokémon en": "Nincada",
        "Pokémon fr": "Ningale",
        "Drops": "Soft Sand 2.5%"
    },
    {
        "No.": "0291",
        "Pokémon en": "Ninjask",
        "Pokémon fr": "Ninjask",
        "Drops": ""
    },
    {
        "No.": "0292",
        "Pokémon en": "Shedinja",
        "Pokémon fr": "Munja",
        "Drops": ""
    },
    {
        "No.": "0293",
        "Pokémon en": "Whismur",
        "Pokémon fr": "Chuchmur",
        "Drops": "Chesto Berry 2.5%"
    },
    {
        "No.": "0294",
        "Pokémon en": "Loudred",
        "Pokémon fr": "Ramboum",
        "Drops": "Chesto Berry 5%"
    },
    {
        "No.": "0295",
        "Pokémon en": "Exploud",
        "Pokémon fr": "Brouhabam",
        "Drops": "Chesto Berry 10%"
    },
    {
        "No.": "0296",
        "Pokémon en": "Makuhita",
        "Pokémon fr": "Makuhita",
        "Drops": "Black Belt 2.5%, King's Rock 2.5%, Payapa Berry 2.5%"
    },
    {
        "No.": "0297",
        "Pokémon en": "Hariyama",
        "Pokémon fr": "Hariyama",
        "Drops": "Black Belt 5%, King's Rock 5%, Payapa Berry 5%"
    },
    {
        "No.": "0299",
        "Pokémon en": "Nosepass",
        "Pokémon fr": "Tarinor",
        "Drops": "Flint 0-1, Hard Stone 2.5%, Magnet 2.5%, Chople Berry 2.5%"
    },
    {
        "No.": "0302",
        "Pokémon en": "Sableye",
        "Pokémon fr": "Ténéfix",
        "Drops": "Amethyst Shard 0-2, Diamond 5%, Emerald 5%, Roseli Berry 5%"
    },
    {
        "No.": "0303",
        "Pokémon en": "Mawile",
        "Pokémon fr": "Mysdibule",
        "Drops": "Razor Fang 5%, Occa Berry 5%, Iron Ball 5%"
    },
    {
        "No.": "0304",
        "Pokémon en": "Aron",
        "Pokémon fr": "Galekid",
        "Drops": "Raw Iron 0-1, Hard Stone 2.5%, Chople Berry 2.5%"
    },
    {
        "No.": "0305",
        "Pokémon en": "Lairon",
        "Pokémon fr": "Galegon",
        "Drops": "Raw Iron 0-2, Hard Stone 5%, Chople Berry 5%"
    },
    {
        "No.": "0306",
        "Pokémon en": "Aggron",
        "Pokémon fr": "Galeking",
        "Drops": "Raw Iron 0-3, Hard Stone 10%, Chople Berry 10%"
    },
    {
        "No.": "0311",
        "Pokémon en": "Plusle",
        "Pokémon fr": "Posipi",
        "Drops": "Magnet 5%, Cell Battery 5%, Cheri Berry 5%"
    },
    {
        "No.": "0312",
        "Pokémon en": "Minun",
        "Pokémon fr": "Négapi",
        "Drops": "Magnet 5%, Cell Battery 5%, Cheri Berry 5%"
    },
    {
        "No.": "0313",
        "Pokémon en": "Volbeat",
        "Pokémon fr": "Muciole",
        "Drops": "Bright Powder 5%, Razz Berry 5%"
    },
    {
        "No.": "0314",
        "Pokémon en": "Illumise",
        "Pokémon fr": "Lumivole",
        "Drops": "Bright Powder 5%, Bluk Berry 5%"
    },
    {
        "No.": "0315",
        "Pokémon en": "Roselia",
        "Pokémon fr": "Rosélia",
        "Drops": "Rose 0-1, Poison Barb 5%, Absorb Bulb 5%, Pecha Berry 5%"
    },
    {
        "No.": "0318",
        "Pokémon en": "Carvanha",
        "Pokémon fr": "Carvanha",
        "Drops": "Deep Sea Tooth 2.5%, Aspear Berry 2.5%"
    },
    {
        "No.": "0319",
        "Pokémon en": "Sharpedo",
        "Pokémon fr": "Sharpedo",
        "Drops": "Deep Sea Tooth 5%, Aspear Berry 5%"
    },
    {
        "No.": "0320",
        "Pokémon en": "Wailmer",
        "Pokémon fr": "Wailmer",
        "Drops": "Bone Block 0-1, Chesto Berry 2.5%"
    },
    {
        "No.": "0321",
        "Pokémon en": "Wailord",
        "Pokémon fr": "Wailord",
        "Drops": "Bone Block 0-2, Chesto Berry 5%"
    },
    {
        "No.": "0322",
        "Pokémon en": "Numel",
        "Pokémon fr": "Chamallot",
        "Drops": "Magma Cream 2.5%, Rawst Berry 2.5%"
    },
    {
        "No.": "0323",
        "Pokémon en": "Camerupt",
        "Pokémon fr": "Camérupt",
        "Drops": "Magma Cream 5%, Rawst Berry 5%"
    },
    {
        "No.": "0324",
        "Pokémon en": "Torkoal",
        "Pokémon fr": "Chartor",
        "Drops": "Coal 0-2, Charcoal Stick 5%, Smoke Ball 5%, Charti Berry 5%"
    },
    {
        "No.": "0327",
        "Pokémon en": "Spinda",
        "Pokémon fr": "Spinda",
        "Drops": "Bamboo 0-2, Chesto Berry 5%"
    },
    {
        "No.": "0328",
        "Pokémon en": "Trapinch",
        "Pokémon fr": "Kraknoix",
        "Drops": "Soft Sand 2.5%, Yache Berry 2.5%"
    },
    {
        "No.": "0329",
        "Pokémon en": "Vibrava",
        "Pokémon fr": "Vibraninf",
        "Drops": "Soft Sand 5%, Yache Berry 5%"
    },
    {
        "No.": "0330",
        "Pokémon en": "Flygon",
        "Pokémon fr": "Libégon",
        "Drops": "Soft Sand 10%, Yache Berry 10%"
    },
    {
        "No.": "0331",
        "Pokémon en": "Cacnea",
        "Pokémon fr": "Cacnea",
        "Drops": "Cactus 0-1, Poison Barb 2.5%, Tanga Berry 2.5%, Sticky Barb 2.5%"
    },
    {
        "No.": "0332",
        "Pokémon en": "Cacturne",
        "Pokémon fr": "Cacturne",
        "Drops": "Cactus 0-2, Poison Barb 5%, Tanga Berry 5%, Sticky Barb 5%"
    },
    {
        "No.": "0337",
        "Pokémon en": "Lunatone",
        "Pokémon fr": "Séléroc",
        "Drops": "Moon Stone 5%, Colbur Berry 5%"
    },
    {
        "No.": "0338",
        "Pokémon en": "Solrock",
        "Pokémon fr": "Solaroc",
        "Drops": "Sun Stone 5%, Colbur Berry 5%"
    },
    {
        "No.": "0339",
        "Pokémon en": "Barboach",
        "Pokémon fr": "Barloche",
        "Drops": "Clay Ball 0-1, Rindo Berry 2.5%"
    },
    {
        "No.": "0340",
        "Pokémon en": "Whiscash",
        "Pokémon fr": "Barbicha",
        "Drops": "Clay Ball 0-2, Rindo Berry 5%"
    },
    {
        "No.": "0341",
        "Pokémon en": "Corphish",
        "Pokémon fr": "Écrapince",
        "Drops": ""
    },
    {
        "No.": "0342",
        "Pokémon en": "Crawdaunt",
        "Pokémon fr": "Colhomard",
        "Drops": ""
    },
    {
        "No.": "0343",
        "Pokémon en": "Baltoy",
        "Pokémon fr": "Balbuto",
        "Drops": "Clay Ball 0-1, Light Clay 2.5%, Colbur Berry 2.5%"
    },
    {
        "No.": "0344",
        "Pokémon en": "Claydol",
        "Pokémon fr": "Kaorine",
        "Drops": "Clay Ball 0-2, Light Clay 5%, Colbur Berry 5%"
    },
    {
        "No.": "0345",
        "Pokémon en": "Lileep",
        "Pokémon fr": "Lilia",
        "Drops": "Big Root 5%"
    },
    {
        "No.": "0346",
        "Pokémon en": "Cradily",
        "Pokémon fr": "Vacilys",
        "Drops": "Big Root 10%"
    },
    {
        "No.": "0347",
        "Pokémon en": "Anorith",
        "Pokémon fr": "Anorith",
        "Drops": "Quick Claw 5%"
    },
    {
        "No.": "0348",
        "Pokémon en": "Armaldo",
        "Pokémon fr": "Armaldo",
        "Drops": "Quick Claw 10%"
    },
    {
        "No.": "0349",
        "Pokémon en": "Feebas",
        "Pokémon fr": "Barpau",
        "Drops": "Raw Salmon 1, Bone Meal 5%, Prism Scale 2.5%"
    },
    {
        "No.": "0350",
        "Pokémon en": "Milotic",
        "Pokémon fr": "Milobellus",
        "Drops": "Bone Meal 10%, Prism Scale 5%"
    },
    {
        "No.": "0352",
        "Pokémon en": "Kecleon",
        "Pokémon fr": "Kecleon",
        "Drops": "Persim Berry 5%"
    },
    {
        "No.": "0355",
        "Pokémon en": "Duskull",
        "Pokémon fr": "Skelénox",
        "Drops": "Phantom Membrane 2.5%, Reaper Cloth 2.5%, Kasib Berry 2.5%"
    },
    {
        "No.": "0356",
        "Pokémon en": "Dusclops",
        "Pokémon fr": "Téraclope",
        "Drops": "Phantom Membrane 5%, Reaper Cloth 5%, Kasib Berry 5%"
    },
    {
        "No.": "0357",
        "Pokémon en": "Tropius",
        "Pokémon fr": "Tropius",
        "Drops": "Nanab Berry 0-2"
    },
    {
        "No.": "0358",
        "Pokémon en": "Chimecho",
        "Pokémon fr": "Éoko",
        "Drops": "Colbur Berry 5%, Cleanse Tag 5%, Soothe Bell 5%"
    },
    {
        "No.": "0359",
        "Pokémon en": "Absol",
        "Pokémon fr": "Absol",
        "Drops": "Razor Claw 5%, Life Orb 5%, Roseli Berry 5%"
    },
    {
        "No.": "0360",
        "Pokémon en": "Wynaut",
        "Pokémon fr": "Okéoké",
        "Drops": "Colbur Berry 2.5%"
    },
    {
        "No.": "0363",
        "Pokémon en": "Spheal",
        "Pokémon fr": "Obalie",
        "Drops": "Raw Cod 0-1, Chesto Berry 2.5%"
    },
    {
        "No.": "0364",
        "Pokémon en": "Sealeo",
        "Pokémon fr": "Phogleur",
        "Drops": "Raw Cod 0-2, Chesto Berry 5%"
    },
    {
        "No.": "0365",
        "Pokémon en": "Walrein",
        "Pokémon fr": "Kaimorse",
        "Drops": "Raw Cod 0-3, Chesto Berry 10%"
    },
    {
        "No.": "0366",
        "Pokémon en": "Clamperl",
        "Pokémon fr": "Coquiperl",
        "Drops": "Shell Bell 2.5%"
    },
    {
        "No.": "0367",
        "Pokémon en": "Huntail",
        "Pokémon fr": "Serpang",
        "Drops": "Deep Sea Tooth 5%"
    },
    {
        "No.": "0368",
        "Pokémon en": "Gorebyss",
        "Pokémon fr": "Rosabyss",
        "Drops": "Deep Sea Scale 5%"
    },
    {
        "No.": "0369",
        "Pokémon en": "Relicanth",
        "Pokémon fr": "Relicanth",
        "Drops": "Deep Sea Scale 5%, Rindo Berry 5%"
    },
    {
        "No.": "0370",
        "Pokémon en": "Luvdisc",
        "Pokémon fr": "Lovdisc",
        "Drops": "Deep Sea Scale 2.5%"
    },
    {
        "No.": "0371",
        "Pokémon en": "Bagon",
        "Pokémon fr": "Draby",
        "Drops": "Dragon Fang 2.5%, Dragon Scale 2.5%, Yache Berry 2.5%"
    },
    {
        "No.": "0372",
        "Pokémon en": "Shelgon",
        "Pokémon fr": "Drackhaus",
        "Drops": "Dragon Fang 5%, Dragon Scale 5%, Yache Berry 5%"
    },
    {
        "No.": "0373",
        "Pokémon en": "Salamence",
        "Pokémon fr": "Drattak",
        "Drops": "Dragon Fang 10%, Dragon Scale 10%, Yache Berry 10%"
    },
    {
        "No.": "0374",
        "Pokémon en": "Beldum",
        "Pokémon fr": "Terhal",
        "Drops": "Ender Pearl 0-1, Metal Coat 2.5%"
    },
    {
        "No.": "0375",
        "Pokémon en": "Metang",
        "Pokémon fr": "Métang",
        "Drops": "Ender Pearl 0-2, Metal Coat 5%"
    },
    {
        "No.": "0376",
        "Pokémon en": "Metagross",
        "Pokémon fr": "Métalosse",
        "Drops": "Ender Pearl 0-3, Metal Coat 10%"
    },
    {
        "No.": "0387",
        "Pokémon en": "Turtwig",
        "Pokémon fr": "Tortipouss",
        "Drops": "Miracle Seed 5%"
    },
    {
        "No.": "0388",
        "Pokémon en": "Grotle",
        "Pokémon fr": "Boskara",
        "Drops": "Miracle Seed 10%"
    },
    {
        "No.": "0389",
        "Pokémon en": "Torterra",
        "Pokémon fr": "Torterra",
        "Drops": "Miracle Seed 25%"
    },
    {
        "No.": "0390",
        "Pokémon en": "Chimchar",
        "Pokémon fr": "Ouisticram",
        "Drops": "Charcoal Stick 5%"
    },
    {
        "No.": "0391",
        "Pokémon en": "Monferno",
        "Pokémon fr": "Chimpenfeu",
        "Drops": "Charcoal Stick 10%"
    },
    {
        "No.": "0392",
        "Pokémon en": "Infernape",
        "Pokémon fr": "Simiabraz",
        "Drops": "Charcoal Stick 25%"
    },
    {
        "No.": "0393",
        "Pokémon en": "Piplup",
        "Pokémon fr": "Tiplouf",
        "Drops": "Feather 0-1, Raw Chicken 1, Mystic Water 5%"
    },
    {
        "No.": "0394",
        "Pokémon en": "Prinplup",
        "Pokémon fr": "Prinplouf",
        "Drops": "Feather 0-2, Raw Chicken 1, Mystic Water 10%"
    },
    {
        "No.": "0395",
        "Pokémon en": "Empoleon",
        "Pokémon fr": "Pingoléon",
        "Drops": "Feather 0-3, Raw Chicken 1, Mystic Water 25%"
    },
    {
        "No.": "0396",
        "Pokémon en": "Starly",
        "Pokémon fr": "Étourmi",
        "Drops": "Feather 0-1, Raw Chicken 1, Yache Berry 2.5%"
    },
    {
        "No.": "0397",
        "Pokémon en": "Staravia",
        "Pokémon fr": "Étourvol",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Yache Berry 5%"
    },
    {
        "No.": "0398",
        "Pokémon en": "Staraptor",
        "Pokémon fr": "Étouraptor",
        "Drops": "Feather 0-3, Raw Chicken 1, Sharp Beak 5%, Yache Berry 10%"
    },
    {
        "No.": "0399",
        "Pokémon en": "Bidoof",
        "Pokémon fr": "Keunotor",
        "Drops": "Stick 0-1, Oran Berry 2.5%"
    },
    {
        "No.": "0400",
        "Pokémon en": "Bibarel",
        "Pokémon fr": "Castorno",
        "Drops": "Stick 0-2, Oran Berry 5%"
    },
    {
        "No.": "0401",
        "Pokémon en": "Kricketot",
        "Pokémon fr": "Crikzik",
        "Drops": "Coba Berry 2.5%"
    },
    {
        "No.": "0402",
        "Pokémon en": "Kricketune",
        "Pokémon fr": "Mélokrik",
        "Drops": "Coba Berry 5%"
    },
    {
        "No.": "0403",
        "Pokémon en": "Shinx",
        "Pokémon fr": "Lixy",
        "Drops": "Quick Claw 2.5%, Shuca Berry 2.5%"
    },
    {
        "No.": "0404",
        "Pokémon en": "Luxio",
        "Pokémon fr": "Luxio",
        "Drops": "Quick Claw 5%, Shuca Berry 5%"
    },
    {
        "No.": "0405",
        "Pokémon en": "Luxray",
        "Pokémon fr": "Luxray",
        "Drops": "Quick Claw 10%, Shuca Berry 10%"
    },
    {
        "No.": "0406",
        "Pokémon en": "Budew",
        "Pokémon fr": "Rozbouton",
        "Drops": "Poison Barb 2.5%, Absorb Bulb 2.5%, Pecha Berry 2.5%"
    },
    {
        "No.": "0407",
        "Pokémon en": "Roserade",
        "Pokémon fr": "Roserade",
        "Drops": "Rose 1-2, Poison Barb 10%, Absorb Bulb 10%, Pecha Berry 10%"
    },
    {
        "No.": "0408",
        "Pokémon en": "Cranidos",
        "Pokémon fr": "Kranidos",
        "Drops": "Bone 0-1"
    },
    {
        "No.": "0409",
        "Pokémon en": "Rampardos",
        "Pokémon fr": "Charkos",
        "Drops": "Bone 0-2"
    },
    {
        "No.": "0410",
        "Pokémon en": "Shieldon",
        "Pokémon fr": "Dinoclier",
        "Drops": "Bone 0-1"
    },
    {
        "No.": "0411",
        "Pokémon en": "Bastiodon",
        "Pokémon fr": "Bastiodon",
        "Drops": "Bone 0-2"
    },
    {
        "No.": "0415",
        "Pokémon en": "Combee",
        "Pokémon fr": "Apitrini",
        "Drops": "Honey Bottle 0-1, Honey Comb 2.5%, Poison Barb 2.5%, Charti Berry 2.5%"
    },
    {
        "No.": "0416",
        "Pokémon en": "Vespiquen",
        "Pokémon fr": "Apireine",
        "Drops": "Honey Bottle 0-3, Honey Comb 10%, Poison Barb 10%, Charti Berry 10%"
    },
    {
        "No.": "0417",
        "Pokémon en": "Pachirisu",
        "Pokémon fr": "Pachirisu",
        "Drops": "Cheri Berry 5%"
    },
    {
        "No.": "0418",
        "Pokémon en": "Buizel",
        "Pokémon fr": "Mustébouée",
        "Drops": "Raw Salmon 0-1, Wacan Berry 2.5%"
    },
    {
        "No.": "0419",
        "Pokémon en": "Floatzel",
        "Pokémon fr": "Mustéflott",
        "Drops": "Raw Salmon 0-2, Wacan Berry 5%"
    },
    {
        "No.": "0422",
        "Pokémon en": "Shellos",
        "Pokémon fr": "Sancoki",
        "Drops": "Clay Ball 0-1, Rindo Berry 2.5%"
    },
    {
        "No.": "0423",
        "Pokémon en": "Gastrodon",
        "Pokémon fr": "Tritosor",
        "Drops": "Clay Ball 0-2, Rindo Berry 5%"
    },
    {
        "No.": "0424",
        "Pokémon en": "Ambipom",
        "Pokémon fr": "Capidextre",
        "Drops": "Nanab Berry 5%"
    },
    {
        "No.": "0425",
        "Pokémon en": "Drifloon",
        "Pokémon fr": "Baudrive",
        "Drops": "Phantom Membrane 2.5%, Kasib Berry 2.5%, Air Balloon 2.5%"
    },
    {
        "No.": "0426",
        "Pokémon en": "Drifblim",
        "Pokémon fr": "Grodrive",
        "Drops": "Phantom Membrane 5%, Kasib Berry 5%, Air Balloon 5%"
    },
    {
        "No.": "0427",
        "Pokémon en": "Buneary",
        "Pokémon fr": "Laporeille",
        "Drops": "Raw Rabbit 1, Rabbit Hide 0-1, Rabbit's Foot 2.5%, Carrot 2.5%, Chople Berry 2.5%"
    },
    {
        "No.": "0428",
        "Pokémon en": "Lopunny",
        "Pokémon fr": "Lockpin",
        "Drops": "Raw Rabbit 1, Rabbit Hide 0-2, Rabbit's Foot 5%, Carrot 5%, Chople Berry 5%"
    },
    {
        "No.": "0429",
        "Pokémon en": "Mismagius",
        "Pokémon fr": "Magirêve",
        "Drops": "Phantom Membrane 5%, Spell Tag 5%, Kasib Berry 5%"
    },
    {
        "No.": "0430",
        "Pokémon en": "Honchkrow",
        "Pokémon fr": "Corboss",
        "Drops": "Feather 0-3, Raw Chicken 1, Bluk Berry 5%"
    },
    {
        "No.": "0433",
        "Pokémon en": "Chingling",
        "Pokémon fr": "Korillon",
        "Drops": "Colbur Berry 2.5%, Soothe Bell 2.5%, Cleanse Tag 2.5%"
    },
    {
        "No.": "0438",
        "Pokémon en": "Bonsly",
        "Pokémon fr": "Manzaï",
        "Drops": "Hard Stone 2.5%, Passho Berry 2.5%"
    },
    {
        "No.": "0439",
        "Pokémon en": "Mime Jr.",
        "Pokémon fr": "Mime Jr.",
        "Drops": "Light Clay 2.5%, Babiri Berry 2.5%"
    },
    {
        "No.": "0440",
        "Pokémon en": "Happiny",
        "Pokémon fr": "Ptiravi",
        "Drops": "Oval Stone 25%"
    },
    {
        "No.": "0441",
        "Pokémon en": "Chatot",
        "Pokémon fr": "Pijako",
        "Drops": "Feather 0-2, Raw Chicken 1, Persim Berry 5%"
    },
    {
        "No.": "0442",
        "Pokémon en": "Spiritomb",
        "Pokémon fr": "Spiritomb",
        "Drops": "Spell Tag 5%, Smoke Ball 5%"
    },
    {
        "No.": "0443",
        "Pokémon en": "Gible",
        "Pokémon fr": "Griknot",
        "Drops": "Dragon Fang 2.5%, Haban Berry 2.5%"
    },
    {
        "No.": "0444",
        "Pokémon en": "Gabite",
        "Pokémon fr": "Carmache",
        "Drops": "Dragon Fang 5%, Haban Berry 5%"
    },
    {
        "No.": "0445",
        "Pokémon en": "Garchomp",
        "Pokémon fr": "Carchacrok",
        "Drops": "Dragon Fang 10%, Haban Berry 10%"
    },
    {
        "No.": "0446",
        "Pokémon en": "Munchlax",
        "Pokémon fr": "Goinfrex",
        "Drops": "Apple 0-3, Leftovers 2.5%, Chesto Berry 2.5%"
    },
    {
        "No.": "0447",
        "Pokémon en": "Riolu",
        "Pokémon fr": "Riolu",
        "Drops": "Chople Berry 2.5%, Expert Belt 2.5%"
    },
    {
        "No.": "0448",
        "Pokémon en": "Lucario",
        "Pokémon fr": "Lucario",
        "Drops": "Chople Berry 5%, Expert Belt 5%"
    },
    {
        "No.": "0449",
        "Pokémon en": "Hippopotas",
        "Pokémon fr": "Hippopotas",
        "Drops": "Sand 0-1, Soft Sand 2.5%, Chesto Berry 2.5%"
    },
    {
        "No.": "0450",
        "Pokémon en": "Hippowdon",
        "Pokémon fr": "Hippodocus",
        "Drops": "Sand 0-2, Soft Sand 5%, Chesto Berry 5%"
    },
    {
        "No.": "0455",
        "Pokémon en": "Carnivine",
        "Pokémon fr": "Vortente",
        "Drops": "Miracle Seed 5%, Big Root 5%, Kebia Berry 5%"
    },
    {
        "No.": "0456",
        "Pokémon en": "Finneon",
        "Pokémon fr": "Écayon",
        "Drops": "Raw Cod 1, Bone Meal 5%, Rindo Berry 2.5%, Prism Scale 2.5%"
    },
    {
        "No.": "0457",
        "Pokémon en": "Lumineon",
        "Pokémon fr": "Luminéon",
        "Drops": "Raw Cod 1, Bone Meal 10%, Rindo Berry 5%, Prism Scale 5%"
    },
    {
        "No.": "0458",
        "Pokémon en": "Mantyke",
        "Pokémon fr": "Babimanta",
        "Drops": "Raw Cod 0-1, Wacan Berry 2.5%"
    },
    {
        "No.": "0461",
        "Pokémon en": "Weavile",
        "Pokémon fr": "Dimoret",
        "Drops": "Razor Claw 5%, Quick Claw 5%, Chople Berry 5%"
    },
    {
        "No.": "0462",
        "Pokémon en": "Magnezone",
        "Pokémon fr": "Magnézone",
        "Drops": "Raw Iron 0-3, Magnet 10%, Metal Coat 10%, Shuca Berry 10%"
    },
    {
        "No.": "0463",
        "Pokémon en": "Lickilicky",
        "Pokémon fr": "Coudlangue",
        "Drops": "Slimeball 0-2, Oran Berry 5%"
    },
    {
        "No.": "0464",
        "Pokémon en": "Rhyperior",
        "Pokémon fr": "Rhinastoc",
        "Drops": "Protector 10%, Passho Berry 10%"
    },
    {
        "No.": "0465",
        "Pokémon en": "Tangrowth",
        "Pokémon fr": "Bouldeneu",
        "Drops": "Vine 0-2, Big Root 5%"
    },
    {
        "No.": "0466",
        "Pokémon en": "Electivire",
        "Pokémon fr": "Élekable",
        "Drops": "Redstone 0-3, Electirizer 10%, Cheri Berry 10%"
    },
    {
        "No.": "0467",
        "Pokémon en": "Magmortar",
        "Pokémon fr": "Maganon",
        "Drops": "Blaze Powder 10%, Magmarizer 10%, Rawst Berry 10%"
    },
    {
        "No.": "0469",
        "Pokémon en": "Yanmega",
        "Pokémon fr": "Yanmega",
        "Drops": "Charti Berry 5%"
    },
    {
        "No.": "0470",
        "Pokémon en": "Leafeon",
        "Pokémon fr": "Phyllali",
        "Drops": "Leaf Stone 25%, Miracle Seed  10%"
    },
    {
        "No.": "0471",
        "Pokémon en": "Glaceon",
        "Pokémon fr": "Givrali",
        "Drops": "Ice Stone 25%, Never-Melt Ice 10%"
    },
    {
        "No.": "0472",
        "Pokémon en": "Gliscor",
        "Pokémon fr": "Scorvol",
        "Drops": "Phantom Membrane 5%, Razor Fang 5%, Poison Barb 5%, Yache Berry 5%"
    },
    {
        "No.": "0473",
        "Pokémon en": "Mamoswine",
        "Pokémon fr": "Mammochon",
        "Drops": "Raw Porkchop 2-3, Brown Wool 2-3, Never-Melt Ice 10%, Aspear Berry 10%"
    },
    {
        "No.": "0474",
        "Pokémon en": "Porygon-Z",
        "Pokémon fr": "Porygon-Z",
        "Drops": "Dubious Disc 25%"
    },
    {
        "No.": "0475",
        "Pokémon en": "Gallade",
        "Pokémon fr": "Gallame",
        "Drops": "Ender Pearl 0-3, Dawn Stone 10%, Twisted Spoon 10%, Kasib Berry 10%"
    },
    {
        "No.": "0476",
        "Pokémon en": "Probopass",
        "Pokémon fr": "Tarinorme",
        "Drops": "Flint 0-3, Hard Stone 5%, Magnet 5%, Chople Berry 5%"
    },
    {
        "No.": "0477",
        "Pokémon en": "Dusknoir",
        "Pokémon fr": "Noctunoir",
        "Drops": "Phantom Membrane 10%, Reaper Cloth 10%, Kasib Berry 10%"
    },
    {
        "No.": "0495",
        "Pokémon en": "Snivy",
        "Pokémon fr": "Vipélierre",
        "Drops": "Miracle Seed 5%"
    },
    {
        "No.": "0496",
        "Pokémon en": "Servine",
        "Pokémon fr": "Lianaja",
        "Drops": "Miracle Seed 10%"
    },
    {
        "No.": "0497",
        "Pokémon en": "Serperior",
        "Pokémon fr": "Majaspic",
        "Drops": "Miracle Seed 25%"
    },
    {
        "No.": "0498",
        "Pokémon en": "Tepig",
        "Pokémon fr": "Gruikui",
        "Drops": "Raw Porkchop 1-2, Charcoal Stick 5%"
    },
    {
        "No.": "0499",
        "Pokémon en": "Pignite",
        "Pokémon fr": "Grotichon",
        "Drops": "Raw Porkchop 1-3, Charcoal Stick 10%"
    },
    {
        "No.": "0500",
        "Pokémon en": "Emboar",
        "Pokémon fr": "Roitiflam",
        "Drops": "Raw Porkchop 2-4, Charcoal Stick 25%"
    },
    {
        "No.": "0501",
        "Pokémon en": "Oshawott",
        "Pokémon fr": "Moustillon",
        "Drops": "Mystic Water 5%, Shell Bell 5%"
    },
    {
        "No.": "0502",
        "Pokémon en": "Dewott",
        "Pokémon fr": "Mateloutre",
        "Drops": "Mystic Water 10%, Shell Bell 10%"
    },
    {
        "No.": "0503",
        "Pokémon en": "Samurott",
        "Pokémon fr": "Clamiral",
        "Drops": "Mystic Water 25%, Shell Bell 25%"
    },
    {
        "No.": "0503",
        "Pokémon en": "Samurott [Hisuian]",
        "Pokémon fr": "Clamiral de Hisui",
        "Drops": "Mystic Water 25%, Shell Bell 25%"
    },
    {
        "No.": "0504",
        "Pokémon en": "Patrat",
        "Pokémon fr": "Ratentif",
        "Drops": "Babiri Berry 2.5%"
    },
    {
        "No.": "0505",
        "Pokémon en": "Watchog",
        "Pokémon fr": "Miradar",
        "Drops": "Babiri Berry 5%"
    },
    {
        "No.": "0506",
        "Pokémon en": "Lillipup",
        "Pokémon fr": "Ponchiot",
        "Drops": "Bone 0-1, Blue Wool 1, Chilan Berry 2.5%"
    },
    {
        "No.": "0507",
        "Pokémon en": "Herdier",
        "Pokémon fr": "Ponchien",
        "Drops": "Bone 0-2, Blue Wool 1-2, Chilan Berry 5%"
    },
    {
        "No.": "0508",
        "Pokémon en": "Stoutland",
        "Pokémon fr": "Mastouffe",
        "Drops": "Bone 0-3, Blue Wool 2-3, Chilan Berry 10%"
    },
    {
        "No.": "0509",
        "Pokémon en": "Purrloin",
        "Pokémon fr": "Chacripan",
        "Drops": "Rotten Flesh 0-1, Bluk Berry 2.5%"
    },
    {
        "No.": "0510",
        "Pokémon en": "Liepard",
        "Pokémon fr": "Léopardus",
        "Drops": "Rotten Flesh 0-2, Bluk Berry 5%"
    },
    {
        "No.": "0519",
        "Pokémon en": "Pidove",
        "Pokémon fr": "Poichigeon",
        "Drops": "Feather 0-1, Raw Chicken 1, Razz Berry 2.5%"
    },
    {
        "No.": "0520",
        "Pokémon en": "Tranquill",
        "Pokémon fr": "Colombeau",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Razz Berry 5%"
    },
    {
        "No.": "0521",
        "Pokémon en": "Unfezant",
        "Pokémon fr": "Déflaisan",
        "Drops": "Feather 0-3, Raw Chicken 1, Sharp Beak 5%, Razz Berry 10%"
    },
    {
        "No.": "0522",
        "Pokémon en": "Blitzle",
        "Pokémon fr": "Zébibron",
        "Drops": "Leather 0-1, Cheri Berry 2.5%"
    },
    {
        "No.": "0523",
        "Pokémon en": "Zebstrika",
        "Pokémon fr": "Zéblitz",
        "Drops": "Leather 0-2, Cheri Berry 5%"
    },
    {
        "No.": "0526",
        "Pokémon en": "Gigalith",
        "Pokémon fr": "Gigalithe",
        "Drops": "Raw Copper 0-3, Hard Stone 10%, Everstone 10%, Black Augurite 10%"
    },
    {
        "No.": "0527",
        "Pokémon en": "Woobat",
        "Pokémon fr": "Chovsourir",
        "Drops": "Light Blue Wool 1, Colbur Berry 2.5%"
    },
    {
        "No.": "0528",
        "Pokémon en": "Swoobat",
        "Pokémon fr": "Rhinolove",
        "Drops": "Light Blue Wool 1-2, Colbur Berry 5%"
    },
    {
        "No.": "0532",
        "Pokémon en": "Timburr",
        "Pokémon fr": "Charpenti",
        "Drops": "Muscle Band 2.5%, Razz Berry 2.5%"
    },
    {
        "No.": "0533",
        "Pokémon en": "Gurdurr",
        "Pokémon fr": "Ouvrifier",
        "Drops": "Muscle Band 5%, Razz Berry 5%"
    },
    {
        "No.": "0534",
        "Pokémon en": "Conkeldurr",
        "Pokémon fr": "Bétochef",
        "Drops": "Muscle Band 10%, Razz Berry 10%"
    },
    {
        "No.": "0543",
        "Pokémon en": "Venipede",
        "Pokémon fr": "Venipatte",
        "Drops": "Poison Barb 2.5%, Pecha Berry 2.5%"
    },
    {
        "No.": "0544",
        "Pokémon en": "Whirlipede",
        "Pokémon fr": "Scobolide",
        "Drops": "Poison Barb 5%, Pecha Berry 5%"
    },
    {
        "No.": "0545",
        "Pokémon en": "Scolipede",
        "Pokémon fr": "Brutapode",
        "Drops": "Poison Barb 10%, Pecha Berry 10%"
    },
    {
        "No.": "0546",
        "Pokémon en": "Cottonee",
        "Pokémon fr": "Doudouvet",
        "Drops": "White Wool 1, Kebia Berry 2.5%, Absorb Bulb 2.5%"
    },
    {
        "No.": "0547",
        "Pokémon en": "Whimsicott",
        "Pokémon fr": "Farfaduvet",
        "Drops": "White Wool 1-2, Kebia Berry 5%, Absorb Bulb 5%"
    },
    {
        "No.": "0548",
        "Pokémon en": "Petilil",
        "Pokémon fr": "Chlorobule",
        "Drops": "Revival Herb 2.5%, Persim Berry 2.5%, Absorb Bulb 2.5%"
    },
    {
        "No.": "0549",
        "Pokémon en": "Lilligant",
        "Pokémon fr": "Fragilady",
        "Drops": "Revival Herb 5%, Persim Berry 5%, Absorb Bulb 5%"
    },
    {
        "No.": "0549",
        "Pokémon en": "Lilligant [Hisuian]",
        "Pokémon fr": "Fragilady de Hisui",
        "Drops": "Revival Herb 5%, Coba Berry 5%"
    },
    {
        "No.": "0550",
        "Pokémon en": "Basculin",
        "Pokémon fr": "Bargantua",
        "Drops": "Raw Salmon 1, Bone Meal 5%, Deep Sea Tooth 5%"
    },
    {
        "No.": "0551",
        "Pokémon en": "Sandile",
        "Pokémon fr": "Mascaïman",
        "Drops": "Black Glasses 2.5%, Tanga Berry 2.5%"
    },
    {
        "No.": "0552",
        "Pokémon en": "Krokorok",
        "Pokémon fr": "Escroco",
        "Drops": "Black Glasses 5%, Tanga Berry 5%"
    },
    {
        "No.": "0553",
        "Pokémon en": "Krookodile",
        "Pokémon fr": "Crocorible",
        "Drops": "Black Glasses 10%, Tanga Berry 10%"
    },
    {
        "No.": "0554",
        "Pokémon en": "Darumaka",
        "Pokémon fr": "Darumarond",
        "Drops": "Rawst Berry 2.5%"
    },
    {
        "No.": "0555",
        "Pokémon en": "Darmanitan",
        "Pokémon fr": "Darumacho",
        "Drops": "Rawst Berry 5%"
    },
    {
        "No.": "0556",
        "Pokémon en": "Maractus",
        "Pokémon fr": "Maracachi",
        "Drops": "Cactus 0-2, Miracle Seed 5%, Sticky Barb 5%"
    },
    {
        "No.": "0557",
        "Pokémon en": "Dwebble",
        "Pokémon fr": "Crabicoque",
        "Drops": "Terracotta 0-1, Hard Stone 2.5%"
    },
    {
        "No.": "0558",
        "Pokémon en": "Crustle",
        "Pokémon fr": "Crabaraque",
        "Drops": "Terracotta 0-2, Hard Stone 5%"
    },
    {
        "No.": "0559",
        "Pokémon en": "Scraggy",
        "Pokémon fr": "Baggiguane",
        "Drops": "Black Belt 2.5%, Roseli Berry 2.5%"
    },
    {
        "No.": "0560",
        "Pokémon en": "Scrafty",
        "Pokémon fr": "Baggaïd",
        "Drops": "Black Belt 5%, Roseli Berry 5%"
    },
    {
        "No.": "0561",
        "Pokémon en": "Sigilyph",
        "Pokémon fr": "Cryptéro",
        "Drops": "Ender Pearl 0-1, Light Clay 5%, Colbur Berry 5%"
    },
    {
        "No.": "0562",
        "Pokémon en": "Yamask",
        "Pokémon fr": "Tutafeh",
        "Drops": "Spell Tag 2.5%"
    },
    {
        "No.": "0563",
        "Pokémon en": "Cofagrigus",
        "Pokémon fr": "Tutankafer",
        "Drops": "Spell Tag 5%"
    },
    {
        "No.": "0564",
        "Pokémon en": "Tirtouga",
        "Pokémon fr": "Carapagos",
        "Drops": "Turtle Scute 0-2"
    },
    {
        "No.": "0565",
        "Pokémon en": "Carracosta",
        "Pokémon fr": "Mégapagos",
        "Drops": "Turtle Scute 0-3"
    },
    {
        "No.": "0566",
        "Pokémon en": "Archen",
        "Pokémon fr": "Arkéapti",
        "Drops": "Feather 0-2"
    },
    {
        "No.": "0567",
        "Pokémon en": "Archeops",
        "Pokémon fr": "Aéroptéryx",
        "Drops": "Feather 0-3"
    },
    {
        "No.": "0570",
        "Pokémon en": "Zorua",
        "Pokémon fr": "Zorua",
        "Drops": "Sweet Berries 1-3, Colbur Berry 2.5%"
    },
    {
        "No.": "0570",
        "Pokémon en": "Zorua [Hisuian]",
        "Pokémon fr": "Zorua de Hisui",
        "Drops": "Sweet Berries 1-3, Colbur Berry 2.5%"
    },
    {
        "No.": "0571",
        "Pokémon en": "Zoroark",
        "Pokémon fr": "Zoroark",
        "Drops": "Sweet Berries 2-4, Roseli Berry 5%"
    },
    {
        "No.": "0571",
        "Pokémon en": "Zoroark [Hisuian]",
        "Pokémon fr": "Zoroark de Hisui",
        "Drops": "Sweet Berries 2-4, Colbur Berry 5%"
    },
    {
        "No.": "0585",
        "Pokémon en": "Deerling",
        "Pokémon fr": "Vivaldaim",
        "Drops": "Leather 0-1, Yache Berry 2.5%"
    },
    {
        "No.": "0586",
        "Pokémon en": "Sawsbuck",
        "Pokémon fr": "Haydaim",
        "Drops": "Leather 0-2, Yache Berry 5%"
    },
    {
        "No.": "0587",
        "Pokémon en": "Emolga",
        "Pokémon fr": "Emolga",
        "Drops": "Yache Berry 5%"
    },
    {
        "No.": "0592",
        "Pokémon en": "Frillish",
        "Pokémon fr": "Viskuse",
        "Drops": "Glow Ink Sac 0-1, Kasib Berry 2.5%"
    },
    {
        "No.": "0593",
        "Pokémon en": "Jellicent",
        "Pokémon fr": "Moyade",
        "Drops": "Glow Ink Sac 0-2, Kasib Berry 5%"
    },
    {
        "No.": "0594",
        "Pokémon en": "Alomomola",
        "Pokémon fr": "Mamanbo",
        "Drops": "Raw Cod 1, Bone Meal 5%, Deep Sea Scale 5%"
    },
    {
        "No.": "0595",
        "Pokémon en": "Joltik",
        "Pokémon fr": "Statitik",
        "Drops": "String 0-1, Spider Eye 0-1, Rotten Flesh 0-1, Nanab Berry 2.5%"
    },
    {
        "No.": "0596",
        "Pokémon en": "Galvantula",
        "Pokémon fr": "Mygavolt",
        "Drops": "String 0-2, Spider Eye 0-2, Rotten Flesh 0-2, Nanab Berry 5%"
    },
    {
        "No.": "0597",
        "Pokémon en": "Ferroseed",
        "Pokémon fr": "Grindur",
        "Drops": "Raw Iron 0-1, Occa Berry 2.5%, Sticky Barb 2.5%"
    },
    {
        "No.": "0598",
        "Pokémon en": "Ferrothorn",
        "Pokémon fr": "Noacier",
        "Drops": "Raw Iron 0-2, Occa Berry 5%, Sticky Barb 5%"
    },
    {
        "No.": "0599",
        "Pokémon en": "Klink",
        "Pokémon fr": "Tic",
        "Drops": "Raw Iron 0-1"
    },
    {
        "No.": "0600",
        "Pokémon en": "Klang",
        "Pokémon fr": "Clic",
        "Drops": "Raw Iron 0-2"
    },
    {
        "No.": "0601",
        "Pokémon en": "Klinklang",
        "Pokémon fr": "Cliticlic",
        "Drops": "Raw Iron 0-3"
    },
    {
        "No.": "0605",
        "Pokémon en": "Elgyem",
        "Pokémon fr": "Lewsor",
        "Drops": "Ender Pearl 0-1, Light Clay 2.5%, Colbur Berry 2.5%"
    },
    {
        "No.": "0606",
        "Pokémon en": "Beheeyem",
        "Pokémon fr": "Neitram",
        "Drops": "Ender Pearl 0-2, Light Clay 5%, Colbur Berry 5%"
    },
    {
        "No.": "0607",
        "Pokémon en": "Litwick",
        "Pokémon fr": "Funécire",
        "Drops": "Candle 0-1, Dusk Stone 2.5%, Rawst Berry 2.5%"
    },
    {
        "No.": "0608",
        "Pokémon en": "Lampent",
        "Pokémon fr": "Mélancolux",
        "Drops": "Candle 1, Dusk Stone 5%, Rawst Berry 5%"
    },
    {
        "No.": "0609",
        "Pokémon en": "Chandelure",
        "Pokémon fr": "Lugulabre",
        "Drops": "Candle 1-3, Dusk Stone 10%, Rawst Berry 10%"
    },
    {
        "No.": "0613",
        "Pokémon en": "Cubchoo",
        "Pokémon fr": "Polarhume",
        "Drops": "Snowball 0-1, Raw Cod 0-1, Aspear Berry 2.5%"
    },
    {
        "No.": "0614",
        "Pokémon en": "Beartic",
        "Pokémon fr": "Polagriffe",
        "Drops": "Snowball 0-2, Raw Cod 0-2, Aspear Berry 5%"
    },
    {
        "No.": "0615",
        "Pokémon en": "Cryogonal",
        "Pokémon fr": "Hexagel",
        "Drops": "Never-Melt Ice 5%, Aspear Berry 5%"
    },
    {
        "No.": "0622",
        "Pokémon en": "Golett",
        "Pokémon fr": "Gringolem",
        "Drops": "Clay Ball 0-1, Light Clay 2.5%, Colbur Berry 2.5%"
    },
    {
        "No.": "0623",
        "Pokémon en": "Golurk",
        "Pokémon fr": "Golemastoc",
        "Drops": "Clay Ball 0-2, Light Clay 5%, Colbur Berry 5%"
    },
    {
        "No.": "0626",
        "Pokémon en": "Bouffalant",
        "Pokémon fr": "Frison",
        "Drops": "Leather 0-2, Raw Beef 1-3, Brown Wool 1-2, Wepear Berry 5%"
    },
    {
        "No.": "0631",
        "Pokémon en": "Heatmor",
        "Pokémon fr": "Aflamanoir",
        "Drops": "Flame Orb 5%, Blaze Powder 5%, Rawst Berry 5%"
    },
    {
        "No.": "0632",
        "Pokémon en": "Durant",
        "Pokémon fr": "Fermite",
        "Drops": "Raw Iron 0-1, Occa Berry 2.5%"
    },
    {
        "No.": "0633",
        "Pokémon en": "Deino",
        "Pokémon fr": "Solochi",
        "Drops": "Dragon's Breath 0-1, Roseli Berry 2.5%"
    },
    {
        "No.": "0634",
        "Pokémon en": "Zweilous",
        "Pokémon fr": "Diamat",
        "Drops": "Dragon's Breath 0-2, Roseli Berry 5%"
    },
    {
        "No.": "0635",
        "Pokémon en": "Hydreigon",
        "Pokémon fr": "Trioxhydre",
        "Drops": "Dragon's Breath 0-3, Roseli Berry 10%"
    },
    {
        "No.": "0636",
        "Pokémon en": "Larvesta",
        "Pokémon fr": "Pyronille",
        "Drops": "String 0-1, Blaze Powder 2.5%, Silver Powder 2.5%, Charti Berry 2.5%"
    },
    {
        "No.": "0637",
        "Pokémon en": "Volcarona",
        "Pokémon fr": "Pyrax",
        "Drops": "Blaze Powder 5%, Silver Powder 5%, Charti Berry 5%"
    },
    {
        "No.": "0650",
        "Pokémon en": "Chespin",
        "Pokémon fr": "Marisson",
        "Drops": "Miracle Seed 5%"
    },
    {
        "No.": "0651",
        "Pokémon en": "Quilladin",
        "Pokémon fr": "Boguérisse",
        "Drops": "Miracle Seed 10%"
    },
    {
        "No.": "0652",
        "Pokémon en": "Chesnaught",
        "Pokémon fr": "Blindépique",
        "Drops": "Miracle Seed 25%"
    },
    {
        "No.": "0653",
        "Pokémon en": "Fennekin",
        "Pokémon fr": "Feunnec",
        "Drops": "Blaze Powder 0-1, Charcoal Stick 5%"
    },
    {
        "No.": "0654",
        "Pokémon en": "Braixen",
        "Pokémon fr": "Roussil",
        "Drops": "Stick 1, Blaze Powder 0-2, Charcoal Stick 10%"
    },
    {
        "No.": "0655",
        "Pokémon en": "Delphox",
        "Pokémon fr": "Goupelin",
        "Drops": "Stick 1, Blaze Powder 0-3, Charcoal Stick 25%"
    },
    {
        "No.": "0656",
        "Pokémon en": "Froakie",
        "Pokémon fr": "Grenousse",
        "Drops": "Pearlescent Froglight 0-1, Mystic Water 5%"
    },
    {
        "No.": "0657",
        "Pokémon en": "Frogadier",
        "Pokémon fr": "Croâporal",
        "Drops": "Pearlescent Froglight 0-2, Mystic Water 10%"
    },
    {
        "No.": "0658",
        "Pokémon en": "Greninja",
        "Pokémon fr": "Amphinobi",
        "Drops": "Pearlescent Froglight 0-3, Mystic Water 25%"
    },
    {
        "No.": "0659",
        "Pokémon en": "Bunnelby",
        "Pokémon fr": "Sapereau",
        "Drops": "Raw Rabbit 1, Rabbit Hide 0-1, Rabbit's Foot 2.5%, Carrot 2.5%, Chilan Berry 2.5%"
    },
    {
        "No.": "0660",
        "Pokémon en": "Diggersby",
        "Pokémon fr": "Excavarenne",
        "Drops": "Raw Rabbit 1, Rabbit Hide 0-2, Rabbit's Foot 5%, Carrot 5%, Chilan Berry 5%"
    },
    {
        "No.": "0661",
        "Pokémon en": "Fletchling",
        "Pokémon fr": "Passerouge",
        "Drops": "Feather 0-1, Raw Chicken 1, Rawst Berry 2.5%"
    },
    {
        "No.": "0662",
        "Pokémon en": "Fletchinder",
        "Pokémon fr": "Braisillon",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Rawst Berry 5%"
    },
    {
        "No.": "0663",
        "Pokémon en": "Talonflame",
        "Pokémon fr": "Flambusard",
        "Drops": "Feather 0-3, Raw Chicken 1, Sharp Beak 5%, Rawst Berry 10%"
    },
    {
        "No.": "0664",
        "Pokémon en": "Scatterbug",
        "Pokémon fr": "Lépidonille",
        "Drops": "String 0-1, Bright Powder 2.5%, Cheri Berry 2.5%"
    },
    {
        "No.": "0665",
        "Pokémon en": "Spewpa",
        "Pokémon fr": "Pérégrain",
        "Drops": "String 0-2, Bright Powder 2.5%, Cheri Berry 2.5%"
    },
    {
        "No.": "0666",
        "Pokémon en": "Vivillon",
        "Pokémon fr": "Prismillon",
        "Drops": "Bright Powder 5%, Cheri Berry 5%"
    },
    {
        "No.": "0669",
        "Pokémon en": "Flabébé",
        "Pokémon fr": "Flabébé",
        "Drops": "Poppy 1, Kebia Berry 2.5%"
    },
    {
        "No.": "0670",
        "Pokémon en": "Floette",
        "Pokémon fr": "Floette",
        "Drops": "Poppy 1, Kebia Berry 5%"
    },
    {
        "No.": "0671",
        "Pokémon en": "Florges",
        "Pokémon fr": "Florges",
        "Drops": "Poppy 0-3, Kebia Berry 10%"
    },
    {
        "No.": "0679",
        "Pokémon en": "Honedge",
        "Pokémon fr": "Monorpale",
        "Drops": "Iron Nugget 0-1, Iron Sword 2.5%, Dusk Stone 2.5%"
    },
    {
        "No.": "0680",
        "Pokémon en": "Doublade",
        "Pokémon fr": "Dimoclès",
        "Drops": "Iron Nugget 0-2, Iron Sword 5%, Dusk Stone 5%"
    },
    {
        "No.": "0681",
        "Pokémon en": "Aegislash",
        "Pokémon fr": "Exagide",
        "Drops": "Iron Nugget 0-3, Iron Sword 10%, Dusk Stone 10%, Ability Shield 10%"
    },
    {
        "No.": "0690",
        "Pokémon en": "Skrelp",
        "Pokémon fr": "Venalgue",
        "Drops": "Kelp 0-1, Pecha Berry 2.5%"
    },
    {
        "No.": "0691",
        "Pokémon en": "Dragalge",
        "Pokémon fr": "Kravarech",
        "Drops": "Kelp 0-2, Pecha Berry 5%"
    },
    {
        "No.": "0692",
        "Pokémon en": "Clauncher",
        "Pokémon fr": "Flingouste",
        "Drops": ""
    },
    {
        "No.": "0693",
        "Pokémon en": "Clawitzer",
        "Pokémon fr": "Gamblast",
        "Drops": ""
    },
    {
        "No.": "0696",
        "Pokémon en": "Tyrunt",
        "Pokémon fr": "Ptyranidur",
        "Drops": "Razor Fang 5%"
    },
    {
        "No.": "0697",
        "Pokémon en": "Tyrantrum",
        "Pokémon fr": "Rexillius",
        "Drops": "Razor Fang 10%"
    },
    {
        "No.": "0698",
        "Pokémon en": "Amaura",
        "Pokémon fr": "Amagara",
        "Drops": "Never-Melt Ice 5%"
    },
    {
        "No.": "0699",
        "Pokémon en": "Aurorus",
        "Pokémon fr": "Dragmara",
        "Drops": "Never-Melt Ice 10%"
    },
    {
        "No.": "0700",
        "Pokémon en": "Sylveon",
        "Pokémon fr": "Nymphali",
        "Drops": "Shiny Stone 25%, Fairy Feather 10%"
    },
    {
        "No.": "0703",
        "Pokémon en": "Carbink",
        "Pokémon fr": "Strassie",
        "Drops": "Diamond 5%, Babiri Berry 5%, Float Stone 5%"
    },
    {
        "No.": "0704",
        "Pokémon en": "Goomy",
        "Pokémon fr": "Mucuscule",
        "Drops": "Slimeball 0-1, Haban Berry 2.5%"
    },
    {
        "No.": "0705",
        "Pokémon en": "Sliggoo",
        "Pokémon fr": "Colimucus",
        "Drops": "Slimeball 0-2, Haban Berry 5%"
    },
    {
        "No.": "0705",
        "Pokémon en": "Sliggoo [Hisuian]",
        "Pokémon fr": "Colimucus de Hisui",
        "Drops": "Slimeball 0-2, Iron Ingot 0-2, Bluk Berry 5%"
    },
    {
        "No.": "0706",
        "Pokémon en": "Goodra",
        "Pokémon fr": "Muplodocus",
        "Drops": "Slimeball 0-3, Haban Berry 10%"
    },
    {
        "No.": "0706",
        "Pokémon en": "Goodra [Hisuian]",
        "Pokémon fr": "Muplodocus de Hisui",
        "Drops": "Slimeball 0-3, Iron Ingot 0-3, Bluk Berry 10%"
    },
    {
        "No.": "0707",
        "Pokémon en": "Klefki",
        "Pokémon fr": "Trousselin",
        "Drops": "Name Tag 5%"
    },
    {
        "No.": "0708",
        "Pokémon en": "Phantump",
        "Pokémon fr": "Brocélôme",
        "Drops": "Jack o'Lantern 0-1, Spell Tag 2.5%, Rawst Berry 2.5%"
    },
    {
        "No.": "0709",
        "Pokémon en": "Trevenant",
        "Pokémon fr": "Desséliande",
        "Drops": "Jack o'Lantern 1, Spell Tag 5%, Rawst Berry 5%"
    },
    {
        "No.": "0710",
        "Pokémon en": "Pumpkaboo",
        "Pokémon fr": "Pitrouille",
        "Drops": "Pumpkin Seeds 0-1, Miracle Seed 2.5%, Kasib Berry 2.5%"
    },
    {
        "No.": "0711",
        "Pokémon en": "Gourgeist",
        "Pokémon fr": "Banshitrouye",
        "Drops": "Pumpkin Seeds 0-2, Miracle Seed 5%, Kasib Berry 5%"
    },
    {
        "No.": "0712",
        "Pokémon en": "Bergmite",
        "Pokémon fr": "Grelaçon",
        "Drops": "Never-Melt Ice 2.5%, Aspear Berry 2.5%"
    },
    {
        "No.": "0713",
        "Pokémon en": "Avalugg",
        "Pokémon fr": "Séracrawl",
        "Drops": "Never-Melt Ice 5%, Aspear Berry 5%"
    },
    {
        "No.": "0722",
        "Pokémon en": "Rowlet",
        "Pokémon fr": "Brindibou",
        "Drops": "Feather 0-1, Raw Chicken 1, Miracle Seed 5%"
    },
    {
        "No.": "0723",
        "Pokémon en": "Dartrix",
        "Pokémon fr": "Efflèche",
        "Drops": "Feather 0-2, Raw Chicken 1, Miracle Seed 10%"
    },
    {
        "No.": "0724",
        "Pokémon en": "Decidueye",
        "Pokémon fr": "Archéduc",
        "Drops": "Feather 0-3, Raw Chicken 1, Miracle Seed 25%"
    },
    {
        "No.": "0724",
        "Pokémon en": "Decidueye [Hisuian]",
        "Pokémon fr": "Archéduc de Hisui",
        "Drops": "Feather 0-3, Raw Chicken 1, Miracle Seed 25%"
    },
    {
        "No.": "0725",
        "Pokémon en": "Litten",
        "Pokémon fr": "Flamiaou",
        "Drops": "Charcoal Stick 5%, Expert Belt 5%"
    },
    {
        "No.": "0726",
        "Pokémon en": "Torracat",
        "Pokémon fr": "Matoufeu",
        "Drops": "Charcoal Stick 10%, Expert Belt 10%"
    },
    {
        "No.": "0727",
        "Pokémon en": "Incineroar",
        "Pokémon fr": "Félinferno",
        "Drops": "Charcoal Stick 25%, Expert Belt 25%"
    },
    {
        "No.": "0728",
        "Pokémon en": "Popplio",
        "Pokémon fr": "Otaquin",
        "Drops": "Mystic Water 5%"
    },
    {
        "No.": "0729",
        "Pokémon en": "Brionne",
        "Pokémon fr": "Otarlette",
        "Drops": "Mystic Water 10%"
    },
    {
        "No.": "0730",
        "Pokémon en": "Primarina",
        "Pokémon fr": "Oratoria",
        "Drops": "Mystic Water 25%"
    },
    {
        "No.": "0731",
        "Pokémon en": "Pikipek",
        "Pokémon fr": "Picassaut",
        "Drops": "Feather 0-1, Raw Chicken 1"
    },
    {
        "No.": "0732",
        "Pokémon en": "Trumbeak",
        "Pokémon fr": "Piclairon",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%"
    },
    {
        "No.": "0733",
        "Pokémon en": "Toucannon",
        "Pokémon fr": "Bazoucan",
        "Drops": "Feather 0-3, Raw Chicken 1, Sharp Beak 5%"
    },
    {
        "No.": "0739",
        "Pokémon en": "Crabrawler",
        "Pokémon fr": "Crabagarre",
        "Drops": "Aspear Berry 2.5%"
    },
    {
        "No.": "0740",
        "Pokémon en": "Crabominable",
        "Pokémon fr": "Crabominable",
        "Drops": "Aspear Berry 5%"
    },
    {
        "No.": "0742",
        "Pokémon en": "Cutiefly",
        "Pokémon fr": "Bombydou",
        "Drops": "Honey Bottle 0-1, Cheri Berry 2.5%"
    },
    {
        "No.": "0743",
        "Pokémon en": "Ribombee",
        "Pokémon fr": "Rubombelle",
        "Drops": "Honey Bottle 0-2, Cheri Berry 5%"
    },
    {
        "No.": "0746",
        "Pokémon en": "Wishiwashi",
        "Pokémon fr": "Froussardine",
        "Drops": "Raw Cod 1, Bone Meal 5%"
    },
    {
        "No.": "0747",
        "Pokémon en": "Mareanie",
        "Pokémon fr": "Vorastérie",
        "Drops": "Slimeball 0-1, Poison Barb 2.5%, Pecha Berry 2.5%"
    },
    {
        "No.": "0748",
        "Pokémon en": "Toxapex",
        "Pokémon fr": "Prédastérie",
        "Drops": "Slimeball 0-2, Poison Barb 5%, Pecha Berry 5%"
    },
    {
        "No.": "0749",
        "Pokémon en": "Mudbray",
        "Pokémon fr": "Tiboudet",
        "Drops": "Leather 0-1, Clay Ball 0-1, Light Clay 2.5%, Passho Berry 2.5%"
    },
    {
        "No.": "0750",
        "Pokémon en": "Mudsdale",
        "Pokémon fr": "Bourrinos",
        "Drops": "Leather 0-2, Clay Ball 0-2, Light Clay 5%, Passho Berry 5%"
    },
    {
        "No.": "0753",
        "Pokémon en": "Fomantis",
        "Pokémon fr": "Mimantis",
        "Drops": "Miracle Seed 2.5%, Tanga Berry 2.5%"
    },
    {
        "No.": "0754",
        "Pokémon en": "Lurantis",
        "Pokémon fr": "Floramantis",
        "Drops": "Miracle Seed 5%, Tanga Berry 5%"
    },
    {
        "No.": "0755",
        "Pokémon en": "Morelull",
        "Pokémon fr": "Spododo",
        "Drops": "Brown Mushroom 0-1, Kebia Berry 2.5%"
    },
    {
        "No.": "0756",
        "Pokémon en": "Shiinotic",
        "Pokémon fr": "Lampignon",
        "Drops": "Brown Mushroom 0-2, Kebia Berry 5%"
    },
    {
        "No.": "0757",
        "Pokémon en": "Salandit",
        "Pokémon fr": "Tritox",
        "Drops": "Rotten Flesh 0-1, Shuca Berry 2.5%, Smoke Ball 2.5%"
    },
    {
        "No.": "0758",
        "Pokémon en": "Salazzle",
        "Pokémon fr": "Malamandre",
        "Drops": "Rotten Flesh 0-2, Shuca Berry 5%, Smoke Ball 5%"
    },
    {
        "No.": "0759",
        "Pokémon en": "Stufful",
        "Pokémon fr": "Nounourson",
        "Drops": "Chople Berry 2.5%"
    },
    {
        "No.": "0760",
        "Pokémon en": "Bewear",
        "Pokémon fr": "Chelours",
        "Drops": "Chople Berry 5%"
    },
    {
        "No.": "0761",
        "Pokémon en": "Bounsweet",
        "Pokémon fr": "Croquine",
        "Drops": "Persim Berry 2.5%"
    },
    {
        "No.": "0762",
        "Pokémon en": "Steenee",
        "Pokémon fr": "Candine",
        "Drops": "Persim Berry 5%"
    },
    {
        "No.": "0763",
        "Pokémon en": "Tsareena",
        "Pokémon fr": "Sucreine",
        "Drops": "Persim Berry 10%"
    },
    {
        "No.": "0764",
        "Pokémon en": "Comfey",
        "Pokémon fr": "Guérilande",
        "Drops": "Misty Seed 5%, Kebia Berry 5%"
    },
    {
        "No.": "0767",
        "Pokémon en": "Wimpod",
        "Pokémon fr": "Sovkipou",
        "Drops": "Bluk Berry 2.5%"
    },
    {
        "No.": "0768",
        "Pokémon en": "Golisopod",
        "Pokémon fr": "Sarmuraï",
        "Drops": "Bluk Berry 5%"
    },
    {
        "No.": "0769",
        "Pokémon en": "Sandygast",
        "Pokémon fr": "Bacabouh",
        "Drops": "Sand 0-1, Soft Sand 2.5%, Passho Berry 2.5%"
    },
    {
        "No.": "0770",
        "Pokémon en": "Palossand",
        "Pokémon fr": "Trépassable",
        "Drops": "Sand 0-2, Soft Sand 5%, Passho Berry 5%"
    },
    {
        "No.": "0771",
        "Pokémon en": "Pyukumuku",
        "Pokémon fr": "Concombaffe",
        "Drops": "Slimeball 0-2"
    },
    {
        "No.": "0775",
        "Pokémon en": "Komala",
        "Pokémon fr": "Dodoala",
        "Drops": "Acacia Log 1, Chesto Berry 5%"
    },
    {
        "No.": "0776",
        "Pokémon en": "Turtonator",
        "Pokémon fr": "Boumata",
        "Drops": "Turtle Scute 0-2, Charcoal 5%, Haban Berry 5%"
    },
    {
        "No.": "0778",
        "Pokémon en": "Mimikyu",
        "Pokémon fr": "Mimiqui",
        "Drops": "Spell Tag 5%, Chesto Berry 5%"
    },
    {
        "No.": "0779",
        "Pokémon en": "Bruxish",
        "Pokémon fr": "Denticrisse",
        "Drops": "Raw Cod 1, Bone Meal 5%, Razor Fang 5%"
    },
    {
        "No.": "0781",
        "Pokémon en": "Dhelmise",
        "Pokémon fr": "Sinistrail",
        "Drops": "Kelp 0-2, Raw Iron 0-2"
    },
    {
        "No.": "0782",
        "Pokémon en": "Jangmo-o",
        "Pokémon fr": "Bébécaille",
        "Drops": "Dragon Scale 0-1, Razor Claw 2.5%, Roseli Berry 2.5%"
    },
    {
        "No.": "0783",
        "Pokémon en": "Hakamo-o",
        "Pokémon fr": "Écaïd",
        "Drops": "Dragon Scale 0-2, Razor Claw 5%, Roseli Berry 2.5%"
    },
    {
        "No.": "0784",
        "Pokémon en": "Kommo-o",
        "Pokémon fr": "Ékaïser",
        "Drops": "Dragon Scale 0-3, Razor Claw 10%, Roseli Berry 2.5%"
    },
    {
        "No.": "0810",
        "Pokémon en": "Grookey",
        "Pokémon fr": "Ouistempo",
        "Drops": "Stick 0-1, Miracle Seed 5%"
    },
    {
        "No.": "0811",
        "Pokémon en": "Thwackey",
        "Pokémon fr": "Badabouin",
        "Drops": "Stick 0-2, Miracle Seed 10%"
    },
    {
        "No.": "0812",
        "Pokémon en": "Rillaboom",
        "Pokémon fr": "Gorythmic",
        "Drops": "Stick 1-2, Miracle Seed 25%"
    },
    {
        "No.": "0813",
        "Pokémon en": "Scorbunny",
        "Pokémon fr": "Flambino",
        "Drops": "Rabbit Hide 0-1, Raw Rabbit 1, Rabbit's Foot 5%, Charcoal Stick 5%"
    },
    {
        "No.": "0814",
        "Pokémon en": "Raboot",
        "Pokémon fr": "Lapyro",
        "Drops": "Rabbit Hide 0-2, Raw Rabbit 1, Rabbit's Foot 10%, Charcoal Stick 10%"
    },
    {
        "No.": "0815",
        "Pokémon en": "Cinderace",
        "Pokémon fr": "Pyrobut",
        "Drops": "Rabbit Hide 0-3, Raw Rabbit 1, Rabbit's Foot 25%, Charcoal Stick 25%"
    },
    {
        "No.": "0816",
        "Pokémon en": "Sobble",
        "Pokémon fr": "Larméléon",
        "Drops": "Mystic Water 5%"
    },
    {
        "No.": "0817",
        "Pokémon en": "Drizzile",
        "Pokémon fr": "Arrozard",
        "Drops": "Mystic Water 10%"
    },
    {
        "No.": "0818",
        "Pokémon en": "Inteleon",
        "Pokémon fr": "Lézargus",
        "Drops": "Mystic Water 25%"
    },
    {
        "No.": "0821",
        "Pokémon en": "Rookidee",
        "Pokémon fr": "Minisange",
        "Drops": "Feather 0-1, Raw Chicken 1, Wacan Berry 2.5%"
    },
    {
        "No.": "0822",
        "Pokémon en": "Corvisquire",
        "Pokémon fr": "Bleuseille",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Wacan Berry 5%"
    },
    {
        "No.": "0823",
        "Pokémon en": "Corviknight",
        "Pokémon fr": "Corvaillus",
        "Drops": "Feather 0-3, Raw Chicken 1, Metal Coat 10%, Wacan Berry 10%"
    },
    {
        "No.": "0827",
        "Pokémon en": "Nickit",
        "Pokémon fr": "Goupilou",
        "Drops": "Sweet Berries 1-3, Emerald 2.5%, Roseli Berry 2.5%"
    },
    {
        "No.": "0828",
        "Pokémon en": "Thievul",
        "Pokémon fr": "Roublenard",
        "Drops": "Sweet Berries 2-4, Emerald 5%, Roseli Berry 5%"
    },
    {
        "No.": "0829",
        "Pokémon en": "Gossifleur",
        "Pokémon fr": "Tournicoton",
        "Drops": "Coba Berry 2.5%"
    },
    {
        "No.": "0830",
        "Pokémon en": "Eldegoss",
        "Pokémon fr": "Blancoton",
        "Drops": "White Wool 1-2, Coba Berry 5%"
    },
    {
        "No.": "0831",
        "Pokémon en": "Wooloo",
        "Pokémon fr": "Moumouton",
        "Drops": "Raw Mutton 1-2, White Wool 1"
    },
    {
        "No.": "0832",
        "Pokémon en": "Dubwool",
        "Pokémon fr": "Moumouflon",
        "Drops": "Raw Mutton 1-3, White Wool 1-2"
    },
    {
        "No.": "0835",
        "Pokémon en": "Yamper",
        "Pokémon fr": "Voltoutou",
        "Drops": "Bone 0-1, Wepear Berry 2.5%"
    },
    {
        "No.": "0836",
        "Pokémon en": "Boltund",
        "Pokémon fr": "Fulgudog",
        "Drops": "Bone 0-2, Wepear Berry 5%"
    },
    {
        "No.": "0845",
        "Pokémon en": "Cramorant",
        "Pokémon fr": "Nigosier",
        "Drops": "Feather 0-2, Raw Chicken 1, Raw Cod 0-2, Wacan Berry 5%"
    },
    {
        "No.": "0846",
        "Pokémon en": "Arrokuda",
        "Pokémon fr": "Embrochet",
        "Drops": "Raw Salmon 1, Bone Meal 5%"
    },
    {
        "No.": "0847",
        "Pokémon en": "Barraskewda",
        "Pokémon fr": "Hastacuda",
        "Drops": "Raw Salmon 1, Bone Meal 10%"
    },
    {
        "No.": "0849",
        "Pokémon en": "Toxtricity [Low Key]",
        "Pokémon fr": "Salarsen",
        "Drops": "Shuca Berry 5%"
    },
    {
        "No.": "0850",
        "Pokémon en": "Sizzlipede",
        "Pokémon fr": "Grillepattes",
        "Drops": "Blaze Powder 2.5%, Charti Berry 2.5%"
    },
    {
        "No.": "0851",
        "Pokémon en": "Centiskorch",
        "Pokémon fr": "Scolocendre",
        "Drops": "Blaze Powder 5%, Charti Berry 5%"
    },
    {
        "No.": "0856",
        "Pokémon en": "Hatenna",
        "Pokémon fr": "Bibichut",
        "Drops": "Babiri Berry 2.5%"
    },
    {
        "No.": "0857",
        "Pokémon en": "Hattrem",
        "Pokémon fr": "Chapotus",
        "Drops": "Babiri Berry 5%"
    },
    {
        "No.": "0858",
        "Pokémon en": "Hatterene",
        "Pokémon fr": "Sorcilence",
        "Drops": "Babiri Berry 10%"
    },
    {
        "No.": "0859",
        "Pokémon en": "Impidimp",
        "Pokémon fr": "Grimalin",
        "Drops": "Roseli Berry 2.5%"
    },
    {
        "No.": "0860",
        "Pokémon en": "Morgrem",
        "Pokémon fr": "Fourbelin",
        "Drops": "Roseli Berry 5%"
    },
    {
        "No.": "0861",
        "Pokémon en": "Grimmsnarl",
        "Pokémon fr": "Angoliath",
        "Drops": "Roseli Berry 10%"
    },
    {
        "No.": "0862",
        "Pokémon en": "Obstagoon",
        "Pokémon fr": "Ixon",
        "Drops": "Chople Berry 10%"
    },
    {
        "No.": "0863",
        "Pokémon en": "Perrserker",
        "Pokémon fr": "Berserkatt",
        "Drops": "Razor Claw 5%, Wepear Berry 5%"
    },
    {
        "No.": "0865",
        "Pokémon en": "Sirfetch'd",
        "Pokémon fr": "Palarticho",
        "Drops": "Feather 0-2, Raw Chicken 1, Medicinal Leek 1, Coba Berry 5%"
    },
    {
        "No.": "0868",
        "Pokémon en": "Milcery",
        "Pokémon fr": "Crèmy",
        "Drops": "Sugar 0-1"
    },
    {
        "No.": "0869",
        "Pokémon en": "Alcremie",
        "Pokémon fr": "Charmilly",
        "Drops": "Sugar 0-2, Cake 5%"
    },
    {
        "No.": "0870",
        "Pokémon en": "Falinks",
        "Pokémon fr": "Hexadron",
        "Drops": "Gold Helmet 5%, Nanab Berry 5%"
    },
    {
        "No.": "0871",
        "Pokémon en": "Pincurchin",
        "Pokémon fr": "Wattapik",
        "Drops": ""
    },
    {
        "No.": "0874",
        "Pokémon en": "Stonjourner",
        "Pokémon fr": "Dolman",
        "Drops": "Stone 2"
    },
    {
        "No.": "0875",
        "Pokémon en": "Eiscue",
        "Pokémon fr": "Bekaglaçon",
        "Drops": "Feather 0-1, Raw Chicken 1, Raw Cod 0-1, Blue Ice 1, Aspear Berry 5%"
    },
    {
        "No.": "0875",
        "Pokémon en": "Eiscue [No Ice Face]",
        "Pokémon fr": "Bekaglaçon",
        "Drops": "Feather 0-1, Raw Chicken 1, Raw Cod 0-1, Aspear Berry 5%"
    },
    {
        "No.": "0878",
        "Pokémon en": "Cufant",
        "Pokémon fr": "Charibari",
        "Drops": "Raw Copper 0-1, Nanab Berry 2.5%"
    },
    {
        "No.": "0879",
        "Pokémon en": "Copperajah",
        "Pokémon fr": "Pachyradjah",
        "Drops": "Raw Copper 0-2, Nanab Berry 5%"
    },
    {
        "No.": "0880",
        "Pokémon en": "Dracozolt",
        "Pokémon fr": "Galvagon",
        "Drops": "Bone 0-2, Feather 0-2"
    },
    {
        "No.": "0881",
        "Pokémon en": "Arctozolt",
        "Pokémon fr": "Galvagla",
        "Drops": "Bone 0-2, Feather 0-2"
    },
    {
        "No.": "0882",
        "Pokémon en": "Dracovish",
        "Pokémon fr": "Hydragon",
        "Drops": "Bone 0-2, Raw Cod 1"
    },
    {
        "No.": "0883",
        "Pokémon en": "Arctovish",
        "Pokémon fr": "Hydragla",
        "Drops": "Bone 0-2, Raw Cod 1"
    },
    {
        "No.": "0885",
        "Pokémon en": "Dreepy",
        "Pokémon fr": "Fantyrm",
        "Drops": "Phantom Membrane 2.5%, Haban Berry 2.5%"
    },
    {
        "No.": "0886",
        "Pokémon en": "Drakloak",
        "Pokémon fr": "Dispareptil",
        "Drops": "Phantom Membrane 5%, Haban Berry 5%"
    },
    {
        "No.": "0887",
        "Pokémon en": "Dragapult",
        "Pokémon fr": "Lanssorien",
        "Drops": "Phantom Membrane 10%, Haban Berry 10%"
    },
    {
        "No.": "0899",
        "Pokémon en": "Wyrdeer",
        "Pokémon fr": "Cerbyllin",
        "Drops": "Leather 0-2, Persim Berry 5%"
    },
    {
        "No.": "0900",
        "Pokémon en": "Kleavor",
        "Pokémon fr": "Hachécateur",
        "Drops": "Stone Axe 0-2, Wepear Berry 5%"
    },
    {
        "No.": "0901",
        "Pokémon en": "Ursaluna",
        "Pokémon fr": "Ursaking",
        "Drops": "Sweet Berries 3-5, Honey Bottle 10%, Peat Block 10%, Oran Berry 10%"
    },
    {
        "No.": "0902",
        "Pokémon en": "Basculegion",
        "Pokémon fr": "Paragruel",
        "Drops": "Raw Salmon 1, Bone Meal 5%"
    },
    {
        "No.": "0903",
        "Pokémon en": "Sneasler",
        "Pokémon fr": "Farfurex",
        "Drops": "Razor Claw 5%, Poison Barb 5%, Payapa Berry 5%"
    },
    {
        "No.": "0904",
        "Pokémon en": "Overqwil",
        "Pokémon fr": "Qwilpik",
        "Drops": "Pufferfish 1, Prismarine Shard 0-2, Poison Barb 5%"
    },
    {
        "No.": "0905",
        "Pokémon en": "Enamorus",
        "Pokémon fr": "",
        "Drops": ""
    },
    {
        "No.": "0906",
        "Pokémon en": "Sprigatito",
        "Pokémon fr": "Poussacha",
        "Drops": "Miracle Seed 5%"
    },
    {
        "No.": "0907",
        "Pokémon en": "Floragato",
        "Pokémon fr": "Matourgeon",
        "Drops": "Miracle Seed 10%"
    },
    {
        "No.": "0908",
        "Pokémon en": "Meowscarada",
        "Pokémon fr": "Miascarade",
        "Drops": "Miracle Seed 25%"
    },
    {
        "No.": "0909",
        "Pokémon en": "Fuecoco",
        "Pokémon fr": "Chochodile",
        "Drops": "Charcoal Stick 5%"
    },
    {
        "No.": "0910",
        "Pokémon en": "Crocalor",
        "Pokémon fr": "Crocogril",
        "Drops": "Charcoal Stick 10%"
    },
    {
        "No.": "0911",
        "Pokémon en": "Skeledirge",
        "Pokémon fr": "Flâmigator",
        "Drops": "Charcoal Stick 25%"
    },
    {
        "No.": "0912",
        "Pokémon en": "Quaxly",
        "Pokémon fr": "Coiffeton",
        "Drops": "Mystic Water 5%"
    },
    {
        "No.": "0913",
        "Pokémon en": "Quaxwell",
        "Pokémon fr": "Canarbello",
        "Drops": "Mystic Water 10%"
    },
    {
        "No.": "0914",
        "Pokémon en": "Quaquaval",
        "Pokémon fr": "Palmaval",
        "Drops": "Mystic Water 25%"
    },
    {
        "No.": "0915",
        "Pokémon en": "Lechonk",
        "Pokémon fr": "Gourmelet",
        "Drops": "Raw Porkchop 1-2, Oran Berry 2.5%"
    },
    {
        "No.": "0916",
        "Pokémon en": "Oinkologne",
        "Pokémon fr": "Fragroin",
        "Drops": "Raw Porkchop 1-3, Oran Berry 5%"
    },
    {
        "No.": "0924",
        "Pokémon en": "Tandemaus",
        "Pokémon fr": "Compagnol",
        "Drops": "Wheat Seeds 0-1, Chilan Berry 2.5%"
    },
    {
        "No.": "0925",
        "Pokémon en": "Maushold",
        "Pokémon fr": "Famignol",
        "Drops": "Wheat Seeds 0-2, Chilan Berry 5%"
    },
    {
        "No.": "0926",
        "Pokémon en": "Fidough",
        "Pokémon fr": "Pâtachiot",
        "Drops": "Bread 0-1, Nanab Berry 2.5%"
    },
    {
        "No.": "0927",
        "Pokémon en": "Dachsbun",
        "Pokémon fr": "Briochien",
        "Drops": "Bread 0-2, Nanab Berry 5%"
    },
    {
        "No.": "0931",
        "Pokémon en": "Squawkabilly",
        "Pokémon fr": "Tapatoès",
        "Drops": "Feather 0-2, Raw Chicken 1, Chilan Berry 5%"
    },
    {
        "No.": "0932",
        "Pokémon en": "Nacli",
        "Pokémon fr": "Selutin",
        "Drops": "Calcite 0-1, Passho Berry 2.5%"
    },
    {
        "No.": "0933",
        "Pokémon en": "Naclstack",
        "Pokémon fr": "Amassel",
        "Drops": "Calcite 0-2, Passho Berry 5%"
    },
    {
        "No.": "0934",
        "Pokémon en": "Garganacl",
        "Pokémon fr": "Gigansel",
        "Drops": "Calcite 0-3, Passho Berry 10%"
    },
    {
        "No.": "0935",
        "Pokémon en": "Charcadet",
        "Pokémon fr": "Charbambin",
        "Drops": "Charcoal 0-2, Charcoal Stick 2.5%, Rawst Berry 2.5%"
    },
    {
        "No.": "0936",
        "Pokémon en": "Armarouge",
        "Pokémon fr": "Carmadura",
        "Drops": "Charcoal 0-2, Charcoal Stick 5%, Auspicious Armor 5%, Rawst Berry 5%"
    },
    {
        "No.": "0937",
        "Pokémon en": "Ceruledge",
        "Pokémon fr": "Malvalame",
        "Drops": "Charcoal 0-2, Charcoal Stick 5%, Malicious Armor 5%, Rawst Berry 5%"
    },
    {
        "No.": "0940",
        "Pokémon en": "Wattrel",
        "Pokémon fr": "Zapétrel",
        "Drops": "Feather 0-1, Raw Chicken 1, Razz Berry 2.5%"
    },
    {
        "No.": "0941",
        "Pokémon en": "Kilowattrel",
        "Pokémon fr": "Fulgulairo",
        "Drops": "Feather 0-2, Raw Chicken 1, Sharp Beak 2.5%, Razz Berry 5%"
    },
    {
        "No.": "0942",
        "Pokémon en": "Maschiff",
        "Pokémon fr": "Grondogue",
        "Drops": "Bone 0-1, Rotten Flesh 0-1, Tanga Berry 2.5%"
    },
    {
        "No.": "0943",
        "Pokémon en": "Mabosstiff",
        "Pokémon fr": "Dogrino",
        "Drops": "Bone 0-2, Rotten Flesh 0-2, Tanga Berry 5%"
    },
    {
        "No.": "0944",
        "Pokémon en": "Shroodle",
        "Pokémon fr": "Gribouraigne",
        "Drops": "Nanab Berry 2.5%"
    },
    {
        "No.": "0945",
        "Pokémon en": "Grafaiai",
        "Pokémon fr": "Tag-Tag",
        "Drops": "Nanab Berry 5%"
    },
    {
        "No.": "0950",
        "Pokémon en": "Klawf",
        "Pokémon fr": "Craparoi",
        "Drops": "Pinap Berry 5%"
    },
    {
        "No.": "0955",
        "Pokémon en": "Flittle",
        "Pokémon fr": "Flotillon",
        "Drops": "Raw Chicken 1, Tanga Berry 2.5%"
    },
    {
        "No.": "0956",
        "Pokémon en": "Espathra",
        "Pokémon fr": "Cléopsytra",
        "Drops": "Raw Chicken 1, Tanga Berry 5%"
    },
    {
        "No.": "0957",
        "Pokémon en": "Tinkatink",
        "Pokémon fr": "Forgerette",
        "Drops": "Raw Iron 0-1, Razz Berry 2.5%"
    },
    {
        "No.": "0958",
        "Pokémon en": "Tinkatuff",
        "Pokémon fr": "Forgella",
        "Drops": "Raw Iron 0-2, Razz Berry 5%"
    },
    {
        "No.": "0959",
        "Pokémon en": "Tinkaton",
        "Pokémon fr": "Forgelina",
        "Drops": "Raw Iron 0-3, Razz Berry 10%"
    },
    {
        "No.": "0960",
        "Pokémon en": "Wiglett",
        "Pokémon fr": "Taupikeau",
        "Drops": ""
    },
    {
        "No.": "0961",
        "Pokémon en": "Wugtrio",
        "Pokémon fr": "Triopikeau",
        "Drops": ""
    },
    {
        "No.": "0963",
        "Pokémon en": "Finizen",
        "Pokémon fr": "Dofin",
        "Drops": "Raw Cod 0-1"
    },
    {
        "No.": "0964",
        "Pokémon en": "Palafin",
        "Pokémon fr": "Superdofin",
        "Drops": "Raw Cod 0-2"
    },
    {
        "No.": "0965",
        "Pokémon en": "Varoom",
        "Pokémon fr": "Vrombi",
        "Drops": "Iron Nugget 0-1, Black Sludge 2.5%, Shuca Berry 2.5%"
    },
    {
        "No.": "0966",
        "Pokémon en": "Revavroom",
        "Pokémon fr": "Vrombotor",
        "Drops": "Iron Nugget 0-2, Black Sludge 5%, Shuca Berry 5%"
    },
    {
        "No.": "0969",
        "Pokémon en": "Glimmet",
        "Pokémon fr": "Germéclat",
        "Drops": "Amethyst Shard 0-1, Shuca Berry 2.5%, Float Stone 2.5%"
    },
    {
        "No.": "0970",
        "Pokémon en": "Glimmora",
        "Pokémon fr": "Floréclat",
        "Drops": "Amethyst Shard 0-2, Shuca Berry 5%, Float Stone 5%"
    },
    {
        "No.": "0973",
        "Pokémon en": "Flamigo",
        "Pokémon fr": "Flamenroule",
        "Drops": "Feather 0-2, Raw Chicken 1, Payapa Berry 5%, Fairy Feather 5%"
    },
    {
        "No.": "0974",
        "Pokémon en": "Cetoddle",
        "Pokémon fr": "Piétacé",
        "Drops": "Bone Block 0-1, Aspear Berry 2.5%"
    },
    {
        "No.": "0975",
        "Pokémon en": "Cetitan",
        "Pokémon fr": "Balbalèze",
        "Drops": "Bone Block 0-2, Aspear Berry 5%"
    },
    {
        "No.": "0976",
        "Pokémon en": "Veluza",
        "Pokémon fr": "Délestin",
        "Drops": "Raw Cod 1-3, Bone Meal 5%"
    },
    {
        "No.": "0977",
        "Pokémon en": "Dondozo",
        "Pokémon fr": "Oyacata",
        "Drops": "Raw Salmon 1, Bone Meal 5%"
    },
    {
        "No.": "0978",
        "Pokémon en": "Tatsugiri",
        "Pokémon fr": "Nigirigon",
        "Drops": "Raw Salmon 1, Bone Meal 5%, Haban Berry 5%"
    },
    {
        "No.": "0979",
        "Pokémon en": "Annihilape",
        "Pokémon fr": "Courrousinge",
        "Drops": "Muscle Band 10%, Payapa Berry 10%"
    },
    {
        "No.": "0980",
        "Pokémon en": "Clodsire",
        "Pokémon fr": "Terraiste",
        "Drops": "Clay Ball 0-2, Pecha Berry 5%"
    },
    {
        "No.": "0981",
        "Pokémon en": "Farigiraf",
        "Pokémon fr": "Farigiraf",
        "Drops": "Leather 0-2, Razor Fang 5%, Persim Berry 5%"
    },
    {
        "No.": "0999",
        "Pokémon en": "Gimmighoul",
        "Pokémon fr": "Mordudor",
        "Drops": "Relic Coin 24-48"
    },
    {
        "No.": "0999",
        "Pokémon en": "Gimmighoul [Roaming Form]",
        "Pokémon fr": "Mordudor",
        "Drops": "Relic Coin 1"
    },
    {
        "No.": "1000",
        "Pokémon en": "Gholdengo",
        "Pokémon fr": "Gromago",
        "Drops": "Relic Coin 24-48"
    }
]