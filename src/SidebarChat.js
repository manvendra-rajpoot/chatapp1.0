import React, {useState,useEffect} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SidebarChat({id,name,addNewChat}) {
    //craete random int
    const [seed,setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

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
                    <p>Last Seen......</p>    
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
