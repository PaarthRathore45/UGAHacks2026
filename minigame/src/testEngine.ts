import { startGame, playCard } from './engine/gameEngine';
import { cards } from './data/cards';
import { bosses } from './data/bosses';

function testEngine() {
  const deck = cards.slice(0, 5); // pick first 5 cards
  const boss = bosses[0];          // pick first boss

  let state = startGame(boss, deck);
  console.log('Initial State:', state);

  // Play each card
  for (const card of deck) {
    state = playCard(state, card.id);
    console.log(`After playing ${card.name}:`, state);
  }

  console.log('Final State:', state);
}

testEngine();