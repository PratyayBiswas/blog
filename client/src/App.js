import React from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Post from './pages/Post';


const App = () => {
    return (
        // <div className="container-main">
        //     <div className="container">
        //         <Header />
        //     </div>

        // </div>

        <>
            <Header />
            <Body>
                <Post />
            </Body>

        </>
    );
};

export default App;