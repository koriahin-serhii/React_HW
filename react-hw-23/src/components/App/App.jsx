import { Link, Routes, Route } from 'react-router-dom'
import '../../styles/App.css'
import styles from './App.module.css'
import HomePage from '../../pages/HomePage/HomePage'
import AuthorizationPage from '../../pages/AuthorizationPage/AuthorizationPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage'

function App() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          Главная
        </Link>
        <Link to="/login" className={styles.navLink}>
          Вход
        </Link>
        <Link to="/register" className={styles.navLink}>
          Регистрация
        </Link>
        <Link to="/user" className={styles.navLink}>
          Профиль
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthorizationPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className={styles.notFound}>
              <h1>Страница не найдена</h1>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
