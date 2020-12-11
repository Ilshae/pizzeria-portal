import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage'
import Login from './components/views/Login/Login'
import Tables from './components/views/Tables/Tables'
import Table from './components/views/Table/Table'
import Event from './components/views/Event/Event'
import Waiter from './components/views/Waiter/Waiter'
import NewOrder from './components/views/NewOrder/NewOrder'
import OrderInfo from './components/views/OrderInfo/OrderInfo'
import Kitchen from './components/views/Kitchen/Kitchen'

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Table} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event:id'} component={Event} />            
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderInfo} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
