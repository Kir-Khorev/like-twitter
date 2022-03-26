import React, { Component } from 'react';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import PostStatusFilter from '../post-status-filter';

import nextId from "react-id-generator";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to lear React', important: true, like: false, id: nextId('random-id-') },
                { label: 'Thats is good', important: false, like: true, id: nextId('random-id-') },
                { label: 'I need a break...', important: false, like: false, id: nextId('random-id-') }
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;

    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            };
        });

    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId('random-id-')
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            };
        });
    }

    onToggleLike(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = { ...old, like: !old.like };

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({ term });
    }

    onFilterSelect(filter) {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className='homePage'>
                <h1>Home Page</h1>
                <AppHeader liked={liked} allPosts={allPosts} />
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch} />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect} />
                <PostAddForm onAdd={this.addItem} />
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
            </div>
        )
    }
}