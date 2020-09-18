import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './Components/DashBoard/DashBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking';
import Hotel from './Components/Hotel/Hotel';
import Auth from './Components/Auth/Auth';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App(props) {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
      <Router>
        <Switch>
          <Route path='/DashBoard'>
            <DashBoard></DashBoard>
          </Route>
          <Route path='/home'>
            <DashBoard></DashBoard>
          </Route>
          <Route path='/booking/:Id' >
            <Booking></Booking>
          </Route>
          <PrivateRoute path='/hotel'>
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path='/login'>
          <Auth></Auth>
          </Route>
          <Route exact path='/'>
            <DashBoard></DashBoard>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      </UserContext.Provider>

    </div>
  );
}

export default App;
