import React, { Component } from 'react';
import tableify from 'tableify';

export default class App extends Component {
    render () {
        const {results} = this.props;
        const resList = tableify(results.ancients);
        return (
            <div>
                <h2>SEARCH RESULTS:</h2>
                <div dangerouslySetInnerHTML={{__html: resList}}></div>
            </div>
        );
    }
}