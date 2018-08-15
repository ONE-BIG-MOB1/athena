import React, { Component } from 'react';
import Search from './Search';
import Error from './Error';
import {VIEW_OPTIONS} from './consts';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        };
        this.selectOption = this.selectOption.bind(this);
    }

    selectOption(option) {
        this.setState({
           selected: option
        });
    }

    getOptions() {
        return (
            <div className="options">
                <button className="btn" onClick={() => this.selectOption(VIEW_OPTIONS.SEARCH)}>Search</button>
                <button className="btn" onClick={() => this.selectOption(VIEW_OPTIONS.ERROR)}>Error</button>
            </div>
        )
    }

    render() {
        const {selected} = this.state;

        return (
            <div className="app">
                {this.getOptions()}
                {selected === VIEW_OPTIONS.SEARCH && <Search />}
                {selected === VIEW_OPTIONS.ERROR && <Error />}
            </div>
        );
    }
}