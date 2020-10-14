import React, {useContext, useState,useEffect} from 'react'
import {FirebaseContext} from './firebaseContext' 

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory} from 'react-router-dom'


export const Home = ()=> {
    const [chats, setChats] = useState([])
    const {getChatsRef, getChatRef, username} = useContext(FirebaseContext)
    const chatsRef = getChatsRef()
    
    useEffect(()=>{
        chatsRef.on('child_added',  (snapshot) => {
            const chat =  { ... snapshot.val(), id: snapshot.key };
            setChats(( chats) =>[...chats, chat])
        })
    },[])

    const columns_names = ['title','manifest','username','challenger','date','views']
    let history = useHistory()
  
    const ButtonCell = ({chat, path,icon}) =>
    (<TableCell align="left">
      <button className={path}
        onClick={()=> {
          const views = chat.views !== undefined ? chat.views + 1:1
          path === "peep" && getChatRef(chat.id).update({"views":views})
          return history.push(`${path}/${chat.id}`)}
        }>
         <span>{icon}</span>
        </button>
        </TableCell>)

    return(
    <React.Fragment>
       <Table>
      <TableHead>
          <TableRow key={'i'}>
           {columns_names.map((title) =>
           <TableCell key={title} align="left">{title}&nbsp;</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {chats.map((chat) => (
            <TableRow key={chat.id}>
                {columns_names.map((column)=><TableCell key={column} align="left">{chat[column]}</TableCell>)}
            <ButtonCell icon={'\uD83D\uDC40'} path='peep' chat={chat}/>
            {username && (!chat.challenger || chat.challenger === username 
              || chat.username === username )&& <ButtonCell icon={'\u2694\uFE0F'} path='onechat' chat={chat} />}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    )
}