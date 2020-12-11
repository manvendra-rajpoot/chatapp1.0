import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import { Avatar } from '@material-ui/core';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <div className='sidebar__headerAvatar'>
                <Avatar />
                </div>
                <div className='sidebar__headerRight'>
                    <DonutLargeIcon /> 
                    <ChatIcon /> 
                    <MoreVertIcon /> 
                </div>
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />  
                    <input placeholder=' Search or start new chat'
                        type='text' 
                    /> 
                </div> 

            </div>

            <div className='sidebar__chats'>
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
        </div>
    )
}

export default Sidebar;
