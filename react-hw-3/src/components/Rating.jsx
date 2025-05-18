import React, { useState } from 'react'
import styles from '../styles/Rating.module.css'

const ratingList = [
  'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
  'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
  'https://www.clipartmax.com/png/small/72-728472_owen-4-star-rating.png',
  'https://www.clipartmax.com/png/small/67-677212_i-thought-it-would-be-an-interesting-way-to-find-out-zillow.png',
]

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0)

  const handleRatingChange = (value) => {
    setRatingValue(value)
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={ratingList[ratingValue]} alt={`Оценка: ${ratingValue + 2}`} />
      <div className={styles.buttonContainer}>
        <button onClick={() => handleRatingChange(0)}>Плохо</button>
        <button onClick={() => handleRatingChange(1)}>Приемлемо</button>
        <button onClick={() => handleRatingChange(2)}>Хорошо</button>
        <button onClick={() => handleRatingChange(3)}>Отлично</button>
      </div>
    </div>
  )
}

export default Rating
