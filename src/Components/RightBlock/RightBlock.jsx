// import React from "react";
import RightBlockItem from './RightBlockItem/RigthBlockItem'
import styles from './RightBlock.module.css'

function RightBlock({ isLoading }) {
  const personal = isLoading ? '' : 'Sergey.Ivanov'

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <p className={styles.user__name}>{personal}</p>
        <div className={styles.user__avatar} />
      </div>
      <div className={styles.playlist__block}>
        <RightBlockItem loading={isLoading} id="1" altName="day's playlist" />
        <RightBlockItem loading={isLoading} id="2" altName="day's playlist" />
        <RightBlockItem loading={isLoading} id="3" altName="day's playlist" />
      </div>
    </div>
  )
}
export default RightBlock
