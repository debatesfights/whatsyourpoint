import React, { useState, useEffect, useContext }  from 'react';
import {FirebaseContext} from './firebaseContext'  
import {Redirect} from 'react-router-dom'
import Moment from "moment"


const NewChat = () => {
    const {username, create } = useContext(FirebaseContext)   
    const initValues ={title:"", manifest:""}
    
    const [values, setValues] = useState(initValues)
    const save =  () =>{
        create({...values, username, date:Moment(new Date()).format('DD/MM/YYYY HH:mm:ss')})
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }


    return (<React.Fragment>
        <form>
            {Object.keys(initValues).map( (key) =>
            <div key={key}><input style={{display:"block"}} onChange={handleChange} name={key} placeholder={key} value={values[key]}></input></div>            
            )}   
        </form>
        <button onClick={save}>Save</button>
    </React.Fragment>)
}


export default NewChat