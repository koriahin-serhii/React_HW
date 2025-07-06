import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <p className={styles.description}>
        Это главная страница нашего приложения. Здесь вы можете авторизоваться
        или зарегистрироваться для доступа к своему профилю.
      </p>
    </div>
  )
}

export default HomePage
