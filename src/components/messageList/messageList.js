import React, { Component } from 'react';
import MessageItem from '../messageItem';

const messageListStyle = {
    height: '100%',
    width: '800px',
    margin: 'auto',
};

const MessageList = () => {
    return (
        <div style={messageListStyle}>
            <h1>Messages Page</h1>
            <ul> {new Array(5).fill('').map((_, index) => <MessageItem key={index} />)}  </ul>
        </div>
    )
}

export default MessageList;