import React from 'react';
import SidebarButton from './SidebarButton';
import styles from './SidebarContent.module.css';

const SidebarContent = () => {
    return (
        <ul className={styles['sidebar-content']}>
            <SidebarButton size="large" type="option" text="option 1" />
            <SidebarButton size="large" type="option" text="option 2" />
            <SidebarButton size="large" type="option" text="option 3" />
            <SidebarButton size="large" type="option" text="option 4" />
        </ul>
    );
}

export default SidebarContent;
