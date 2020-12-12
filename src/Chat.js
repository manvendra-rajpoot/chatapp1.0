import { Avatar } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AttachFile, InsertEmoticon, MicNoneOutlined, SearchOutlined} from '@material-ui/icons';

function Chat() {
    //craete random int
    const [seed,setSeed] = useState('');
    const [input,setInput] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('Typed sms -->>>>>>>',input);
        setInput('');
    };

    return (
        <div className='chat'>
            
            <div className='chat__header'>
                <div className='chat__headerAvatar'>
                    <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} /> 
                </div>
                <div className='chat__headerInfo'>
                    <h4>Room Name</h4>
                    <p>Last seen at...</p>
                </div>
                <div className='chat__headerRight'>
                    <SearchOutlined /> 
                    <AttachFile />
                    <MoreVertIcon /> 
                </div>
            </div>         

            <div className='chat__body'>
                <p className={`chat__msg ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Manvendra R</span>
                    Hey Bois
                    <span className='chat__timestamp'>9:54</span>
                </p>
               
                <p className='chat__msg'>
                    <span className='chat__name'>Devesh R</span>
                    Heyy Bois!!
                    <span className='chat__timestamp'>9:54</span>
                </p>

                <p className={`chat__msg ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Manvendra R</span>
                    Hey Bois
                    <span className='chat__timestamp'>9:54</span>
                </p>
               
                <p className='chat__msg'>
                    <span className='chat__name'>Devesh R</span>
                    Heyy Bois!!
                    <span className='chat__timestamp'>9:54</span>
                </p>

                <p className={`chat__msg ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Manvendra R</span>
                    Hey Bois
                    <span className='chat__timestamp'>9:54</span>
                </p>
               
                <p className='chat__msg'>
                    <span className='chat__name'>Devesh R</span>
                    Heyy Bois!!
                    <span className='chat__timestamp'>9:54</span>
                </p>

                <p className={`chat__msg ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Manvendra R</span>
                    Hey Bois
                    <span className='chat__timestamp'>9:54</span>
                </p>
               
                <p className='chat__msg'>
                    <span className='chat__name'>Devesh R</span>
                    Heyy Bois!!
                    <span className='chat__timestamp'>9:54</span>
                </p>

                <p className={`chat__msg ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Manvendra R</span>
                    Hey Bois
                    <span className='chat__timestamp'>9:54</span>
                </p>
               
                <p className='chat__msg'>
                    <span className='chat__name'>Devesh R</span>
                    Heyy Bois!!
                    <span className='chat__timestamp'>9:54</span>
                </p>

                <p className={`chat__msg ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Manvendra R</span>
                    Hey Bois
                    <span className='chat__timestamp'>9:54</span>
                </p>
               
                <p className='chat__msg'>
                    <span className='chat__name'>Devesh R</span>
                    Heyy Bois!!
                    <span className='chat__timestamp'>9:54</span>
                </p>
            
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
