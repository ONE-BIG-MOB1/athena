import React, { Component } from 'react';
import axios from 'axios';
import {ANCIENTS_URL} from '../../consts';
import {ERROR_QUERY_PARAM, FETCH_ERROR_FAILURE_MSG} from './consts';

export default class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: ''
        };
    }

    componentDidMount() {
        this.updateErrorMsg();
    }

    updateErrorMsg() {
        Error.fetchError().then((msg) => {
            this.setState({
                errorMsg: msg
            });
        });
    }

    static getErrorUrl() {
        return `${ANCIENTS_URL}${ERROR_QUERY_PARAM}`;
    }

    static async fetchError() {
        try {
            return await axios.get(Error.getErrorUrl());
        } catch (err) {
            const {response: {data: {error = FETCH_ERROR_FAILURE_MSG} = {}} = {}} = err;
            return error;
        }
    }

    render () {
        const {errorMsg} = this.state;

        return (
            <div className="error">
                <h2>ERROR:</h2>
                <p>{errorMsg}</p>
            </div>
        );
    }
}