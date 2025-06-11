import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './UserProfile.module.css'

const UserProfile = () => {
  const [user, setUser] = useState(null)

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/')
      const userData = response.data.results[0]
      setUser({
        name: `${userData.name.first} ${userData.name.last}`,
        email: userData.email,
        phone: userData.phone,
        picture: userData.picture.medium,
      })
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }
  useEffect(() => {
    fetchUserProfile()
  }, [])

  if (!user) {
    return <div className={styles.card}>Loading...</div>
  }
  return (
    <div className={styles.card}>
      <img src={user.picture} alt={user.name} className={styles.avatar} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>Email: {user.email}</p>
      <p className={styles.phone}>Phone: {user.phone}</p>
      <button className={styles.button} onClick={fetchUserProfile}>
        Load New User
      </button>
    </div>
  )
}

export default UserProfile
