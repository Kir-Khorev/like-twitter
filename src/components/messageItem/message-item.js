import React, { Component } from 'react';
import messageService from '../../services/messageService';
import nextId from "react-id-generator";
import './message-item.css';

export default class MessageItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            readed: true,
            message: {
                author: '',
                text: '',
                img: '',
                id: ''
            },
        };
        this.onToggleReaded = this.onToggleReaded.bind(this);
    }

    messageService = new messageService();

    onToggleReaded () {
        this.setState ({
            readed: !this.state.readed
        });
    }

    componentDidMount () {

        const result = this.messageService.getOneRandomMessage();
        let au = '';
        let te = '';

        result.then((res) => {
            au = res.map((item) => item.author === null ? 'Mr. Nobody' : `${item.author}: `);
            te = res.map((item) => `${item.text}`);

            this.setState({
                message: {
                    author: au,
                    text: te,
                    img: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/100/100`,
                    id: nextId('id-')
                }
            });

        });

    }

    render () {

        return ( 
        <li className={this.state.readed === true ? 'messageItem readed' : 'messageItem unreaded'}>
            <div className='author-wrapper'>
                <img src={this.state.message.img} alt={this.state.message.author} className='avatarImg'/>
                <span className='author'>{this.state.message.author}</span>
            </div>
            <span className='date'>{new Date(2001, 0, 1).toString()}</span>
            <span className='text'>{this.state.message.text}</span>           
            <button className='btn' onClick={this.onToggleReaded}>
                {this.state.readed === true ? 'Прочитать' : 'Отметить как непрочитанное'}
            </button>
        </li>
        )
    }
}