import React from 'react'
import styles from './OrderInfo.scss'
import { Link } from 'react-router-dom'


const OrderInfo = () => {
  return (
    <div className={styles.component}>
      <h2>OrderInfo view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/ordering/new`}>Order Info</Link>
    </div>
  )
}

export default OrderInfo
