import React from 'react'
import styles from './Waiter.scss'
import { NavLink } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Waiter = () => {
  return (
    <Paper className={styles.component}>
      <Typography variant="h5">WAITER WORKFLOW</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Button variant="contained" color='secondary' component={NavLink} to={`${process.env.PUBLIC_URL}/ordering/order/`}>
              order
            </Button>
          </TableBody>
        </Table>
    </Paper>
  )
}

export default Waiter
