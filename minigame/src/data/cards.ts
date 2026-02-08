import { Card } from "../types/Card.js";
import { SpellType } from "../types/SpellType.js";

export const cards: Card[] = [
    {
        id: 'c1',
        name: 'Fireball',
        type: SpellType.FIRE,
        power: 10,
        description: 'A basic fire attack. Strong against EARTH.'
    },
    {
        id: 'c2',
        name: 'Flame Wall',
        type: SpellType.FIRE,
        power: 5,
        description: 'Blocks incoming damage, deals recoil damage.'
    },
    {
        id: 'c3',
        name: 'Water Jet',
        type: SpellType.WATER,
        power: 10,
        description: 'A Water Jet. Strong against FIRE.'
    },
    {
        id: 'c4',
        name: 'Healing Rain',
        type: SpellType.WATER,
        power: 5,
        description: 'Blocks incoming damage, deals recoil damage.'
    },
    {
        id: 'c5',
        name: 'Rock Smash',
        type: SpellType.EARTH,
        power: 10,
        description: 'Hit with rocks. Strong against AIR.'
    },
    {
        id: 'c6',
        name: 'Earth Shield',
        type: SpellType.EARTH,
        power: 5,
        description: 'Blocks incoming damage, deals recoil damage.'
    },
    {
        id: 'c7',
        name: 'Gust',
        type: SpellType.AIR,
        power: 10,
        description: 'Gust of Wind. Strong against AIR.'
    },
    {
        id: 'c1',
        name: 'Counter Shield',
        type: SpellType.AIR,
        power: 5,
        description: 'Blocks incoming damage, deals recoil damage.'
    }
]
