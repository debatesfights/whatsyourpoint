import React, {useContext, useState,useEffect} from 'react'
import {FirebaseContext} from './firebaseContext'  

export const Home = ()=> {
    const [chats, setChats] = useState([])
    const {getChatsRef} = useContext(FirebaseContext)
    const chatsRef = getChatsRef()
    
    useEffect(()=>{
        chatsRef.on('child_added',  (snapshot) => {
            const chat =  { ... snapshot.val(), id: snapshot.key };
            setChats(( chats) =>[...chats, chat])
        })
    },[])

    

    return(
    <React.Fragment>
        <ul style={{listStyle: "none"}}>
        {chats.map((chat)=>
            <li key={chat.id}>
                {chat.title} | {chat.manifest}| {chat.date}
            </li>
        )}
        </ul>
    </React.Fragment>
    )
}