import React, {useEffect} from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from './modules/firebase';
import {useStateValue} from './modules/StateProvider'

function App() {
  const [{}, dispath] = useStateValue()

  useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser)
    if(authUser) {
      dispath({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      dispath({
        type: 'SET_USER',
        user: null
      })

    }
  })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
