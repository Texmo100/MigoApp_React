import React from 'react';
import styles from './WrapperApp.module.css';

const WrapperApp = props => {
    return(
        <main className={styles['wrapper-app']}>
            { props.children }
        </main>
    );
}

export default WrapperApp;
