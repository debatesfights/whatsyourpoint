import React, { useState,  useContext }  from 'react';
import {FirebaseContext} from './firebaseContext'  
import Moment from "moment"
import Confirm from "./confirm"
import { useHistory} from 'react-router-dom'


const NewChat = () => {
    const {username, create } = useContext(FirebaseContext)   
    const initValues ={title:"", manifest:""}
    const history = useHistory()
    const [values, setValues] = useState(initValues)
    const save =  () =>{
        create({...values, username,  status:0, date:Moment(new Date()).format('DD/MM/YYYY HH:mm:ss')})
        history.push("/")
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    return (<React.Fragment>
        { !username  && <Confirm/>}        
        <form>
            <p>Make your point:</p>
            {Object.keys(initValues).map( (key) =>
            <div key={key}><input className="new_message" onChange={handleChange} name={key} placeholder={key} value={values[key]}></input></div>            
            )}   
        </form>
        <button onClick={save}>Save</button>
    </React.Fragment>)
}


export default NewChat