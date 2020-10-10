import React, { useEffect, useContext , useState}  from 'react';
import {FirebaseContext} from './firebaseContext'  


export const Challenge = ({peep}) =>{
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    console.log("============",peep)
    const [messages, setMessages] = useState([])
    const {getChatRefMessages} = useContext(FirebaseContext)
    const messagesRef = getChatRefMessages(chat_id)
    
    const sendMessage =(e)=>{       
        if (e.key ==='Enter'){
            messagesRef.push( e.target.value);
            e.target.value = ""
        }
    }

    useEffect(()=>{
        messagesRef.on('child_added',  snapshot =>
         setMessages(messages=>[...messages,snapshot.val()])        )
    },[])

    let r = <p>loading....</p>    

    if (messages){
        console.timeLog(peep)
        r =  (<React.Fragment>
        <h3 className="titles">{chat_id}</h3>
        <ul>{messages.map((msg, ix) =><li key={ix}>{msg}</li>)}</ul>
        {!peep && <input style={{width:"30%"}} onKeyDown={sendMessage}></input>} 
        </React.Fragment>)
    }
    return r
}