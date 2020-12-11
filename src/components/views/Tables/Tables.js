import React from 'react'
import styles from './Tables.scss'
import { Link } from 'react-router-dom'

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/bookings/:id`}>Booking Id</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/event/:id`}>Event Id</Link>
    </div>
  )
}

export default Tables
