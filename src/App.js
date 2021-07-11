import React, { useState, useEffect } from 'react';
import { Scoreboard } from './components/Scoreboard/Scoreboad';
import { BlackJackHand } from './components/BlackJackHand/BlackJackHand';

import { getScore, updateScore } from './api';

function App() {
    const [score, setScore] = useState({player: 0, dealer: 0, push: 0});

    useEffect(() => {
        getScore().then(score => {
            console.log(score);
            setScore(score);
        });
    }, []);

    const postScore = (winner) => {
        if(winner) {
            let dataToPost = winner;
            if(dataToPost === "PlayerOne") {
                dataToPost = 'player';
            }
            updateScore(dataToPost.toLowerCase()).then(score => {
                setScore(score);
            });
        }
    }

    return (
        <div>
            <Scoreboard score={score} />
            <BlackJackHand postScore={postScore} />
        </div>
    );
}

export default App;
