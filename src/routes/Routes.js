import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../components/homePage/HomePage';
import NotFound from '../components/NotFound/NotFound';
import Phone from '../components/Vivo/Vivo';
import CartPage from '../components/CartPage/CartPage';
import AddPhoneForm from '../components/AddVivoForm/AddVivoForm';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/cart' component={CartPage} />
        <Route path='/phones/:id' component={Phone} exact={true} />
        <Route path='/add-phone-form' component={AddPhoneForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
