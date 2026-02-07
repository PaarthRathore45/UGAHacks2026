import { Card } from "../types/Card";

export function validateDeck(deck: Card[]): boolean {
    if (deck.length !== 5) return false;

    const uniqueIds = new Set(deck.map((c) => c.id));
    return uniqueIds.size == deck.length;
}

export function pickCards(allCards: Card[], selectedIds: string[]): Card[] {
  return selectedIds.map((id) => {
    const card = allCards.find((c) => c.id === id);
    if (!card) throw new Error(`Card ID ${id} not found`);
    return card;
  });
}