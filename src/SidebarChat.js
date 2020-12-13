import React, {useState,useEffect} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SidebarChat({id,name,addNewChat}) {
    //craete random int
    const [seed,setSeed] = useState('');
    const [messages,setMessages] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id)
            .collection('messages').orderBy('timestamp','desc')
            .onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => 
                doc.data()))
            ));
        }
    }, [id]);

    const createChat = () => {
        const roomName = prompt('Enter Name for Chat Group');
        if(roomName){
            //create new room
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} /> 
                <div className='sidebarChat__info'>
                    <h4>{name}</h4>
                    <p>{messages[0]?.message}</p>    
                </div>           
            </div>

        </Link>
        
    ) : (
        <div className='sidebarChat' onClick={createChat}>
            <h4>+ Add new chat-group</h4>
        </div>
    );
}

export default SidebarChat;
