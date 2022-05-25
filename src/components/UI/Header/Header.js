import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { CgMenuLeftAlt, CgShapeTriangle, CgSearch } from 'react-icons/cg';
import styles from './Header.module.css';

const Header = () => {
    const [isShow, setIsShow] = useState(false);

    const buttonHandler = () => {
        setIsShow(!isShow);
    }

    return (
        <div className={styles.header}>
            <Sidebar isShow={isShow} onButtonHandler={buttonHandler} />
            <button type='button' onClick={buttonHandler} className={styles['menu-button']}>
                <CgMenuLeftAlt className={styles['menu-button__icon']} />
            </button>
            <div className={styles['search-input']}>
                <CgSearch className={styles['search-input__icon']}/>
                <input
                    type="search"
                    className={styles['search-input__input']}
                    placeholder="search anime"
                />
            </div>
            <CgShapeTriangle className={styles['migo-icon']}/>
        </div>
    );
}

export default Header;
