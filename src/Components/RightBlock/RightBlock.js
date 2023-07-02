// import React from "react";
import RightBlockItem from './RigthBlockItem'
import './style.css'

function RightBlock({ loading }) {
  const personal = loading ? '' : 'Sergey.Ivanov'
  console.log(loading)
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{personal}</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <RightBlockItem
          loading={loading}
          fileName="playlist01"
          altName="day's playlist"
        />
        <RightBlockItem
          loading={loading}
          fileName="playlist02"
          altName="day's playlist"
        />
        <RightBlockItem
          loading={loading}
          fileName="playlist03"
          altName="day's playlist"
        />
      </div>
    </div>
  )
}
export default RightBlock
