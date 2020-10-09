import React, {useContext, useState,useEffect} from 'react'
import {FirebaseContext} from './firebaseContext' 

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const Home = ()=> {
    const [chats, setChats] = useState([])
    const {getChatsRef} = useContext(FirebaseContext)
    const chatsRef = getChatsRef()
    
    useEffect(()=>{
        chatsRef.on('child_added',  (snapshot) => {
            const chat =  { ... snapshot.val(), id: snapshot.key };
            setChats(( chats) =>[...chats, chat])
        })
    },[])

    const columns_names = ['title','manifest','username','date']

    const ButtonCell = ({chat, path,icon}) =>
    (<TableCell align="left">
      <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`${path}/${chat.id}`;
                        }}
                >
         <span>{icon}</span>
        </button>
        </TableCell>)

    return(
    <React.Fragment>
       <Table>
      <TableHead>
          <TableRow key={'i'}>
           {columns_names.map((title) =>
           <TableCell align="left">{title}&nbsp;</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {chats.map((chat) => (
            <TableRow key={chat.id}>
                {columns_names.map((column)=><TableCell align="left">{chat[column]}</TableCell>)}
            <ButtonCell icon={'\uD83D\uDC40'} path='peep' chat={chat}/>
            <ButtonCell icon={'\u2694\uFE0F'} path='challenge' chat={chat} />             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
    )
}