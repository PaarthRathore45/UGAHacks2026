import { SpellType } from "./SpellType.js";

export interface Boss {
    id: string;
    name: string;
    level: number;

    maxHP: number;
    currentHP: number;

    weaknesses: SpellType[];
    resistances: SpellType[];
}