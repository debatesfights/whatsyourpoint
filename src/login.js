import React, {useContext, useState} from 'react'
import {FirebaseContext} from './firebaseContext' 
import {useHistory} from 'react-router-dom'

export const Login= ()=> {
    const {login, register, error, setError} = useContext(FirebaseContext)
    const [email, setEmail] =useState("wyp3@gmail.com")
    const [password, setPassword] =useState("Wypwyp12")
    const history = useHistory()
    
    const firebaseAuth = async(foo, email, password)=>{
        await foo(email, password) 
        !error && history.goBack()
    }

    return(
    <React.Fragment>
        <input value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input value={password} onChange={e=>setPassword(e.target.value)}></input>
        <button autoFocus onClick={()=>firebaseAuth(login, email,password)}>Login</button>
        <button onClick={()=>firebaseAuth(register, email,password)}>Register</button>
        <div className="error">{error}</div>
    </React.Fragment>
    )
}