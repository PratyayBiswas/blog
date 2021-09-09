import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

export default function Post() {

    const location = useLocation().pathname.split('/')[2];

    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/post/${location}`);
            console.log(res);
            setData(res.data);
            } catch (e) {
                console.log(e);
                setError(e)
            }
            
        }
        fetchData();
    }, [location]);

    if(error){
        return(
        <div className="error-container">
            <span>Error occured!</span>
            <span>Either removed or internal server error</span>
            </div>
        )
    }

    return (
        <>
            <div className="body-left">
                <h1 className="post-title">{data.title}</h1>
                <div className="post-item-info">
                    <span className="when-whom">
                        Posted on <a href="#">{data.createdAt}</a>
                    </span>
                    <span className="when-whom">
                        -by <a href="#">{data.username}</a>
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

                <p className="post-content">{data.content}</p>
            </div>
            <Sidebar btnTxt="Create new Post" url="/createpost" />
        </>
    )
}
