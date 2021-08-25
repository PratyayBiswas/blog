import React from 'react';
import CreatePost from './CreatePost';

export default function Body({ children }) {
    console.log("home");
    return (

        <div className="body-container">

            <div className="body-left">
                {children}
            </div>

            <div className="body-right">
                <button className="create-post-btn">Lets Add</button>
                {/* <div className="divider-v"></div> */}
                <div className="divider-h bgLightGrey"/>
                <div className="body-right-container">
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                </div>
            </div>

        </div>
    )
}
