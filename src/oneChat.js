
import React, { useEffect, useContext , useState}  from 'react';
import {FirebaseContext} from './firebaseContext'  
import Confirm from "./confirm"

export const OneChat = ({peep}) =>{
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    const [messages, setMessages] = useState([])
    const {getChatRefMessages, username} = useContext(FirebaseContext)
    const messagesRef = getChatRefMessages(chat_id)
    const manifest = sessionStorage.getItem("manifest")
    const chatUsername = sessionStorage.getItem("username")

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
    const getClassName= (msg_username) => {
        let msgClass = "message"
        msgClass = msg_username === chatUsername ?  msgClass + " blue"  : msgClass + " red"
        return msgClass
    }


    if (messages){
        r =  (<React.Fragment> 
        <h3 className="titles">{manifest}</h3>
        <ul>{messages.map((msg, ix) =>
        <li 
        className={getClassName(msg.user)} key={ix}>
            {msg.text}</li>)}</ul>
        {!peep && <input className="new_massege" onKeyDown={sendMessage}></input>} 
        </React.Fragment>)
    }

    if (!peep && !username){
        r = <Confirm />
    }
  
    return r
}