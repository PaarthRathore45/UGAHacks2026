import { SpellType } from "./SpellType";

export interface Card {
    id: string;
    name: string;
    type: SpellType;
    power: number;
    description: string;
}