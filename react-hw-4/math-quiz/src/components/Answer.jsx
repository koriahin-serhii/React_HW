import React, { useState } from 'react'

const Answer = ({ onSubmit }) => {
  const [answer, setAnswer] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(answer)
    setAnswer('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your answer"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Answer
