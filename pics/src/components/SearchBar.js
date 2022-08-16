import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div>
                        <label>Image Search</label>
                        <input
                            type='text'
                            className='ui form'
                            //onChange={this.onInputChange}
                            //onChange={(event)=>console.log(event.target.value)}
                            onChange={(e)=>console.log(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;