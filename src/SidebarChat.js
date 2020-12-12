import React, {useState,useEffect} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';


function SidebarChat({addNewChat}) {
    //craete random int
    const [seed,setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const createChat = () => {
        const roomName = prompt('Enter Name for Chat');
        if(roomName){
            //create new room
        }
    };

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} /> 
            <div className='sidebarChat__info'>
                <h4>Room Name</h4>
                <p>Last Seen......</p>    
            </div>           
        </div>
    ) : (
        <div className='sidebarChat' onClick={createChat}>
            <h4>+ Add new chatgroup</h4>
        </div>
    );
}

export default SidebarChat;
