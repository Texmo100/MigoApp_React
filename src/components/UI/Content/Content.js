import React, { useContext } from "react";
import AppContext from "../../../store/AppContext";
import Card from '../../Card/Card';
import { CgMathPlus } from 'react-icons/cg';
import { MdEditNote } from 'react-icons/md';
import styles from "./Content.module.css";

const Content = ({ titlePage, contentType }) => {
    const { animeWatchList, nextAnimeList } = useContext(AppContext);

    if (contentType === "home") {
        return (
            <div className={styles.content}>
                <h1 className={styles.title}>{titlePage}</h1>
            </div>
        );
    }

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
                    <div className={styles['filters']}>
                        <div className={styles['filter']}>
                            <label className={styles['filter-label']}>Filter by status</label>
                            <select className={styles['filter-input']}>
                                <option value="inprogress" className={styles['filter-input__option']}>in progress</option>
                                <option value="completed" className={styles['filter-input__option']}>completed</option>
                                <option value="pending" className={styles['filter-input__option']}>pending</option>
                            </select>
                        </div>

                        <div className={styles['filter']}>
                            <label className={styles['filter-label']}>Order by</label>
                            <select className={styles['filter-input']}>
                                <option value="title" className={styles['filter-input__option']}>title</option>
                                <option value="score" className={styles['filter-input__option']}>score</option>
                            </select>
                        </div>
                    </div>
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
                    <div className={styles['filters']}>
                        <div className={styles['filter']}>
                            <label className={styles['filter-label']}>Order list</label>
                            <select className={styles['filter-input']}>
                                <option value="ascending" className={styles['filter-input__option']}>ascending</option>
                                <option value="descending" className={styles['filter-input__option']}>descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`${styles['cards-wrapper']} ${styles['cards-wrapper--02']}`}>
                    {
                        nextAnimeList.map((anime, index) => (
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
