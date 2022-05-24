import React from "react";
import SidebarContent from "./SidebarContent";
import SidebarButton from "./SidebarButton";
import styles from './Sidebar.module.css';

const Sidebar = ({ isShow, buttonHandler }) => {
    return (
        <nav className={`${styles.sidebar} ${isShow ? styles['sidebar--active'] : styles['sidebar--inactive']}`}>
            <SidebarButton size="small" type="back" buttonHandler={buttonHandler} />
            <SidebarButton size="small" type="icon" />
            <div className={styles['migo-title']}>
                <p>migo</p>
            </div>
            <SidebarContent buttonHandler={buttonHandler} />
            <SidebarButton size="large" type="settings" />
        </nav>
    );
}

export default Sidebar;
