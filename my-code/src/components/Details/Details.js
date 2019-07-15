import React from 'react';
import styles from './Details.module.css';

const details = (props) => {
    return (
        <div className={props.detailsDivClass} styles="top: 100%; transition: 0,3s top ease-in-out;">
            <div className={styles['details-whole']}>
                <div className={styles['details-go-back']} onClick={props.goBackAction}>
                    <img src={props.goBack} alt='go-back'/>
                </div>
                <div className={styles['details-info']}>
                    <div className={styles['info-top']}>
                        <p className={styles['info-duration']}>{props.duration}</p>
                        <p className={styles['info-year']}>{props.year}</p>
                        <p className={styles['info-rating']}>{props.rating}</p>
                    </div>
                    <div className={styles['info-title']}>
                        <h1>{props.title}</h1>
                    </div>
                    <div className={styles['info-ratings']}>
                        <div className={styles['info-ratings-imdb']}>
                            <img src={props.imdbIcon} alt='Imdb icon'/>
                            <p>{props.imdbRating}</p>
                        </div>
                        <div className={styles['info-ratings-rt']}>
                            <img src={props.rtIcon} alt='Rotten Tomatoes icon'/>
                            <p>{props.rtRating}</p>
                        </div>
                    </div>
                    <div className={styles['more-info']}>
                        <div className={styles['more-info-plot']}>
                            <p className={styles['more-info-title']}>Plot</p>
                            <p className={styles['more-info-text']}>{props.plot}</p>
                        </div>
                        <div className={styles['more-info-cast']}>
                            <p className={styles['more-info-title']}>Cast</p>
                            <p className={styles['more-info-text']}>{props.cast}</p>
                        </div>
                        <div className={styles['more-info-genre']}>
                            <p className={styles['more-info-title']}>Genre</p>
                            <p className={styles['more-info-text']}>{props.genre}</p>
                        </div>
                        <div className={styles['more-info-director']}>
                            <p className={styles['more-info-title']}>Director</p>
                            <p className={styles['more-info-text']}>{props.director}</p>
                        </div>
                    </div>
                    
                </div> 
                <div className={styles['details-poster']}>
                    <img src={props.poster} alt='Movie Poster'/>
                </div> 
            </div> 
        </div>    
    )
}

export default details;