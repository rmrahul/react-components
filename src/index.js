import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './CommentDetail';
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <div>
                    Warning!!!
                </div>
                <div>
                    Are you sure?
                </div>
            </ApprovalCard>

            <ApprovalCard >
                <Comment author={faker.name.firstName()}
                    timeAgo="Today at 12:00pm"
                    avtarimage={faker.image.avatar()}
                    comment="Nice blog"
                ></Comment>
            </ApprovalCard>
            <ApprovalCard>
                <Comment author={faker.name.firstName()}
                    timeAgo="Today at 14:00pm"
                    avtarimage={faker.image.avatar()}
                    comment="Nice blog"
                ></Comment>
            </ApprovalCard>

            <ApprovalCard>
                <Comment author={faker.name.firstName()}
                    timeAgo="Today at 16:00pm"
                    avtarimage={faker.image.avatar()}
                    comment="Nice blog"
                ></Comment>
            </ApprovalCard>


        </div>
    )
}

ReactDOM.render(
    <App></App>,
    document.querySelector("#root")
)

