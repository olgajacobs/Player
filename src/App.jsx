import AppRouts from './routes'
import styles from './App.module.css'

function App() {
  //   const isLogined = Boolean(Cookies.get('token'))
  //   console.log(`App: isLogined- ${isLogined} `)
  return (
    <div className={styles.container}>
      <AppRouts />
    </div>
  )
}

export default App
