import React, { Component } from 'react';
import AppMenu from '../app-menu';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MessagesPage, HomePage} from '../pages';
import './app.css';
import Footer from '../footer/footer';

export default class App extends Component {
    render () {
        return (
            <Router>
                <div className='app'>
                    <AppMenu />
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/messages' exact component={MessagesPage}/>
                    <Footer/>
                </div>
            </Router>            
        )
    }

};