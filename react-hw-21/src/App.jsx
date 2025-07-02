import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Question from './components/Question'
import Result from './components/Result.jsx'
import { submitAnswers } from './features/questionnaire/questionnaireSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const questions = useSelector((state) => state.questionnaire.questions)

  const handleSubmit = () => {
    dispatch(submitAnswers())
  }

  return (
    <div className="app">
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <Result />
    </div>
  )
}

export default App
