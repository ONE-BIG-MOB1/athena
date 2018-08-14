import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {ANCIENTS_URL} from '../../consts';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: {}
        };
        this.searchAncients = this.searchAncients.bind(this);
    }

    getSearchUrl(query) {
        return `${ANCIENTS_URL}?search=${query}`;
    }

    async searchAncients(query) {
        try {
            const result = await axios({method: 'get', url: this.getSearchUrl(query) });
            const {data = {}} = result;
            this.setState({
                searchResults: data
            });
        } catch (e) {
            console.error(e);
        }
    }

    render () {
        const {searchResults} = this.state;

        return (
            <div>
                <SearchBar searchAncients={this.searchAncients} />
                <SearchResults results={searchResults} />
            </div>
        );
    }
}