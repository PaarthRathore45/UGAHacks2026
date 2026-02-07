import { GameState } from '../types/GameState.js';
import { Card } from '../types/Card.js';
import { Boss } from '../types/Boss.js';
import { calculateDamage } from './combat.js';

/**
 * Starts a new game with the given boss and deck.
 * Clones boss to avoid mutating the original, sets initial boss HP.
 */
export function startGame(boss: Boss, deck: Card[]): GameState {
  return {
    boss: { ...boss, currentHP: boss.maxHP }, // initialize currentHP
    deck,
    hand: [...deck], // all cards start in hand
    turn: 1,
    status: 'IN_PROGRESS',
  };
}

/**
 * Plays a card by its ID (or name, depending on your Card type).
 * Removes it from hand, applies damage to boss, updates turn and status.
 */
export function playCard(state: GameState, cardId: string): GameState {
  const cardIndex = state.hand.findIndex((c) => c.id === cardId || c.name === cardId);
  if (cardIndex === -1) return state; // card not found in hand

  const card = state.hand[cardIndex];

  // Remove card from hand (single-use rule)
  const newHand = [...state.hand];
  newHand.splice(cardIndex, 1);

  // Apply damage using your combat function
  const damage = calculateDamage(card, state.boss);
  const newBossHp = Math.max(0, state.boss.currentHP - damage);

  // Determine new status
  let newStatus: GameState['status'] = state.status;
  if (newBossHp === 0) newStatus = 'WIN';
  else if (newHand.length === 0 && newBossHp > 0) newStatus = 'LOSS';

  return {
    ...state,
    hand: newHand,
    boss: { ...state.boss, currentHP: newBossHp },
    turn: state.turn + 1,
    status: newStatus,
  };
}
