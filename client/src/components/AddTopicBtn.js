import React from 'react'

export default function AddTopicBtn(flag) {

    if (flag) {
        return (
            <div>
                <i className="fas fa-times"></i>
            </div>
        );
    }


    return (
        <i className="fas fa-plus" />
        // <div>
        //     <div className="createPost-topicDIv">
        //         <button type="button" className="createPost-addTopic">
                    
        //             Add Topic
        //         </button>
        //         <ul>
        //             <li>Programming</li>
        //             <li>Food</li>
        //             <li>Environment</li>
        //         </ul>
        //     </div>
        // </div>
    )
}
