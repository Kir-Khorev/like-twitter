import React from 'react';
import {Link} from 'react-router-dom';
import './app-menu.css';

const AppMenu = () => {
    return (
        <div className="widget">
            <h3 className="widget-title">
                <i className="fab fa-earlybirds"></i>
            </h3>
            <ul className="widget-list">
                <Link to='/'>Home</Link>
                <Link to='/messages'>Messages</Link>
            </ul>
        </div>
    )
};

export default AppMenu;