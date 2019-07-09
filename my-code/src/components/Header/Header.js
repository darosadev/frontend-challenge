import React from 'react';
import styles from './Header.module.css';

const header = (props) => {
    return (
        <div className={styles['app-header']}>
            <img className={styles['app-logo']}
            alt="logo" src={props.appLogo}/>
        </div>
    );
}

export default header;