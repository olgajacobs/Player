// import React from "react";
import './css/style.css';
import Icon from './Icon'

function PlayListItem({titleName="",authorName="",albumName="",commentName="",hrefTitle="http://",hrefAuthor="http://",hrefAlbum="http://",time=""}){
    return(
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <Icon classDiv="track__title-image" classSvg="track__title-svg" iconName="note" alt="music" />
                    <div className="track__title-text">
                        <a className="track__title-link" href={hrefTitle}>{titleName} <span className="track__title-span">{commentName}</span></a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href={hrefAuthor}>{authorName}</a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href={hrefAlbum}>{albumName}</a>
                </div>
                <div className="track__time">
                <Icon classDiv="" classSvg="track__time-svg" iconName="like" alt="time" />
                    
                    <span className="track__time-text">{time}</span>
                </div>
            </div>
      </div>
        
    )

    }
    export default PlayListItem