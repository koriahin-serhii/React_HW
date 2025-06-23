import React from 'react'
import { useEffect, useRef } from 'react'
import styles from '../components/ValueDisplay.module.css'

const ValueDisplay = ({ value }) => {
  const prevValueRef = useRef('')

  useEffect(() => {
    prevValueRef.current = value
  }, [value])

  return (
    <div className={styles.container}>
      <p>
        <strong>Текущее значение:</strong> {value}
      </p>
      <p>
        <strong>Предыдущее значение:</strong> {prevValueRef.current}
      </p>
    </div>
  )
}

export default ValueDisplay
