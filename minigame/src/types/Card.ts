import { SpellType } from "./SpellType.js";

export interface Card {
    id: string;
    name: string;
    type: SpellType;
    power: number;
    description: string;
}