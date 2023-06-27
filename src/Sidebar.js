// import React from "react";
import SidebarItem from './SidebarItem';
import './css/style.css';


function Sidebar(){
    return(
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__avatar" />
            </div>
        <div className="sidebar__block">
            <SidebarItem fileName="playlist01" altName="day's playlist"/>
            <SidebarItem fileName="playlist02" altName="day's playlist"/>
            <SidebarItem fileName="playlist03" altName="day's playlist"/>
        </div>
      </div>
        
    )

    }
    export default Sidebar