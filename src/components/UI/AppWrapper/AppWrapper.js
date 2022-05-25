import React from 'react';
import AppProvider from '../../../store/AppProvider';
import styles from './AppWrapper.module.css';

const AppWrapper = props => {
    return (
        <AppProvider>
            <div className={styles['app-wrapper']}>
                {props.children}
            </div>
        </AppProvider>
    );
}

export default AppWrapper;
