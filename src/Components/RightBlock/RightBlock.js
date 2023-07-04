// import React from "react";
import RightBlockItem from './RightBlockItem/RigthBlockItem'
import styles from './RightBlock.module.css'

function RightBlock({ loading }) {
  const personal = loading ? '' : 'Sergey.Ivanov'

  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <p className={styles.user__name}>{personal}</p>
        <div className={styles.user__avatar} />
      </div>
      <div className={styles.playlist__block}>
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
