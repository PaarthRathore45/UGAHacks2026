import { Card } from '../types/Card';
import { Boss } from '../types/Boss';

export function calculateDamage(card: Card, boss: Boss): number {
  let multiplier = 1;

  if (boss.weaknesses.includes(card.type)) {
    multiplier = 2;
  } else if (boss.resistances.includes(card.type)) {
    multiplier = 0.5;
  }

  return card.power * multiplier;
}