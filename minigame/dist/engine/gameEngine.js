/**
 * Starts a new game with the given boss and deck.
 * Clones boss to avoid mutating the original, sets initial boss HP.
 */
 function startGame(boss, deck) {
    return {
        boss: Object.assign(Object.assign({}, boss), { currentHP: boss.maxHP }), // initialize currentHP
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
 function playCard(state, cardId) {
    const cardIndex = state.hand.findIndex((c) => c.id === cardId || c.name === cardId);
    if (cardIndex === -1)
        return state; // card not found in hand
    const card = state.hand[cardIndex];
    // Remove card from hand (single-use rule)
    const newHand = [...state.hand];
    newHand.splice(cardIndex, 1);
    // Apply damage using your combat function
    const damage = calculateDamage(card, state.boss);
    const newBossHp = Math.max(0, state.boss.currentHP - damage);
    // Determine new status
    let newStatus = state.status;
    if (newBossHp === 0)
        newStatus = 'WIN';
    else if (newHand.length === 0 && newBossHp > 0)
        newStatus = 'LOSS';
    return Object.assign(Object.assign({}, state), { hand: newHand, boss: Object.assign(Object.assign({}, state.boss), { currentHP: newBossHp }), turn: state.turn + 1, status: newStatus });
}
