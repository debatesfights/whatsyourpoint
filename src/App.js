import React, { useEffect , useState}  from 'react';
import {Switch,   isActive,  NavLink, Route, BrowserRouter as Router}  from 'react-router-dom'

import  {DB} from './firebase';
import {FirebaseContext} from './firebaseContext'  
import {Login} from "./login"
import NewChat from "./newChat"
import {Home} from "./home"
import {Challenge} from "./challenge"
 
const Nav = ({user, logout}) => 
      <nav>
            <NavLink activeClassName='selectedLink' exact to="/">Home </NavLink>   
            <NavLink activeClassName='selectedLink' to="/new">New</NavLink>
            {user && <p className="navbar-right">
                        <div className="navbar-right-el">{user}</div>
                        <button className="navbar-right-el" onClick={()=>logout()}>Logout</button>
                  </p>}
            {!user && <NavLink exact className="navbar-right" activeClassName='selectedLink' to="/login">Login</NavLink>}
      </nav>



export const  App  = () => {   
     
      const  db = DB()
       useEffect(()=>{
                db.isInitialized()}
            ,[])
      const { username, logout} =  db

      return (
      <Router>
      <Nav user={username} logout={logout}/>
      
      <Switch>
            <FirebaseContext.Provider value={db}>
            <Route exact path="/" component={Home}></Route>
            <Route exact  path="/login" component={Login}></Route>
            <Route  path="/new" component={NewChat}></Route>
            <Route  exact path="/challenge/:id" component={Challenge}></Route>
            </FirebaseContext.Provider>
            </Switch>
      </Router>)
  
 }
 
