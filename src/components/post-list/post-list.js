import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return  (
            <ListGroupItem key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}
                />
            </ListGroupItem>
        )
    });

    return (
        <ListGroup className='app-list list-group'>
            {elements}
        </ListGroup>
    );
}

export default PostList;