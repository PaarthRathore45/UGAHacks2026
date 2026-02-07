import { Card } from "./Card.js";
import { Boss } from "./Boss.js";

export interface GameState{
    boss: Boss;
    deck: Card[];
    hand: Card[];
    turn: number;
    status: 'PREP' | 'IN_PROGRESS' | 'WIN' | 'LOSS' ;
} 