import React, { useState, useContext } from 'react';
import AppContext from '../../../store/AppContext';
import Sidebar from '../Sidebar/Sidebar';
import { CgMenuLeftAlt, CgShapeTriangle, CgSearch } from 'react-icons/cg';
import styles from './Header.module.css';

const Header = () => {
    const [isShow, setIsShow] = useState(false);

    const { optionSelected } = useContext(AppContext);

    const buttonHandler = () => {
        setIsShow(!isShow);
    }

    const placeHolderHandler = () => {
        if(optionSelected === "Watch List") {
            return 'search anime'
        }

        if(optionSelected === "Next animes") {
            return 'search next anime'
        }

        if(!optionSelected) {
            return 'select an option on the sidebar menu'
        }
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
                    placeholder={placeHolderHandler()}
                    disabled={!optionSelected}
                />
            </div>
            <CgShapeTriangle className={styles['migo-icon']}/>
        </div>
    );
}

export default Header;
