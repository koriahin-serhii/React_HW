import React from 'react'
import styles from '../styles/CityCard.module.css'

const CityCards = ({ city }) => {
  if (!city) {
    return null
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{city.name}</h2>
      <img className={styles.image} src={city.imageUrl} alt={city.name} />
      <p className={styles.description}>{city.description}</p>
      <ul className={styles.facts}>
        {city.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityCards
