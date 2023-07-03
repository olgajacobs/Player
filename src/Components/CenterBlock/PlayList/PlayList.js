// import React from "react";
import styles from './PlayList.module.css';

import PlayListItem from './PlayListItem/PlayListItem'
import Icon from "../../Icon/Icon"

function PlayList({loading}){
    return(
      <div className={styles.main}>
         <div className={styles.content__title}>
            <div className={`${styles.content__titleCol} ${styles.col01}`}>ТРЕК</div>
            <div className={`${styles.content__titleCol} ${styles.col02}`}>ИСПОЛНИТЕЛЬ</div>
            <div className={`${styles.content__titleCol} ${styles.col03}`}>АЛЬБОМ</div>
            <Icon classDiv={`${styles.content__titleCol} ${styles.col04}`} classSvg="playlist-title__svg" iconName="watch" alt="time" />
        </div>
        {loading?
        <div className={styles.content__playlist}>
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
            <PlayListItem loading={loading} />
        </div>
        :
        <div className={styles.content__playlist}>
            <PlayListItem titleName="Guilt" authorName="Nero" albumName="Welcome Reality" time="04:44" />
            <PlayListItem titleName="Elektro" authorName="Dynoro, Outwork, Mr. Gee" albumName="Elektro" time="02:22" />
            <PlayListItem titleName="I’m Fire" authorName="Ali Bakgor" albumName="I’m Fire" time="02:44" />
            <PlayListItem titleName="Non Stop" commentName ="(Remix)" authorName="Стоункат, Psychopath" albumName="Non Stop"  time="04:12" />
            <PlayListItem titleName="Run Run" commentName ="(feat. AR/CO)" authorName="Jaded, Will Clarke, AR/CO" albumName="Run Run" time="02:54" />
            <PlayListItem titleName="Eyes on Fire"  commentName ="(Zeds Dead Remix)" authorName="Blue Foundation, Zeds Dead" albumName="Eyes on Fire" time="05:20" />
       </div>
}
      </div>
        
    )

    }
    export default PlayList