
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

export const DB = () => {	
	console.log("db .........")
	const auth = app.auth()
	const db = app.database()
	const [username, setUsername] = useState()

	const login =  async(email, password) => {
		console.log(`Firebase login called with:${email} ${password}`)
		await auth.signInWithEmailAndPassword(email, password)
		if (auth.currentUser) {
			setUsername(auth.currentUser.email)
		}
	}

	const logout = () =>  {
		setUsername("logged out .....")
		return auth.signOut()
	}

	const register = async (email, password)=> {
		await auth.createUserWithEmailAndPassword(email, password)	
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
 
	return { login, logout ,register, isInitialized , username, create, getChatsRef, getChatRef}

}



