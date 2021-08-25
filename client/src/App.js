import React from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Home from './pages/Home';
import Stories from './pages/Stories';


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
                <Stories />
            </Body>

        </>
    );
};

export default App;