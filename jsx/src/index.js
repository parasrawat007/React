//Import the React And React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

const getButtontext=()=>{
    return 'Click On Me !'
}

//Create a React Component
const App = () => {
    const buttonText='Click Me!';
    return (
        <div>
            <label className='label' for='name'>Name :</label>
            <input id='name' type='text' />
            {/* <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button> */}
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtontext()}</button>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.getElementById('root')
);