import React, { Component } from 'react';

export default class App extends Component {
    render () {
        const {results} = this.props;

        return (
            <div>
                <h2>SEARCH RESULTS:</h2>
                <p>{results}</p>
            </div>
        );
    }
}