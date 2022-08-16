import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div>
                        <label>Image Search</label>
                        <input
                            type='text'
                            className='ui form'
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;