
import React, { useEffect, useContext , useState}  from 'react';
import {FirebaseContext} from './firebaseContext'  
import Confirm from "./confirm"

export const OneChat = ({peep}) =>{
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    const [messages, setMessages] = useState([])
    const {getChatRefMessages, username} = useContext(FirebaseContext)
    const messagesRef = getChatRefMessages(chat_id)
    const manifest = sessionStorage.getItem("manifest")
    
    const getMsgClassName= () =>{
        return "aaa"
    }
    const sendMessage =(e)=>{       
        if (e.key ==='Enter'){
            messagesRef.push( {"text":e.target.value, "user":username});
            e.target.value = ""
        }
    }

    useEffect(()=>{
        messagesRef.on('child_added',  snapshot =>
         setMessages(messages=>[...messages,snapshot.val()])        )
    },[])

    let r = <p>loading....</p>    

    if (messages){
        r =  (<React.Fragment> 
        <h3 className="titles">{manifest}</h3>
        <ul>{messages.map((msg, ix) =><li className={getMsgClassName()} key={ix}>{msg.text}</li>)}</ul>
        {!peep && <input className="massege" onKeyDown={sendMessage}></input>} 
        </React.Fragment>)
    }

    if (!peep && !username){
        r = <Confirm />
    }

    if (!peep && username == sessionStorage.getItem("username")){
        r = <Confirm message="One cannot debate himself"/>   
    }
    return r
}