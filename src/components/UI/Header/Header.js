import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { CgMenuLeftAlt, CgShapeTriangle } from 'react-icons/cg';
import styles from './Header.module.css';

const Header = () => {
    const [isShow, setIsShow] = useState(false);

    const buttonHandler = () => {
        setIsShow(!isShow);
    }

    return (
        <div className={styles.header}>
            <Sidebar isShow={isShow} buttonHandler={buttonHandler} />
            <button type='button' onClick={buttonHandler} className={styles['menu-button']}>
                <CgMenuLeftAlt className={styles['menu-button__icon']} />
            </button>
            <CgShapeTriangle className={styles['migo-icon']}/>
        </div>
    );
}

export default Header;
