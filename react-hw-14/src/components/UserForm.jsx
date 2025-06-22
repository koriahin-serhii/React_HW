import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/actions'

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && status) {
      setUserInfo(name, status)
      setName('')
      setStatus('')
    }
  }

  return (
    <div>
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Status:</label>
          <br />
          <input value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default connect(null, { setUserInfo })(UserForm)
