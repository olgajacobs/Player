import styles from './RightBlockItem.module.css'

function RightBlockItem({
  loading,
  href = 'http://',
  fileName = '',
  altName = '',
}) {
  if (loading) return <div className={styles.playlist} />
  return (
    <div className={styles.playlist}>
      <a className={styles.playlist__link} href={href}>
        <img
          className={styles.playlist__img}
          src={`img/${fileName}.png`}
          alt={altName}
        />
      </a>
    </div>
  )
}

export default RightBlockItem
