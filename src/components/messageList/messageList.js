import React, { Component } from 'react';
import MessageItem from '../messageItem';

const MessageList = () => {
        return (
            <ul> {new Array(5).fill('').map((_, index) => <MessageItem key={index} / > ) }  </ul>
        )
    }

export default MessageList;