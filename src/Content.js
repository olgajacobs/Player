// import React from "react";
import './css/style.css';

import PlayListItem from './PlayListItem'
import Icon from "./Icon"

function Content(){
    return(
      <div className="centerblock__content">
         <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <Icon classDiv="playlist-title__col col04" classSvg="playlist-title__svg" iconName="watch" alt="time" />
        </div>
        <div className="content__playlist playlist">
            <PlayListItem titleName="Guilt" authorName="Nero" albumName="Welcome Reality" time="04:44" />
            <PlayListItem titleName="Elektro" authorName="Dynoro, Outwork, Mr. Gee" albumName="Elektro" time="02:22" />
            <PlayListItem titleName="I’m Fire" authorName="Ali Bakgor" albumName="I’m Fire" time="02:44" />
            <PlayListItem titleName="Non Stop" commentName ="(Remix)" authorName="Стоункат, Psychopath" albumName="Non Stop"  time="04:12" />
            <PlayListItem titleName="Run Run" commentName ="(feat. AR/CO)" authorName="Jaded, Will Clarke, AR/CO" albumName="Run Run" time="02:54" />
            <PlayListItem titleName="Eyes on Fire"  commentName ="(Zeds Dead Remix)" authorName="Blue Foundation, Zeds Dead" albumName="Eyes on Fire" time="05:20" />
            
       </div>
      </div>
        
    )

    }
    export default Content