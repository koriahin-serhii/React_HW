import React, { useState } from 'react'
import styles from './App.module.css'
import ValueDisplay from './components/ValueDisplay'

function App() {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Value Tracker</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите значение"
        className={styles.input}
      />
      <ValueDisplay value={value} />
    </div>
  )
}

export default App
