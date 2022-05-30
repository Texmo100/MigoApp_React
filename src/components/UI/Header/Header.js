import React, { useState, useContext } from 'react';
import AppContext from '../../../store/AppContext';
import Sidebar from '../Sidebar/Sidebar';
import { CgMenuLeftAlt, CgShapeTriangle, CgSearch } from 'react-icons/cg';
import styles from './Header.module.css';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isShow, setIsShow] = useState(false);

    const { optionSelected, searchHandler } = useContext(AppContext);

    const inputHandler = event => {
        const { value } = event.target;
        setSearchTerm(value);
        searchHandler(value);
    }

    const buttonHandler = () => {
        setIsShow(!isShow);
    }

    const placeHolderHandler = () => {
        if(optionSelected === "watch list") {
            return 'search anime';
        }

        if(optionSelected === "next animes") {
            return 'search next anime';
        }
    }

    let isInputInactive = !optionSelected || optionSelected === "home";

    return (
        <div className={styles.header}>
            <Sidebar isShow={isShow} onButtonHandler={buttonHandler} />
            <button type='button' onClick={buttonHandler} className={styles['menu-button']}>
                <CgMenuLeftAlt className={styles['menu-button__icon']} />
            </button>
            <div className={`${styles['search-input']} ${isInputInactive ? styles['search-input--inactive'] : styles['search-input--active']}`}>
                <CgSearch className={styles['search-input__icon']}/>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={inputHandler}
                    className={styles['search-input__input']}
                    placeholder={placeHolderHandler()}
                />
            </div>
            <CgShapeTriangle className={styles['migo-icon']}/>
        </div>
    );
}

export default Header;
