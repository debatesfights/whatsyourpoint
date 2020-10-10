import React, {useContext, useState} from 'react'
import {FirebaseContext} from './firebaseContext'  

export const Login= ()=> {
    const {login, register, error} = useContext(FirebaseContext)
    const [email, setEmail] =useState("wyp3@gmail.com")
    const [password, setPassword] =useState("Wypwyp12")
     
    const firebaseAuth = async(foo, email, password)=>{
        foo(email, password)
    }

    return(
    <React.Fragment>
        <input value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input value={password} onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={()=>firebaseAuth(register, email,password)}>Register</button>
        <button onClick={()=>firebaseAuth(login, email,password)}>Login</button>
        <div className="error">{error}</div>
    </React.Fragment>
    )
}