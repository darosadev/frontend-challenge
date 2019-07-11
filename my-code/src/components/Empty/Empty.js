import React from 'react';
import style from './Empty.module.css';

import emptyImg from '../../assets/illustrations/illustration-empty-state@2x.png'


const empty = () => {
    return (
        <div className={style['no-results']}>
            <div className={style['no-results-img']}>
                <img src={emptyImg} alt="No Results"/>
            </div>
            <div className={style['no-results-text']}>
                <h4>
                    Don’t know what to search?
                </h4>
                <h5>
                    Here’s an offer you can’t refuse
                </h5>
            </div>
        </div>
    )
}

export default empty;