import React from 'react';

class SearchBar extends React.Component {
    //   Context(State undefined) Solution using constructor  
    // constructor(){
    //     this.onFormSubmit=this.onFormSubmit.bind(this);
    // }
    
    state = { term: '' };
    // Context(State undefined) Solution using arrow function  
    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term);
    }

    //Problem state undefined
    // onFormSubmit(event)
    // {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                {/* Context(State undefined) Solution using inline arrow function  */}
                {/* <form className='ui form' onSubmit={(event)=>this.onFormSubmit(event)}> */}
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