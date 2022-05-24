import React from 'react';
import Card from '../../Card/Card';
import animeWatchList from '../../../data/animeWatchList';
import styles from './CardsWrapper.module.css';

const CardsWrapper = () => {
    return (
        <div className={styles['cards-wrapper']}>
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

export default CardsWrapper;
