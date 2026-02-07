import { Card } from "./Card";
import { Boss } from "./Boss";

export interface GameState{
    boss: Boss;
    deck: Card[];
    hand: Card[];
    turn: number;
    status: 'PREP' | 'IN_PROGRESS' | 'WIN' | 'LOSS' ;
} 