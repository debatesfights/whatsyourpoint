
import React, { useEffect, useContext , useState}  from 'react';
import {FirebaseContext} from './firebaseContext'  
import Confirm from "./confirm"

export const OneChat = ({peep}) =>{
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    const [messages, setMessages] = useState([])
    const {getChatRefMessages, username, getChatRef} = useContext(FirebaseContext)
    const messagesRef = getChatRefMessages(chat_id)
    const chatRef = getChatRef(chat_id)
    const [chat, setChat] = useState()

    const sendMessage =(e)=>{       
        if (e.key ==='Enter'){
            messagesRef.push( {"text":e.target.value, "user":username});
            e.target.value = ""
            chatRef.update({"status":1 , "challenger":username})
        }
    }   
    
    useEffect( ()=>{
        chatRef.on("value", snapshot =>  setChat(snapshot.val()))
        messagesRef.on('child_added',  snapshot =>
         setMessages(messages=>[...messages,snapshot.val()]))
         
    },[])
    
    const getClassName= (msg_username) => {
        let msgClass = "message"
        msgClass = msg_username === chat.username ?  msgClass + " blue"  : msgClass + " red"
        return msgClass
    }

    let r = <p>loading....</p>    
    if (messages && chat){
        r =  (<React.Fragment> 
        <h3 className="titles">{chat.manifest}</h3>
        <ul>{messages.map((msg, ix) =>
        <li className={getClassName(msg.user)} key={ix}>{msg.text}</li>)}</ul>
        {!peep && <input className="new_message" onKeyDown={sendMessage}></input>} 
        {!peep && username === chat.username && chat.status === 0  && <Confirm message="You cant start debate with yourself"/>}
        </React.Fragment>)
    }

    if (!peep && !username){
        r = <Confirm message="Please login"/>
    }
 

    return r
}