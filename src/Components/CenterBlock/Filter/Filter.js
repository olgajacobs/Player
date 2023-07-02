import {useState} from "react";
import styles from './Filter.module.css';
// import './Filter.module.css';



// Подготовка тестового плейлиста

import tempPlayList from "../../../tempPlayList";

const songFilter=tempPlayList.map(song=><a className={styles.filterItems} href="http://" key={song.id}>{song.name}</a>);
let yearFilter=Array.from(new Set(tempPlayList.map(song=>song.release_date.substring(0,4)))).sort();
    yearFilter=yearFilter.map((releaseData)=><a className={styles.filterItems} href="http://" key={releaseData}>{releaseData}</a>);
let genreFilter=Array.from(new Set(tempPlayList.map(song=>song.genre))).sort();
    genreFilter=genreFilter.map((genre)=><a className={styles.filterItems} href="http://" key={genre}>{genre}</a>);

function Filter()
{
    const [buttons,setButtons]=useState([false,false,false])

    function buttonClick(buttonNumber){
        const tempArray=[false,false,false]
        tempArray[buttonNumber]=!buttons[buttonNumber];
        setButtons(tempArray);
    }

    return(
        
        <div className={styles.main}>
            <div className={styles.filter__title}>Искать по:</div>

            <div className={styles.dropdown}>
                <button type="button" className={`${styles.filter__button} ${buttons[0]?styles.filter_btnSelected:""}`} onClick={()=>buttonClick(0)}>исполнителю</button>
                <div id="myDropdown" className={`${styles.dropdownContent} ${buttons[0]?styles.show:""}`}>
                    {songFilter}
                </div>
            </div>
            <div className={styles.dropdown}>
                <button type="button" className={`${styles.filter__button} ${buttons[1]?styles.filter_btnSelected:""}`}onClick={()=>buttonClick(1)}>году выпуска</button>
                <div id="myDropdown" className={`${styles.dropdownContent} ${buttons[1]?styles.show:""}`}>
                    {yearFilter}
                </div>
            </div>
            <div className={styles.dropdown}>
                <button type="button" className={`${styles.filter__button} ${buttons[2]?styles.filter_btnSelected:""}`} onClick={()=>buttonClick(2)}>жанру</button>
                <div id="myDropdown" className={`${styles.dropdownContent} ${buttons[2]?styles.show:""}`}>
                    {genreFilter}
                </div>
            </div>
          
        </div>
    )

}
export default Filter