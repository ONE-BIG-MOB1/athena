import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {searchQuery: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    }

    handleSubmit(event) {
        const {searchAncients} = this.props;
        const {searchQuery} = this.state;

        event.preventDefault();
        searchAncients(searchQuery);
    }

    render () {
        const {searchQuery} = this.state;

        return (
            <div>
                <p>ENTER SEARCH QUERY:</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Query:
                        <input type="text" value={searchQuery} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}