import React from 'react';

const Scoreboard = ({ score }) => {
    console.log('scores from api', score);
    return (
        <div>
            <div>
                Win: {score.player}
            </div>
            <div>
                Lose: {score.dealer}
            </div>
            <div>
                Push: {score.push}
            </div>
        </div>
    )
}

export { Scoreboard };