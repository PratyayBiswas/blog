import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Post() {
    const title = "\tWhat is React.js";
    const content = "Hello";
    // const content = "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." + "\n\n" + "Declarative views make your code more predictable and easier to debug.";
    const author = "Pratyay Biswas";
    const postedOn = "10 August";
    return (
        <>
            <div className="body-left">
                <h1 className="post-title">This is Title</h1>
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
                <img className="post-img" src="assets/images/img5.jpg" alt="" />

                <span className="post-editDelete">
                    <i className="fas fa-edit edit-icon"></i>
                    <i className="fas fa-trash-alt delete-icon"></i>
                </span>

                <p className="post-content">{content}</p>
            </div>
            <Sidebar btnTxt="Create new Post" url="/createpost" />
        </>
    )
}
