import React, { useState } from 'react';
import Game from './Game';

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    const startNewGame = () => setGameId(gameId + 1);

    return <Game key={gameId} startNewGame={startNewGame} />
}

export default StarMatch;