import styles from './Article.module.css'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Article = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className={styles.article}>
      <nav >
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/articles">Статьи</Link></li>
        </ul>
      </nav>

      <h1>Статья {id}</h1>
      <p>Содержание статьи {id}...</p>
      <p>Текущий путь: /articles/{id}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default Article
