import React, { useEffect, useContext , useState}  from 'react';
import {FirebaseContext} from './firebaseContext'  


export const Challenge = () =>{
    console.log("Challenge .....")
    const {getChatRef} = useContext(FirebaseContext)
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    const chatRef = getChatRef(chat_id)

    const initValues ={title:"", manifest:"", date:""}
    const [values, setValues] = useState(initValues)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    useEffect(()=>{
        chatRef.on('child_added',  (snapshot) => {
            setValues((values)=>{return {...values, [snapshot.key]:snapshot.val()}})
        })

    },[])
    let r = <p>loading....</p>    
    if (values.title) 
    r =  (<React.Fragment>
    <p>{values.title}:{values.manifest}</p>
    </React.Fragment>)
    return r
}