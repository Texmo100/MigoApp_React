import React, { useContext } from "react";
import AppContext from "../../../store/AppContext";
import Card from '../../Card/Card';
import { CgMathPlus } from 'react-icons/cg';
import { MdEditNote } from 'react-icons/md';
import styles from "./Content.module.css";
import SideAction from "../SideAction/SideAction";

const Content = ({ titlePage, contentType }) => {
    const { animeWatchList, nextAnimeList, onSelectHandler, isSideActionShown, onSideActionHandler } = useContext(AppContext);

    let isAnimeWatchListEmpty = animeWatchList.length === 0;
    let isNextAnimeListEmpty = nextAnimeList.length === 0;

    const selectHandler = (event) => {
        const { id, value } = event.target;
        onSelectHandler(id, value);
    }

    const onOpenHandler = () => {
        onSideActionHandler('open');
    }

    const onCloseHandler = () => {
        onSideActionHandler('close');
    }

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
                <SideAction isShow={isSideActionShown} onClose={onCloseHandler} />
                
                <h1 className={styles.title}>{titlePage}</h1>
                <div className={styles.tools}>
                    <div className={styles['actions']}>
                        <button type="button" className={styles['action']} onClick={onOpenHandler}>
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
                            <select id="status" className={styles['filter-input']} onChange={selectHandler}>
                                <option hidden value="">select an option</option>
                                <option value="">all</option>
                                <option value="in progress">in progress</option>
                                <option value="completed">completed</option>
                                <option value="pending">pending</option>
                            </select>
                        </div>

                        <div className={styles['filter']}>
                            <label className={styles['filter-label']}>Order by</label>
                            <select id="order01" className={styles['filter-input']} onChange={selectHandler}>
                                <option hidden value="">select an option</option>
                                <option value="">all</option>
                                <option value="title" className={styles['filter-input__option']}>title</option>
                                <option value="score" className={styles['filter-input__option']}>score</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`${styles['cards-wrapper']} ${styles['cards-wrapper--01']}`}>
                    {
                        !isAnimeWatchListEmpty ?
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
                        :
                        <p className={styles['not-found-message']}>no content found</p>
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
                            <select id="order02" className={styles['filter-input']} onChange={selectHandler}>
                                <option hidden value="">select an option</option>
                                <option value="">all</option>
                                <option value="ascending" className={styles['filter-input__option']}>ascending</option>
                                <option value="descending" className={styles['filter-input__option']}>descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`${styles['cards-wrapper']} ${styles['cards-wrapper--02']}`}>
                    {
                        !isNextAnimeListEmpty ?
                        nextAnimeList.map((anime, index) => (
                            <div key={index} className={styles['simple-card']}>
                                <p className={styles['simple-card__text']}>{anime}</p>
                            </div>
                        ))
                        :
                        <p className={styles['not-found-message']}>no content found</p>
                    }
                </div>
            </div>
        );
    }
}

export default Content;
