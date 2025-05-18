import React, { useState } from 'react'
import styles from '../styles/List.module.css'

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 },
  ])

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <div className={styles.container}>
      <h2>Список приглашенных</h2>
      {people.map((person) => (
        <div key={person.id} className={styles.listItem}>
          <span>
            <span className={styles.name}>{person.name}</span>
            <span className={styles.age}>({person.age} лет)</span>
          </span>
          <button
            onClick={() => handleDelete(person.id)}
            className={styles.button}
          >
            Удалить
          </button>
        </div>
      ))}
      {people.length === 0 && <p>Список пуст</p>}
    </div>
  )
}

export default List
