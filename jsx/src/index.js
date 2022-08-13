//Import the React And React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () => {
    // const buttonText='Click Me!';
    // const buttonText=[10,20];
    // const buttonText=['Hello ' ,'World!!'];
    const buttonText = { text: "Click Me" };
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <label className='label' htmlFor='name'>Name :</label>
            <input id='name' type='text' />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};

//Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.getElementById('root')
);