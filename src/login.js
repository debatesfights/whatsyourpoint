import React, {useContext} from 'react'
import {FirebaseContext} from './firebaseContext'  

export const Login= ()=> {
    const {login,logout, username} = useContext(FirebaseContext)
    
    return(
    <React.Fragment>
        <p>Current user:{username}</p>
        <button onClick={()=>login("wyp3@gmail.com", "Wypwyp12")}>Login</button>
        <button onClick={()=>logout()}>Logout</button>
    </React.Fragment>
    )
}
