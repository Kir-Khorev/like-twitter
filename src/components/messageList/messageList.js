import React, { Component } from 'react';
import MessageItem from '../messageItem';

const messageListStyle = {
    height: '100%',
    // width: '800px',
    margin: 'auto',
};

const MessageList = () => {
    return (
        <div style={messageListStyle} className='message-wrapper'>
            <h1 className='message-title'>Messages Page</h1>
            <ul className='message-list'> {new Array(5).fill('').map((_, index) => <MessageItem key={index} />)}  </ul>
        </div>
    )
}

export default MessageList;