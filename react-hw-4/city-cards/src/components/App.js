import React, { useState } from 'react'
import CitySelector from '../components/CitySelector'
import CityCard from '../components/CityCards'
import styles from '../styles/App.module.css'

function App() {
  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <CitySelector onSelect={setSelectedCity} />
        <CityCard city={selectedCity} />
      </div>
    </div>
  )
}

export default App
