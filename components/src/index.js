import React from 'react';
import ReactDom from 'react-dom';

const App =()=>{
    return (
        <div className='ui container comments'>
            <div className='comment'>
                <a href='/ ' className='avatar'>
                    <image alt='avatar'/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        sam
                    </a>
                    <div className='metadata'>
                        <span className='date'>Today at 6:00PM</span>
                    </div>
                    <div className='text'>Nice Blog Post!</div>
                </div>
            </div>
        </div>
    );
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);