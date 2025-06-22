import React from 'react'
import styles from '../styles/UserItem.module.css'

const UserItem = ({ user }) => {
  return <div className={styles.item}>{user.name}</div>
}

export default UserItem
