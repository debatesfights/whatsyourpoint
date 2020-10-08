import React, {useContext, useState} from 'react'
import {FirebaseContext} from './firebaseContext'  

export const Login= ()=> {
    const {login,logout, username} = useContext(FirebaseContext)
    const [email, setEmail] =useState("wyp3@gmail.com")
    const [password, setPassword] =useState("Wypwyp12")

    return(
    <React.Fragment>
      
        <input value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input value={password} onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={()=>login(email,password)}>Login</button>
        <button onClick={()=>logout()}>Logout</button>
    </React.Fragment>
    )
}
