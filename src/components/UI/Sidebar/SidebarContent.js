import React from 'react';
import SidebarButton from './SidebarButton';
import styles from './SidebarContent.module.css';

const SidebarContent = ({ buttonHandler }) => {
    return (
        <div className={styles['sidebar-content']}>
            <SidebarButton
                size="large"
                type="option"
                text="Watch List"
                redirectionPath="animeWatchList"
                buttonHandler={buttonHandler}
            />
            
            <SidebarButton
                size="large"
                type="option"
                text="Next animes"
                redirectionPath="nextAnimesList"
                buttonHandler={buttonHandler}
            />
        </div>
    );
}

export default SidebarContent;
