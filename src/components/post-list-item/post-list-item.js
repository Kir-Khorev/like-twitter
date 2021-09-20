import React, { Component } from 'react';
import './post-list-item.sass';

export default class PostListItem extends Component {

    render() {
        const { label, id, onDelete, onToggleImportant, onToggleLike, important, like } = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span
                    className='app-list-item-label' id={id}> {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-heart btn-sm' onClick={onToggleLike}>
                        <i className='fa fa-heart'></i>
                    </button>
                    <button type='button' className='btn-star btn-sm' onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </div>
        )
    }
}