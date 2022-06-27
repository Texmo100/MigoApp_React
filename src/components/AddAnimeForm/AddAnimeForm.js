import React from 'react';
import styles from './AddAnimeForm.module.css';

const AddAnimeForm = () => {
    return (
        <form className={styles['form']}>
            <div className={`${styles['form-input']} ${styles['form-input--large']}`}>
                <label className={styles['form-input__label']}>Title</label>
                <input
                    type='text'
                    className={styles['form-input__input']}
                    name="title"
                />
            </div>

            <div className={styles['form-input']}>
                <label className={styles['form-input__label']}>Episodes</label>
                <input
                    type='number'
                    className={styles['form-input__input']}
                />
            </div>

            <div className={`${styles['form-input']} ${styles['form-input--small']}`}>
                <label className={styles['form-input__label']}>Seasons</label>
                <input
                    type='number'
                    className={styles['form-input__input']}
                />
            </div>
        </form>
    );
}

export default AddAnimeForm;
