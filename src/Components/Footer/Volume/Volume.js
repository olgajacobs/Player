import { useState, useEffect } from 'react'
import styles from './Volume.module.css'
import Icon from '../../Icon/Icon'

function Volume({ changeVolume }) {
  const [currentVolume, setCurrentVolume] = useState(25)

  const handleChangeVolume = (e) => {
    changeVolume(Number(e.target.value) / 100)
    setCurrentVolume(e.target.value)
  }
  useEffect(() => {
    changeVolume(0.25)
  }, [])
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
          name="volume"
          min="0"
          max="100"
          value={String(currentVolume)}
          onChange={(e) => handleChangeVolume(e)}
        />
      </div>
    </div>
  )
}
export default Volume
