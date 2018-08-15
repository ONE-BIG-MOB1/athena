import React from 'react';
import tableify from 'tableify';

export default function SearchResults({results}) {
    const {ancients = {}} = results;
    const resList = tableify(ancients);
    return (
        <div className="search-results">
            {results && <h2 className="search-results__header">SEARCH RESULTS:</h2>}
            <div className="search-results__body" dangerouslySetInnerHTML={{__html: resList}}></div>
        </div>
    );
}