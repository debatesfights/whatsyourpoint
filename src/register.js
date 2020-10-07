import React, {useContext} from 'react'
import {FirebaseContext} from './firebaseContext'  



export  const Comp1= ()=> {
    const {register, username} = useContext(FirebaseContext)
    return <React.Fragment>
        <p>Current user:{username}</p>
        <button onClick={()=>register("player1","wyp3@gmail.com", "Wypwyp12")}>register</button>
        </React.Fragment>
}