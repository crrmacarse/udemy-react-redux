import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                Are you sure about this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar = {faker.image.avatar()} 
                    timestamp = "May 03, 2019" 
                    author = "Alex"
                    content = "Lorem Ipmsum Dolor"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar = {faker.image.avatar()} 
                    timestamp = "May 03, 2019" 
                    author = "Jane"
                    content = "I like this subject"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar = {faker.image.avatar()} 
                    timestamp = "May 03, 2019" 
                    author = "Joshua"
                    content = "I like this writing"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar = {faker.image.avatar()} 
                    timestamp = "May 03, 2019" 
                    author = "Joseph"
                    content = "Sample data only"
                />
            </ApprovalCard>
        </div>
    );
};
 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
