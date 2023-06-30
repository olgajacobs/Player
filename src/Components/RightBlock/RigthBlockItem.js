// import React from "react";
import './style.css';


function RightBlockItem({loading,href="http://",fileName="",altName=""}){
    if( loading) return <div className="sidebar__item"/>
    return(
            <div className="sidebar__item">
                <a className="sidebar__link" href={href}>
                <img
                    className="sidebar__img"
                    src={`img/${fileName}.png`}
                    alt={altName}/>
                </a>
            </div>
    )
}

export default RightBlockItem