import { useSelector } from 'react-redux'
import styles from './Result.module.css'

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score)

  return (
    <div className={styles.result}>
      {score !== null && <h2>Your Score: {score}</h2>}
    </div>
  )
}

export default Result
