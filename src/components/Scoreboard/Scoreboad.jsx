import React from 'react';

import styles from './Scoreboard.module.scss';

const Scoreboard = ({ score }) => {
    return (
        <div className={styles.ScoreboardContainer}>
            <div className={styles.ScoreboardList}>
                <div>
                    <span className={styles.ScoreTitle}>Win:</span> 
                    <span className={styles.ScoreValue}>{score.player}</span>
                </div>
                <div>
                    <span className={styles.ScoreTitle}>Lose:</span> 
                    <span className={styles.ScoreValue}>{score.dealer}</span>
                </div>
                <div>
                    <span className={styles.ScoreTitle}>Push:</span>
                    <span className={styles.ScoreValue}>{score.push}</span>
                </div>
            </div>
        </div>
    )
}

export { Scoreboard };