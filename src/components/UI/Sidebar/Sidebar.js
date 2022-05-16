import React from "react";
import { CgMenuMotion } from 'react-icons/cg';
import styles from './Sidebar.module.css';

const Sidebar = ({ isShow, buttonHandler }) => {
    return (
        <nav className={`${styles.sidebar} ${isShow ? styles['sidebar--active'] : styles['sidebar--inactive']}`}>
            <button type="button" onClick={buttonHandler} className={styles['back-button']}>
                <CgMenuMotion className={styles['back-button__icon']} />
            </button>
        </nav>
    );
}

export default Sidebar;
