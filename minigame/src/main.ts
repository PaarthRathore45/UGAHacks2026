import { startGame, playCard } from "./engine/gameEngine.js";
import { cards } from "./data/cards.js";
import { bosses } from "./data/bosses.js";
import type { Card } from "./types/Card.js";
import type { Boss } from "./types/Boss.js";
import type { GameState } from "./types/GameState.js";

document.addEventListener("DOMContentLoaded", () => {
  const bossNameEl = document.getElementById("boss-name")!;
  const bossHpEl = document.getElementById("boss-hp")!;
  const handEl = document.getElementById("hand")!;
  const statusEl = document.getElementById("status")!;

  const boss: Boss = bosses[2];
  const selectedDeck: Card[] = [];
  const selectedCardsSet = new Set<string>();
  const selectedCardDivs: HTMLElement[] = []; // keep DOM references
  let game: GameState | null = null;
  let playedCount = 0;

  // Render all cards for selection
  cards.forEach((card: Card) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.textContent = `${card.name} (${card.type})`;

    // Phase 1: Selection
    cardDiv.addEventListener("click", function selectCard() {
      if (selectedCardsSet.has(card.name)) {
        statusEl.textContent = `❌ Already selected ${card.name}`;
        return;
      }
      if (selectedDeck.length >= 5) {
        statusEl.textContent = `⚠️ You can only select 5 cards`;
        return;
      }

      selectedDeck.push(card);
      selectedCardsSet.add(card.name);
      selectedCardDivs.push(cardDiv); // save reference for battle

      cardDiv.style.opacity = "0.5"; // selection effect
      cardDiv.style.pointerEvents = "none"; 
      statusEl.textContent = `🪄 Selected ${card.name} (${selectedDeck.length}/5)`;

      // Start battle once 5 cards are selected
      if (selectedDeck.length === 5 && !game) {
        game = startGame(boss, selectedDeck);

        bossNameEl.textContent = game.boss.name;
        bossHpEl.textContent = game.boss.currentHP.toString(); // adjust to your engine

        statusEl.textContent = `⚡ Deck ready! Click your cards to attack!`;

        // Phase 2: Battle - re-enable the selected cards
        selectedCardDivs.forEach((cDiv, index) => {
          cDiv.style.opacity = "1";
          cDiv.style.pointerEvents = "auto";

          // Battle click handler
          cDiv.addEventListener("click", function playCardHandler() {
            if (!game) return;
            const cardToPlay = selectedDeck[index];
            console.log("Before:", game.boss.currentHP);
            game = playCard(game!, cardToPlay.name);
            playedCount++;
            console.log("After:", game.boss.currentHP);
            bossHpEl.textContent = game.boss.currentHP.toString();
            statusEl.textContent = `✨ Played ${cardToPlay.name}! Boss HP: ${game.boss.currentHP}`;

            cDiv.style.opacity = "0.5";
            cDiv.style.pointerEvents = "none";

            if (game.boss.currentHP <= 0) {
              statusEl.textContent = `🏆 Boss defeated!`;
            } else if (playedCount >= 5) {
              statusEl.textContent = `⚡ All cards played!`;
            }
          }, { once: true }); // ensures each card can be played only once
        });
      }
    });

    handEl.appendChild(cardDiv);
  });
});
