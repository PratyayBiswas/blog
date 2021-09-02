import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function CreatePost() {

    const [titleState, setTitleState] = useState('');
    const [contentState, setContentState] = useState('');
    const [imageState, setImageState] = useState('');
    const [topic, setTopic] = useState('Tech');
    const checkTopic = () => {
        // console.log(topic === '');
        if (topic === '') {
            return (
                <div className="createPost-addTopic">
                    <i className="fas fa-plus" />
                    Add Topic
                </div>
            );
        }
        else {
            return (
                <>
                    <div className="createPost-deleteTopic">
                        <i className="fas fa-times" style={{ cursor: "pointer" }} onClick={() => setTopic('')} />
                        <span>{topic}</span>
                    </div>

                </>
            );
        }
    }
    return (
        <>
        <div className="body-left">
            <form className="createPost-form" action="">
                <div className="createPostForm-div">

                    <input
                        className="createPost-title"
                        type="text" placeholder="Title"
                        onChange={(event) => setContentState(event.target.value)}
                        value={contentState}
                    />

                    <i className="far fa-times-circle cancel-icon" />
                    <label className="createPost-inpuImgLabel" htmlFor="inputImg">
                        <i className="fas fa-plus-circle" />
                        <span>Add Image</span>
                        {console.log('imagesss')}
                    </label>
                    <input id="inputImg" type="file" style={{ display: "none" }} />

                    {/* src="assets/images/img5.jpg" */}
                    <img className="post-img" alt="" src="assets/images/img5.jpg" />
                    <div className="createPost-addDeleteTopic">
                        {checkTopic()}
                    </div>

                    <textarea
                        className="createPost-content"
                        type="text"
                        placeholder="Write it all..."
                        onChange={(event) => setTitleState(event.target.value)}
                        value={titleState}
                    />
                </div>
            </form>
        </div>
        <Sidebar btnTxt="Publish" url="/" />
        </>
    )
}
