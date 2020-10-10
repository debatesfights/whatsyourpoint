
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
 

import 'firebase/firebase-firestore'
import React, {useState} from "react"


const config = {
  apiKey: "AIzaSyCzSZFG-HLeakTSP0X_CJGXs6kBRRxasOQ",
  authDomain: "debates-3f413.firebaseapp.com",
  databaseURL: "https://debates-3f413.firebaseio.com",
  projectId: "debates-3f413",
  storageBucket: "debates-3f413.appspot.com",
  messagingSenderId: "364331969790",
  appId: "1:364331969790:web:5359c5e81b7f5cb4f749af"
}
app.initializeApp(config)
const auth = app.auth()
const db = app.database()

export const DB = () => {	

	const [username, setUsername] = useState()
		console.log("db .........")
	const [error, setError] = useState()

	const login =  async(email, password) => {
		setError("")
		await auth.signInWithEmailAndPassword(email, password).catch((err)=>setError(err.message))
		if (auth.currentUser) {
			setUsername(auth.currentUser.email)
		}

	}

	const logout = () =>  {
		setUsername("")
		return auth.signOut()
	}

	const register = async (email, password)=> {
		setError("")
		await auth.createUserWithEmailAndPassword(email, password).catch((err)=>setError(err.message))	
	}

	const isInitialized = () => {

		return new Promise(resolve => {
		
			auth.onAuthStateChanged(resolve)
		})
	}

	const create = async(newChat) =>{
		db.ref("chats").push(newChat)
	}

	const getChatsRef = () =>{
		return db.ref("chats").orderByKey().limitToLast(1000);
	}

	const getChatRef = (id) =>{
		return db.ref("chats").child(id)
	}
 
	return { login, logout ,register, isInitialized , username, create, getChatsRef, getChatRef, error}

}



