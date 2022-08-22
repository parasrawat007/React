import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {

    const [term, setTerm] = useState('');


    // useEffect(async() => {                                   ########## Invalid
    //     const search = await axios.get('');
    //     search();
    // }, [term]);


    // useEffect(() => {
    //     const search = async () => {
    //         await axios.get('');
    //     }
    //     search();
    // }, [term]);

    // useEffect(() => {
    //     (async () => {
    //         await axios.get('');
    //     })();
    // }, [term]);

    useEffect(() => {
        axios.get('')
        .then((response)=()=>{
            console.log(response.data);
        });
    }, [term]);
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