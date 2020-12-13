import { Avatar } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AttachFile, InsertEmoticon, MicNoneOutlined, SearchOutlined} from '@material-ui/icons';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';

function Chat() {
    //craete random int
    const [seed,setSeed] = useState('');
    const [input,setInput] = useState('');
    const {roomId} = useParams(); //to extract roomId from url
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{user} , dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [roomId]);

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomName(snapshot.data().name)
            ));

            db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc').onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ));
        }
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        // console.log(input);
        db.collection('rooms').doc(roomId)
        .collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('');
    };

    return (
        <div className='chat'>
            
            <div className='chat__header'>
                <div className='chat__headerAvatar'>
                    <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} /> 
                </div>
                <div className='chat__headerInfo'>
                    <h4>{roomName}</h4>
                        <p>
                            last seen{" "}
                            {new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}
                        </p>
                </div>
                <div className='chat__headerRight'>
                    <SearchOutlined /> 
                    <AttachFile />
                    <MoreVertIcon /> 
                </div>
            </div>         

            <div className='chat__body'>
                {messages.map((message) => (
                        <p className={`chat__msg ${message.name===user.displayName && 'chat__receiver'}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                        </p>
                    ))
                }
            </div>       

            <div className='chat__footer'>
                <InsertEmoticon />
                <form>
                    <input value={input}
                        onChange={e =>
                            setInput(e.target.value)}
                        placeholder=' Type a message' 
                        type='text' 
                    />
                    <button type='submit' onClick={sendMessage}> 
                        Send
                    </button>
                </form>
                <MicNoneOutlined />

            </div>            
        </div>
    )
}

export default Chat;
