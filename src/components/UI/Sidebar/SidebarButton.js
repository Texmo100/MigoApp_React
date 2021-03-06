import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuMotion, CgShapeTriangle } from 'react-icons/cg';
import { RiSettings3Fill } from 'react-icons/ri';
import styles from './SidebarButton.module.css';

const SidebarButton = ({ size, type, buttonHandler, text, redirectionPath }) => {
    if (size === "small" && type === "back") {
        return (
            <button type="button" onClick={buttonHandler} className={`${styles['sidebar-button']} ${styles['sidebar-button--small-01']}`}>
                <CgMenuMotion className={styles['sidebar-button__icon']} />
            </button>
        );
    }

    if (size === "small" && type === "icon") {
        return (
            <button className={`${styles['sidebar-button']} ${styles['sidebar-button--small-02']}`}>
                <CgShapeTriangle className={`${styles['sidebar-button__icon']} ${styles['sidebar-button__icon--180rotate']}`} />
            </button>
        );
    }

    if (size === "large" && type === "settings") {
        return (
            <button type="button" onClick={buttonHandler} className={`${styles['sidebar-button']} ${styles['sidebar-button--large-01']}`}>
                <RiSettings3Fill className={styles['sidebar-button__icon']} />
                <p className={styles['sidebar-button__text']}>Settings</p>
            </button>
        );
    }

    if (size === "large" && type === "option") {
        return (
            <Link to={redirectionPath} onClick={buttonHandler} className={`${styles['sidebar-button']} ${styles['sidebar-button--large-02']}`}>
                <CgShapeTriangle className={styles['sidebar-button__icon']} />
                <p className={styles['sidebar-button__text']}>{text}</p>
            </Link>
        );
    }
}

export default SidebarButton;
