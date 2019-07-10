import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../assets/icons/icon-magnifier-grey.svg';

const search = (props) => {
    return (
        <div className={styles['app-search']}>
            <span className={styles['app-search-icon']}>
                <img src={searchIcon} alt="search-icon"/>
            </span>
            <input 
            className={styles['search-input']}
            type="text"
            onChange={props.changed}
            placeholder="Search movies..."/>
        </div>
    );
}

export default search;