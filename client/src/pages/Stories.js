import React from 'react';
import PostItem from '../components/PostItem';
import Sidebar from '../components/Sidebar';

const Stories = () => {

    const posts = [
        {
            key: 1,
            title: "What is React.js",
            content: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." + "\n" + "Declarative views make your code more predictable and easier to debug.",
            author: "Pratyay Biswas",
            postedOn: "10 August"
        },
        {
            key: 2,
            title: "What is Node.js",
            content: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following \"hello world\" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.",
            author: "Dibyakanta Mukherjee",
            postedOn: "10 August"
        },
        {
            key: 3,
            title: "What is Java",
            content: "Java is at the heart of our digital lifestyle. It's the platform for launching careers, exploring human-to-digital interfaces, architecting the world's best applications, and unlocking innovation everywhere—from garages to global organizations.",
            author: "Subhajit Dutta",
            postedOn: "10 August"
        }
    ]


    const dataList = posts.map((post) => {
        return <PostItem post={post} key={post.key}/>;
    });

    return (
        <>
        <div className="body-left">
            {dataList}
        </div>
        <Sidebar btnTxt="Create new Post" url="/createpost"/>
        </>
    )
}

export default Stories;