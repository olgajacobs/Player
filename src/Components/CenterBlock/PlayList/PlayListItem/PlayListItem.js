// import React from "react";
import styles from './PlayListItem.module.css';
import Icon from '../../../../Icon'

function PlayListItem({loading, titleName="",authorName="",albumName="",commentName="",hrefTitle="",hrefAuthor="",hrefAlbum="",time=""}){
    const trackName  =". 1                       ";
    const trackAuthor=".2                  ";
    const trackAlbom =".3                  ";
    const trackTime  ="00:00";

    if(loading) return(
        <div className={styles.main}>
        <div className="playlist__track track">
            <div className={`${styles.track__title} ${styles.grey}`}>
                <Icon classDiv="track__title-image" classSvg="track__title-svg" iconName="note" alt="music" />
                <div className="track__title-text">{trackName } </div>                
            </div>
            <div className={`${styles.track__author} ${styles.grey}`}>
            {trackAuthor}
            </div>
            <div className={`${styles.track__album} ${styles.grey}`}>
            {trackAlbom}
            </div>
            <div className="">
            <Icon classDiv="" classSvg="track__time-svg" iconName="like" alt="time" />
                
                <span className={`${styles.track__time} ${styles.grey}`}>{trackTime}</span>
            </div>
        </div>
  </div>  
    )
    return(
        <div className={styles.main}>
            <div className="playlist__track track">
                <div className="track__title">
                    <Icon classDiv="track__title-image" classSvg="track__title-svg" iconName="note" alt="music" />
                    <div className="track__title-text">
                        <a className="track__title-link" href={hrefTitle}>{titleName} <span className="track__title-span">{commentName}</span></a>
                    </div>
                </div>
                <div className={styles.track__author}>
                    <a className="track__author-link" href={hrefAuthor}>{authorName}</a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href={hrefAlbum}>{albumName}</a>
                </div>
                <div className="">
                <Icon classDiv="" classSvg="track__time-svg" iconName="like" alt="time" />
                    
                    <span className="track__time">{time}</span>
                </div>
            </div>
      </div>
        
    )

    }
    export default PlayListItem