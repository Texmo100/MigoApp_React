import React from "react";
import SidebarButton from "./SidebarButton";
import styles from './Sidebar.module.css';

const Sidebar = ({ isShow, onButtonHandler }) => {
    return (
        <nav className={`${styles.sidebar} ${isShow ? styles['sidebar--active'] : styles['sidebar--inactive']}`}>
            <SidebarButton size="small" type="back" onButtonHandler={onButtonHandler} />
            <SidebarButton size="small" type="icon" />
            <div className={styles['migo-title']}>
                <p>migo</p>
            </div>
            <div className={styles['sidebar-content']}>
                <SidebarButton
                    size="large"
                    type="option"
                    text="Watch List"
                    redirectionPath="animeWatchList"
                    onButtonHandler={onButtonHandler}
                />

                <SidebarButton
                    size="large"
                    type="option"
                    text="Next animes"
                    redirectionPath="nextAnimesList"
                    onButtonHandler={onButtonHandler}
                />
            </div>
            <SidebarButton size="large" type="settings" />
        </nav>
    );
}

export default Sidebar;
