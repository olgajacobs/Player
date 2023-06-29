import {useState} from "react";
import './Filter.module.css';
import './filter.css';


// Подготовка тестового плейлиста

import tempPlayList from "../../../tempPlayList";

const songFilter=tempPlayList.map(song=><a href="http://" key={song.id}>{song.name}</a>);
let yearFilter=Array.from(new Set(tempPlayList.map(song=>song.release_date.substring(0,4)))).sort();
    yearFilter=yearFilter.map((releaseData)=><a href="http://" key={releaseData}>{releaseData}</a>);
let genreFilter=Array.from(new Set(tempPlayList.map(song=>song.genre))).sort();
    genreFilter=genreFilter.map((genre)=><a href="http://" key={genre}>{genre}</a>);

function Filter()
{
    const [buttons,setButtons]=useState([false,false,false])

    function buttonClick(buttonNumber){
        const tempArray=[false,false,false]
        tempArray[buttonNumber]=!buttons[buttonNumber];
        setButtons(tempArray);
    }

    return(
        
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>

            <div className="dropdown">
                <button type="button" className={`filter__button _btn-text ${buttons[0]?"_btn-color":""}`} onClick={()=>buttonClick(0)}>исполнителю</button>
                <div id="myDropdown" className={`dropdown-content ${buttons[0]?"show":""}`}>
                    {songFilter}
                </div>
            </div>
            <div className="dropdown">
                <button type="button" className={`filter__button _btn-text ${buttons[1]?"_btn-color":""}`} onClick={()=>buttonClick(1)}>году выпуска</button>
                <div id="myDropdown" className={`dropdown-content ${buttons[1]?"show":""}`}>
                    {yearFilter}
                </div>
            </div>
            <div className="dropdown">
                <button type="button" className={`filter__button _btn-text ${buttons[2]?"_btn-color":""}`} onClick={()=>buttonClick(2)}>жанру</button>
                <div id="myDropdown" className={`dropdown-content ${buttons[2]?"show":""}`}>
                    {genreFilter}
                </div>
            </div>
          
        </div>
    )

}
export default Filter