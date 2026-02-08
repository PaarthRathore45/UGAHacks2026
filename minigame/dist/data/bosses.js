 const bosses = [
    {
        id: 'b1',
        name: 'Scorching Imp',
        level: 1,
        maxHP: 25,
        currentHP: 25,
        weaknesses: [SpellType.WATER],
        resistances: [SpellType.FIRE],
        image: "../media/Fire Wizard.png"
    },
    {
        id: 'b2',
        name: 'Stone Golem',
        level: 2,
        maxHP: 35,
        currentHP: 35,
        weaknesses: [SpellType.FIRE],
        resistances: [SpellType.EARTH],
        image: "../media/Earth Wizard.png"
    },
    {
        id: 'b3',
        name: 'Wind Sprite',
        level: 3,
        maxHP: 45,
        currentHP: 45,
        weaknesses: [SpellType.EARTH],
        resistances: [SpellType.AIR],
        image: "../media/Air Wizard.png"
    },
    {
        id: 'b4',
        name: 'Water Serpent',
        level: 4,
        maxHP: 50,
        currentHP: 50,
        weaknesses: [SpellType.AIR],
        resistances: [SpellType.WATER],
        image: "../media/Water Wizard.png"
    },
    {
        id: 'b5',
        name: 'Elemental Master',
        level: 5,
        maxHP: 60,
        currentHP: 60,
        weaknesses: [SpellType.FIRE, SpellType.AIR],
        resistances: [SpellType.WATER, SpellType.EARTH],
        image: "../media/Fire Wizard.png"
    },
];
