import React from 'react'
import styles from './Waiter.scss'
import { Link } from 'react-router-dom'

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>Ordering Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/order/new`}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/ordering/order/:id`}>Order Id</Link>
    </div>
  )
}

export default Waiter
