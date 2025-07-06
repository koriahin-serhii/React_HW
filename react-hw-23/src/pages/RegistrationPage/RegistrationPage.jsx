import React from 'react'
import { register } from '../../redux/slices/authSlices'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './RegistrationPage.module.css'

const RegistrationPage = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ email, password }))
    setEmail('')
    setPassword('')
    navigate('/login')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
          name="password"
          required
        />
        <button className={styles.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default RegistrationPage
