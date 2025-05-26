import React, { useState } from 'react'
import Answer from './Answer'
import styles from '../styles/mathQuiz.module.css'

const MathQuiz = () => {
  const [a, setA] = useState(generateNumber())
  const [b, setB] = useState(generateNumber())
  const [score, setScore] = useState(0)

  function generateNumber() {
    return Math.floor(Math.random() * 10) + 1
  }

  function updatePoints(answer) {
    const correctAnswer = a + b
    if (parseInt(answer) === correctAnswer) {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }
    setA(generateNumber())
    setB(generateNumber())
  }

  return (
    <div className= {styles.quiz_container}>
      <h1>Ваши очки: {score}</h1>
      <h2>
        {a} + {b} = ?
      </h2>
      <Answer onSubmit={updatePoints} />
    </div>
  )
}

export default MathQuiz
