import React from 'react';
import styles from './SideAction.module.css';

const SideAction = ({ isShow, onClose }) => {
    return (
        <div className={`${styles['side-action']} ${isShow ? styles['side-action--active'] : styles['side-action--inactive']}`}>
            <button type='button' onClick={onClose}>Close side action</button>
        </div>
    );
}

export default SideAction;
