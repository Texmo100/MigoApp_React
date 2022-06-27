import React from 'react';
import AddAnimeForm from '../../AddAnimeForm/AddAnimeForm';
import { CgClose } from 'react-icons/cg';
import styles from './SideAction.module.css';

const SideAction = ({ isShow, onClose }) => {
    return (
        <div className={`${styles['side-action']} ${isShow ? styles['side-action--active'] : styles['side-action--inactive']}`}>
            <div className={styles['sa-header']}>
                <button type='button' className={styles['close-btn']} onClick={onClose}>
                    <CgClose />
                </button>
            </div>

            <div className={styles['sa-body']}>
                <p className={styles['sa-title']}>Add anime</p>
                <AddAnimeForm />
            </div>

            <div className={styles['sa-footer']}>
                
            </div>
        </div>
    );
}

export default SideAction;
