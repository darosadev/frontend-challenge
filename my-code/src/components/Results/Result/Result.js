import React from 'react';
import styles from './Result.module.css';

const result = ( props ) => {
    return (
        <div>
            <p className={styles.title}>
               {props.title} 
            </p>
        </div>
    )
};

export default result;