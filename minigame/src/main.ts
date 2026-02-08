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

  // Boss image element
  let bossImgEl = document.getElementById("boss-img") as HTMLImageElement;
  if (!bossImgEl) {
    const bossContainer = document.querySelector(".boss")!;
    bossImgEl = document.createElement("img");
    bossImgEl.id = "boss-img";
    bossImgEl.style.width = "400px";
    bossImgEl.style.height = "400px";
    bossImgEl.style.display = "block";
    bossImgEl.style.marginTop = "20px";
    bossContainer.appendChild(bossImgEl);
  }

  // Select the boss
  const boss: Boss = bosses[2];

  // Start the game immediately
  let game: GameState = startGame(boss, cards); // pass all cards as available
  let playedCount = 0;

  // Show boss info
  bossNameEl.textContent = game.boss.name;
  bossHpEl.textContent = game.boss.currentHP.toString();
  bossImgEl.src = game.boss.image;
  statusEl.textContent = `⚡ Boss appears! Click a card to attack!`;

  // Render all cards for battle
  cards.forEach((card: Card, index: number) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = `card ${card.type.toLowerCase()}`;
    cardDiv.textContent = `${card.name} (${card.type}) (${card.power})`;

    // Card click handler
    cardDiv.addEventListener("click", () => {
      if (playedCount >= 5) return; // limit to 5 plays
      if (cardDiv.style.pointerEvents === "none") return; // already used

      game = playCard(game, card.name);
      playedCount++;

      // Update boss HP
      bossHpEl.textContent = game.boss.currentHP.toString();
      statusEl.textContent = `✨ Played ${card.name}! Boss HP: ${game.boss.currentHP}`;

      // Disable the card after use
      cardDiv.classList.add("disabled");

      // Check win/lose
      if (game.boss.currentHP <= 0) {
        statusEl.textContent = `🏆 Boss defeated!`;
      } else if (playedCount >= 5) {
        statusEl.textContent = `⚡ All cards played! Boss HP: ${game.boss.currentHP}`;
      }
    });

    handEl.appendChild(cardDiv);
  });
});
