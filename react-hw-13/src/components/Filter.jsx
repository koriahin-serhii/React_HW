import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import styles from '../styles/Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Users filter"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  )
}

const mapStateToProps = (state) => ({
  filter: state.filter
});

export default connect(mapStateToProps, { setFilter })(Filter);
