import React from 'react';
import { Link } from 'react-router-dom';

export default function PostItem({ post, key }) {

    console.log(post);
    console.log(key);

    const { title, content, author, postedOn } = post;
    return (
        <div className="post-item">
            <h1 className="post-item-title">{title}</h1>
            <div className="post-item-info">
                <span className="when-whom">
                    Posted on <a href="#">{postedOn}</a>
                </span>
                <span className="when-whom">
                    -by <a href="#">{author}</a>
                </span>
            </div>
            <div className="post-item-info">
                <span className="when-whom">
                    1 hour ago
                </span>
                <span className="when-whom post-topic">
                    Topic: <a href="#">Programming Language</a>
                </span>
            </div>
            <img className="img" src="/assets/images/img1.jpg" alt="" />
            <p>{content}</p>
            <Link to={`/post/${post._id}`}>
                <button>See Post...</button>
            </Link>

            <div className="divider-h bgLightGrey" />

        </div>
    )
}
