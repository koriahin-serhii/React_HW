import React from 'react'
import { connect } from 'react-redux'

const User = ({ name, status }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
})

export default connect(mapStateToProps)(User)
