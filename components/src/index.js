import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail />
        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);