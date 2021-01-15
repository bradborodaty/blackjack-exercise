import React from 'react';
import PropTypes from 'prop-types';

import styles from './PlayingCard.module.scss';

const PlayingCard = ({ card, faceUp }) => {
    const code = faceUp ? card.code : 'XX';

    return (
        <div>
            <img
                alt={card.toString()}
                src={`https://deckofcardsapi.com/static/img/${code}.png`}
                className={styles.CardImage}
            />
        </div>
    );
};

PlayingCard.defaultProps = {
    faceUp: true
};

PlayingCard.propTypes = {
    card: PropTypes.object.isRequired,
    faceUp: PropTypes.bool
};

export { PlayingCard };
