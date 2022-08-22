import React, { useState, useEffect } from 'react';

const Search = () => {

    const [term, setTerm] = useState('');

    console.log('I Run With Every Render');

    // useEffect(() => {
    //     console.log('I Only Run Once');
    // }, []);

    // useEffect(() => {
    //     console.log('I Run After Every Render and  at Initial Render');
    // });

    // useEffect(() => {
    //     console.log('I Run After Every Render when data changes');
    // },[term,termTwo]);


    return (
        <div className='ui form'>
            <div className='feild'>
                <label>Enter search term </label>
                <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className='input' />
            </div>
        </div>
    );
}
export default Search;