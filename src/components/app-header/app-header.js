import React from 'react';
import {Link} from 'react-router-dom';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      font-size: 26px;
      color: ${props => props.colored ? 'blue' : 'yellow'}
      :hover {
          color: grey;
      }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored as='a' className='headerName'>
            <h2>John Weekend</h2>
            <h2>{allPosts} twitts, liked: {liked}</h2>
        </Header>
    )
};

export default AppHeader;
