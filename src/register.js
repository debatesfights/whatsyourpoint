import React, {useContext, useState} from 'react'
import {FirebaseContext} from './firebaseContext'  

export const Register = ()=> {
    const {register, username} = useContext(FirebaseContext)
    const [name, setName] = useState("player1")
    const [email, setEmail] = useState("wyp3@gmail.com")
    const [password, setPassword] = useState("Wypwyp12")

    return(
    <React.Fragment>
        <p>Current user:{username}</p>
        <input value={name} onChange={e=>setName(e.target.value)}></input>
        <input value={email} onChange={e=>setEmail(e.target.value)}></input>
        <input value={password} onChange={e=>setPassword(e.target.value)}></input>
        <button onClick={()=>register(name, email,password)}>Register</button>
    </React.Fragment>
    )
}