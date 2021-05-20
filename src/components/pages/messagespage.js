import React, {Component} from 'react';
import MessageList from '../messageList';
import './messages.css';

export default class MessagesPage extends Component {
    constructor(props) {
        super(props);
      }

    render () {
        return (
            <>
                <h1>Messages Page</h1>
                <MessageList />
            </>
        )
    }
}

