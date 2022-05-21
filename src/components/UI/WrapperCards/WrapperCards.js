import React from 'react';
import Card from '../../Card/Card';
import animeWatchList from '../../../data/animeWatchList';
import styles from './WrapperCards.module.css';

const WrapperCards = () => {
    return (
        <div className={styles['wrapper-cards']}>
            {
                animeWatchList.map((anime, index) => (
                    <Card
                        key={index}
                        id={index}
                        title={anime.title}
                        episodes={anime.episodes}
                        seasons={anime.seasons}
                        status={anime.status}
                        genres={anime.genres}
                        score={anime.score}
                    />
                ))
            }
        </div>
    );
}

export default WrapperCards;
