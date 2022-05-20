import React from 'react';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import styles from './Card.module.css';

const Card = ({ id, title, episodes, seasons, status, genres, score }) => {
    
    const genresRender = genres.map(genre => <li className={styles['genres__item']}>{genre}</li>);

    return (
        <div className={styles.card}>
            <div className={styles['card-id']}>
                <span className={styles['card-id__number']}>{id}</span>
            </div>
            <div className={styles['card-body']}>
                <p className={styles['card-body__title']}>{title}</p>
                <p className={styles['card-body__episodes']}>
                    <span>Episodes:</span>{episodes}
                </p>
                <p className={styles['card-body__seasons']}>
                    <span>Seasons:</span>{seasons}
                </p>
                <p className={styles['card-body__status']}>
                    <span>Status:</span>{status}
                </p>

                <p className={styles['card-body__genres']}>Genres</p>
                <ul className={styles['genres']}>
                    { genresRender }
                </ul>

                <div className={styles['score']}>
                    <VscCircleLargeFilled className={styles['score__icon']} />
                    <p className={styles['score__number']}>{score}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
