import { useState, useCallback, useMemo } from 'react'
import UserList from './UserList'

function App() {
  const [filter, setFilter] = useState('')

  const userList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
  ]

  const filterUsers = useCallback(
    (text) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      )
    },
    [userList]
  )

  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  )

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Список пользователей</h1>
      <input
        type="text"
        placeholder="Фильтр по имени..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px',
        }}
      />
      <UserList users={filteredUsers} />
    </div>
  )
}

export default App
