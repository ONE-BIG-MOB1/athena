import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {ANCIENTS_URL} from '../../consts';
import {SEARCH_QUERY_PARAM} from './consts';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: {},
            cache: {}
        };
        this.memoizedSearchAncients = this.memoizedSearchAncients.bind(this);
    }

    getSearchUrl(query) {
        return `${ANCIENTS_URL}${SEARCH_QUERY_PARAM}${query}`;
    }

    async searchAncients(query) {
        try {
            const res = await axios.get(this.getSearchUrl(query));
            return res.data || {};
        } catch (e) {
            console.error(e);
        }
    }

    memoizedSearchAncients(query) {
        const {cache} = this.state;
        const cached = cache[query];
        if (typeof cached !== 'undefined') {
            this.setState({searchResults: cached});
        } else {
            this.searchAncients(query).then((ancients) => {
                const updatedCache = Object.assign(cache, {[query]: ancients});
                this.setState({cache: updatedCache, searchResults: ancients})
            });
        }
    }

    render () {
        const {searchResults} = this.state;

        return (
            <div>
                <p>ENTER SEARCH QUERY:</p>
                <SearchBar searchAncients={this.memoizedSearchAncients} />
                <SearchResults results={searchResults} />
            </div>
        );
    }
}