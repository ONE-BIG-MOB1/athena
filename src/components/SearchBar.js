import React, { Component } from 'react';

export default class App extends Component {
    render () {
        const {searchAncients} = this.props;

        return (
            <div>
                <p>ENTER SEARCH QUERY:</p>
                <form onSubmit={searchAncients}>
                    <label>
                        Query:
                        <input type="text" name="query" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}