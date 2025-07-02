import React from 'react'
import { useDispatch } from 'react-redux'
import { answerQuestion } from '../features/questionnaire/questionnaireSlice'
import styles from './Question.module.css'

const Question = ({ question }) => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(
      answerQuestion({ questionId: question.id, answer: e.target.value })
    )
  }

  return (
    <div className={styles.question}>
      <h3>{question.text}</h3>
      <label>
        <input
          type="radio"
          value="Option 1"
          checked={question.selected === 'Option 1'}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Option 2"
          checked={question.selected === 'Option 2'}
          onChange={handleChange}
        />
        Option 2
      </label>
    </div>
  )
}

export default Question
