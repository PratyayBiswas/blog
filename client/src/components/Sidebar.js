import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function Sidebar({ btnTxt, url }) {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchData =async () => {
            const res = await  axios.get('/topics');
            console.log(res);
            setTopics(res.data);
        }
        fetchData();
    }, []);
    const history = useHistory();

    const topicList = topics.map(item => {
        return(
            <li>{item.name}</li>
        );
    })
    return (
        <div className="body-right">
                <button className="create-post-btn" onClick={() => history.push(`${url}`)}>{btnTxt}</button>
                {/* <div className="divider-v"></div> */}
                <div className="divider-h bgLightGrey"/>
                <div className="body-right-container">
                    <div className="sidebar-topicList">
                        <h3>Topics</h3>
                        <ul>
                        {topicList}
                        </ul>
                    </div>
                </div>
            </div>
    )
}
