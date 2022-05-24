import React from "react";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import { CgMathPlus } from 'react-icons/cg';
import { MdEditNote } from 'react-icons/md';
import styles from "./Content.module.css";

const Content = ({ titlePage, contentType }) => {

    if(contentType === "anime") {
        return (
            <div className={styles.content}>
                <h1 className={styles.title}>{ titlePage }</h1>
                <div className={styles.tools}>
                    <div className={styles['actions']}>
                        <button type="button" className={styles['action']}>
                            <CgMathPlus className={styles['action__icon']}/>
                            <p className={styles['action__text']}>Add anime</p>
                        </button>
    
                        <button type="button" className={styles['action']}>
                            <MdEditNote className={styles['action__icon']}/>
                            <p className={styles['action__text']}>Edit list</p>
                        </button>
                    </div>
                    <div className={styles['filters']}>filters</div>
                </div>
                <CardsWrapper />
            </div>
        );
    }

    if(contentType === "nextAnimes") {
        return (
            <div className={styles.content}>
                <h1 className={styles.title}>{ titlePage }</h1>
                <div className={styles.tools}>
                    <div className={styles['actions']}>
                        <button type="button" className={styles['action']}>
                            <CgMathPlus className={styles['action__icon']}/>
                            <p className={styles['action__text']}>Add anime</p>
                        </button>
    
                        <button type="button" className={styles['action']}>
                            <MdEditNote className={styles['action__icon']}/>
                            <p className={styles['action__text']}>Edit list</p>
                        </button>
                    </div>
                    <div className={styles['filters']}>filters</div>
                </div>
                <div className={styles['cards-area']}>cards area</div>
            </div>
        );
    }
}

export default Content;
