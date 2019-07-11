import React from 'react';
import styles from './Result.module.css';

const result = ( props ) => {
    return (
        <div className={styles.movieWhole}>
            <div className={styles.movieFront}>
                <img src={props.poster} alt="Movie Poster"/>
            </div>
            <div className={styles.movieBack}>
                <div className={styles.movieBackBlock}>
                    <p className={styles.title}>
                        {props.title} 
                    </p>
                    <p className={styles.year}>
                        {props.year} 
                    </p>
                </div>
            </div>
        </div>
    )
};

export default result;