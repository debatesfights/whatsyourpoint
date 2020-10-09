import React, { useEffect }  from 'react';
import {Switch,   isActive,  NavLink, Route, BrowserRouter as Router}  from 'react-router-dom'

import  {DB} from './firebase';
import {FirebaseContext} from './firebaseContext'  
import {Register} from "./register"
import {Login} from "./login"
import NewChat from "./newChat"
import {Home} from "./home"
import {Challenge} from "./challenge"
 
const Nav = () => 
      <nav>
            <NavLink activeClassName='selectedLink' exact to="/">Home  </NavLink>
            <NavLink activeClassName='selectedLink' to="register">Register  </NavLink>
            <NavLink activeClassName='selectedLink'  to="login">Login  </NavLink>
            <NavLink activeClassName='selectedLink'  to="new">New</NavLink>
          
      </nav>

export const  App  = () => {
      const db = DB()
      const {isInitialized, username} =  db
      useEffect(()=>isInitialized,[])

      return (
      <Router>
      <Nav/>
      <p>Current user:{username}</p>
      <Switch>
            <FirebaseContext.Provider value={db}>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/register" component ={Register}></Route>
            <Route  path="/login" component={Login}></Route>
            <Route  path="/new" component={NewChat}></Route>
            <Route  path="/challenge" component={Challenge}></Route>
            </FirebaseContext.Provider>
            </Switch>
      </Router>)
  
 }
 
