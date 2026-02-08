
document.addEventListener("DOMContentLoaded", () => {
    const bossNameEl = document.getElementById("boss-name");
    const bossHpEl = document.getElementById("boss-hp");
    const handEl = document.getElementById("hand");
    const statusEl = document.getElementById("status");
    const endMessageEl = document.getElementById("endMessage");
    // Boss image element
    let bossImgEl = document.getElementById("boss-img");
    if (!bossImgEl) {
        const bossContainer = document.querySelector(".boss");
        bossImgEl = document.createElement("img");
        bossImgEl.id = "boss-img";
        bossImgEl.style.width = "1000px";
        bossImgEl.style.height = "1000px";
        bossImgEl.style.display = "block";
        bossImgEl.style.marginTop = "10px";
        bossContainer.appendChild(bossImgEl);
    }
    // showEndMessage 
    function showEndMessage(win) {
        endMessageEl.classList.remove("hidden");
        endMessageEl.classList.add(win ? "win" : "lose");
        endMessageEl.textContent = win ? "You Win! :)" : "You Lose! :(";
        handEl.style.pointerEvents = "none";
    }
    // Select the boss
    const boss = bosses[2];
    // Start the game immediately
    let game = startGame(boss, cards); // pass all cards as available
    let playedCount = 0;
    // Show boss info
    bossNameEl.textContent = game.boss.name;
    bossHpEl.textContent = game.boss.currentHP.toString();
    bossImgEl.src = game.boss.image;
    statusEl.textContent = `⚡ Boss appears! Click a card to attack!`;
    // Render all cards for battle
    cards.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = `card ${card.type.toLowerCase()}`;
        cardDiv.textContent = `${card.name} (${card.type}) (${card.power})`;
        // Card click handler
        cardDiv.addEventListener("click", () => {
            if (playedCount >= 5)
                return; // limit to 5 plays
            if (cardDiv.style.pointerEvents === "none")
                return; // already used
            game = playCard(game, card.name);
            playedCount++;
            // Update boss HP
            bossHpEl.textContent = game.boss.currentHP.toString();
            statusEl.textContent = `✨ Played ${card.name}! Boss HP: ${game.boss.currentHP}`;
            // Disable the card after use
            cardDiv.classList.add("disabled");
            // Check win/lose
            // Check win/lose
            if (game.boss.currentHP <= 0) {
                showEndMessage(true);
            }
            else if (playedCount >= 5) {
                showEndMessage(false);
            }
        });
        handEl.appendChild(cardDiv);
    });
});
