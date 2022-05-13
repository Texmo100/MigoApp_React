import React from 'react';
import styles from './WrapperApp.module.css';

const WrapperApp = props => {
    return(
        <div className={styles['wrapper-app']}>
            { props.children }
        </div>
    );
}

export default WrapperApp;
