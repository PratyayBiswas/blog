import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Sidebar({ btnTxt, url }) {
    const history = useHistory();
    return (
        <div className="body-right">
                <button className="create-post-btn" onClick={() => history.push(`${url}`)}>{btnTxt}</button>
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
    )
}
