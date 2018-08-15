import React from 'react';
import tableify from 'tableify';

export default function SearchResults({results}) {
    const resList = tableify(results.ancients);
    return (
        <div>
            <h2>SEARCH RESULTS:</h2>
            <div dangerouslySetInnerHTML={{__html: resList}}></div>
        </div>
    );
}