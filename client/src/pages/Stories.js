import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Stories = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const res = await axios.get('/post');
            // console.log(res);
            setPosts(res.data);
        }

        fetchData();
        
    }, []);

    const dataList = posts.map((post) => {
        console.log(post);
        return <PostItem key={post._id} post={post} />;
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