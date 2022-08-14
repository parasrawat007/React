import { faker } from '@faker-js/faker';
import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail
                author='sam'
                timeAgo='Today at 4:45PM'
                content='Nice Blog Post'
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author='alex'
                timeAgo='Today at 2:00AM'
                content='I like the subject'
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author='jane'
                timeAgo='Yesterday at 5:00PM'
                content='I liike the writing'
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);