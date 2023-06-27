// import React from "react";
import './css/style.css';


function SidebarItem({href="http://",fileName="",altName=""}){
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
    export default SidebarItem