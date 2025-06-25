import styles from './Articles.module.css'
import { Link } from 'react-router-dom'

const Articles = () => {
  return (
    <div className={styles.articles}>
      <h1>Список статей</h1>
      <ul>
        <li>
          <Link to="/articles/1">Статья 1</Link>
        </li>
        <li>
          <Link to="/articles/2">Статья 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Articles
