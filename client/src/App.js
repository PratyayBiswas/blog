import React, { useState } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
// import Settings from './components/Settings';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    const user = true;
    const [authState, setAuthState] = useState(true);
    const [createState, setCreateState] = useState(false);
    // console.log(authState);
    return (
        <>
            <Router>
                <Header authState={authState} setAuthState={setAuthState} />
                <Switch>
                    <Body>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/stories" component={Stories} />
                        <Route exact path="/post/:id" component={Post} />
                        <Route exact path="/createpost">
                            {!authState ? <Login /> : <CreatePost />}
                        </Route>
                        <Route exact path="/login">
                            {authState ? <Home /> : <Login setAuthState={setAuthState} />}
                        </Route>
                        <Route exact path="/register">
                            {authState ? <Home /> : <Register />}
                        </Route>
                    </Body>
                </Switch>
            </Router>
        </>
    );
};

export default App;