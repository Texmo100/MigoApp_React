import React from 'react';
import styles from './AppWrapper.module.css';

const AppWrapper = props => {
    return(
        <main className={styles['app-wrapper']}>
            { props.children }
        </main>
    );
}

export default AppWrapper;
