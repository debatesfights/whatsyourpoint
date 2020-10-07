import React, { useEffect }  from 'react';
import {Switch,  Link, Route, BrowserRouter as Router}  from 'react-router-dom'

import  {DB} from './firebase';
import {FirebaseContext} from './firebaseContext'  
import {Register} from "./register"
import {Login} from "./login"
 
const Nav = () => 
      <nav>
            <Link to="/">Home | </Link>
            <Link to="register">Register | </Link>
            <Link to="login">Login</Link>
      </nav>


const Home= ()=> <h2>Home</h2>


export const  App  = () => {
      const db = DB()
      const {isInitialized} =  db
      useEffect(()=>isInitialized,[])
      return (
      <Router>
      <Nav/>
      <Switch>
            <FirebaseContext.Provider value={db}>
            <Route exact path="/" component={Home}></Route>
            <Route path="/register" component ={Register}></Route>
            <Route path="/login" component={Login}></Route>
            </FirebaseContext.Provider>
            </Switch>
      </Router>)
  
 }
 
