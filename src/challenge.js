import React, { useEffect, useContext , useState}  from 'react';
import {FirebaseContext} from './firebaseContext'  


export const Challenge = () =>{
    console.log("Challenge .....")
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    const initValues ={title:"", manifest:"", date:"", messages:[]}
    const [values, setValues] = useState(initValues)

    const {getChatRef} = useContext(FirebaseContext)
    const chatRef = getChatRef(chat_id)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }
    
    const sendMessage =(e)=>{       
        if (e.key ==='Enter'){
        chatRef.child("messages").push( e.target.value);
        e.target.value = ""
        }
    }

    useEffect(()=>{
        chatRef.on('child_added',  (snapshot) => {
            setValues((values)=>{return {...values, [snapshot.key]:snapshot.val()}})
        })
        
    },[])
    let r = <p>loading....</p>    
    if (values.title) 
    r =  (<React.Fragment>
    <h3 className="titles">{values.title}:{values.manifest}</h3>
    <ul>{values.messages.map(msg, ix =><li key={ix}>{msg}</li>)}</ul>
  
    <input style={{width:"30%"}} onKeyDown={sendMessage}></input>
    </React.Fragment>)
    return r
}