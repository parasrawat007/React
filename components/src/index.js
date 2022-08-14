import { faker } from '@faker-js/faker';
import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='sam'
                    timeAgo='Today at 4:45PM'
                    content='Nice Blog Post'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='alex'
                    timeAgo='Today at 2:00AM'
                    content='I like the subject'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='jane'
                    timeAgo='Yesterday at 5:00PM'
                    content='I liike the writing'
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);