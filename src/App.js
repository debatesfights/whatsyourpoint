import React, { useEffect }  from 'react';
import {Switch,  Link, Route, BrowserRouter as Router}  from 'react-router-dom'

import  {DB} from './firebase';
import {FirebaseContext} from './firebaseContext'  
import {Comp1} from "./register"
import {Login} from "./login"
 
const Nav = () => 
      <nav>
            <Link to="/">Home | </Link>
            <Link to="comp1">Comp1 | </Link>
            <Link to="comp2">Comp2</Link>
      </nav>


const Home= ()=> <h2>Home</h2>


export const  App  = () => {
     
      // const {isInitialized} =  DB
      // useEffect(()=>isInitialized())

      return (
      <Router>
      <Nav/>
      <Switch>
            <FirebaseContext.Provider value={DB()}>
            <Route exact path="/" component={Home}></Route>
            <Route path="/comp1" component ={Comp1}></Route>
            <Route path="/comp2" component={Login}></Route>
            </FirebaseContext.Provider>
            </Switch>
      </Router>)
  
 }
 
