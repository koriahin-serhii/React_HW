import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Главная страница</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/articles">Статьи</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
