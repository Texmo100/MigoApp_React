import React from 'react';
import styles from './SideAction.module.css';
import { CgClose } from 'react-icons/cg';

const SideAction = ({ isShow, onClose }) => {
    return (
        <div className={`${styles['side-action']} ${isShow ? styles['side-action--active'] : styles['side-action--inactive']}`}>
            <div className={styles['sa-header']}>
                <button type='button' className={styles['close-btn']} onClick={onClose}>
                    <CgClose />
                </button>
            </div>

            <div className={styles['sa-body']}>
                <p className={styles['sa-title']}>Page Action title</p>
                <form className={styles['form']}>
                    <div className={styles['form-input']}>
                        <label className={styles['form-input__label']}>Input label</label>
                        <input
                            type='text'
                            className={styles['form-input__input']}
                        />
                    </div>

                    <div className={styles['form-input']}>
                        <label className={styles['form-input__label']}>Input label</label>
                        <input
                            type='text'
                            className={styles['form-input__input']}
                        />
                    </div>
                </form>
            </div>

            <div className={styles['sa-footer']}>
                
            </div>
        </div>
    );
}

export default SideAction;
