import React from "react";
import Card from '../../Card/Card';
import animeWatchList from '../../../data/animeWatchList';
import animeNextList from "../../../data/animeNextList";
import { CgMathPlus } from 'react-icons/cg';
import { MdEditNote } from 'react-icons/md';
import styles from "./Content.module.css";

const Content = ({ titlePage, contentType }) => {

    if (contentType === "anime") {
        return (
            <div className={styles.content}>
                <h1 className={styles.title}>{titlePage}</h1>
                <div className={styles.tools}>
                    <div className={styles['actions']}>
                        <button type="button" className={styles['action']}>
                            <CgMathPlus className={styles['action__icon']} />
                            <p className={styles['action__text']}>Add anime</p>
                        </button>

                        <button type="button" className={styles['action']}>
                            <MdEditNote className={styles['action__icon']} />
                            <p className={styles['action__text']}>Edit list</p>
                        </button>
                    </div>
                    <div className={styles['filters']}>filters</div>
                </div>
                <div className={`${styles['cards-wrapper']} ${styles['cards-wrapper--01']}`}>
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
            </div>
        );
    }

    if (contentType === "nextAnimes") {
        return (
            <div className={styles.content}>
                <h1 className={styles.title}>{titlePage}</h1>
                <div className={styles.tools}>
                    <div className={styles['actions']}>
                        <button type="button" className={styles['action']}>
                            <CgMathPlus className={styles['action__icon']} />
                            <p className={styles['action__text']}>Add anime</p>
                        </button>

                        <button type="button" className={styles['action']}>
                            <MdEditNote className={styles['action__icon']} />
                            <p className={styles['action__text']}>Edit list</p>
                        </button>
                    </div>
                    <div className={styles['filters']}>filters</div>
                </div>
                <div className={`${styles['cards-wrapper']} ${styles['cards-wrapper--02']}`}>
                    {
                        animeNextList.map((anime, index) => (
                            <div key={index} className={styles['simple-card']}>
                                <p className={styles['simple-card__text']}>{anime}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Content;
