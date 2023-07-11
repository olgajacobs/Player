// import React from "react";
import styles from './Volume.module.css'
import Icon from '../../Icon/Icon'

function Volume() {
  return (
    <div className={styles.main}>
      <Icon
        classDiv="volume__image"
        classSvg="volume__svg"
        iconName="volume"
        alt="volume"
      />
      <div className={styles.volume__progress}>
        <input
          className={styles.volume__progressLine}
          type="range"
          name="range"
        />
      </div>
    </div>
  )
}
export default Volume
