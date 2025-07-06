import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/authSlices'
import styles from './UserProfilePage.module.css'

const UserProfilePage = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Профиль пользователя</h1>
      <div className={styles.userInfo}>
        <p className={styles.welcomeText}>
          Добро пожаловать в ваш личный кабинет! Здесь вы можете управлять
          своими данными и настройками.
        </p>
      </div>
      <button
        className={styles.logoutButton}
        onClick={() => dispatch(logOut())}
      >
        Выйти
      </button>
    </div>
  )
}

export default UserProfilePage
