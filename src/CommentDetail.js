import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avtarimage} alt="avtar" ></img>
            </a>
            <div className="content">
                <a className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    {props.comment}    
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;
