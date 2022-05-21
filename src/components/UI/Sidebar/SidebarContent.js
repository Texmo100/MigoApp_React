import React from 'react';
import SidebarButton from './SidebarButton';
import styles from './SidebarContent.module.css';

const SidebarContent = () => {
    return (
        <ul className={styles['sidebar-content']}>
            <SidebarButton size="large" type="option" text="Watch list" />
            <SidebarButton size="large" type="option" text="Next animes" />
        </ul>
    );
}

export default SidebarContent;
