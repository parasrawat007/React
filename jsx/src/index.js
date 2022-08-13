//Import the React And React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () => {
    return (
        <div>
            <label class='label' for='name'>Name :</label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.getElementById('root')
);