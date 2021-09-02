import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ authState, setAuthState }) => {
    const user = false;
    return (

        <>
            <div style={{ height: "60px", width: "100%" }}>
                <div className="header-container">
                    <Link to="/" className="h100" href="/">
                        <img className="h100 logo" src="/assets/images/testLogo.png" alt="logo" />
                    </Link>
                    <div>
                        <i className="social-icon fab fa-facebook-square" />
                        <i className="social-icon fab fa-linkedin" />
                        <i className="social-icon fab fa-twitter-square" />
                        <i className="social-icon fab fa-pinterest-square" />
                    </div>
                </div>
            </div>
            <header>
                <div className="header-container">
                    <nav>
                        <ul className="navbar-ul">
                            <li className="navbar-li"><Link to="/" className="navbar-a" href="/">Welcome</Link></li>
                            <li className="navbar-li"><Link to="/stories" className="navbar-a" href="/">Stories</Link></li>
                            <li className="navbar-li"><a className="navbar-a" href="/">Contributor guidelines</a></li>
                            <li className="navbar-li" >
                                <a className="navbar-a topic-tab" href="">Topics
                                    <i className="fas fa-caret-down" style={{ marginLeft: "10px" }} />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/" className="dropdown-a">Action</a></li>
                                    <div className="divider-h bgLightGrey" />
                                    <li><a href="/" className="dropdown-a">Another action</a></li>
                                    <div className="divider-h bgLightGrey" />
                                    <li><a href="/" className="dropdown-a">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="sign-search">
                        {authState && (
                            <>
                                <img className="img-profile" src="/assets/images/cat.jpg" alt="" onClick={() => setAuthState(false)} />
                            </>
                        )}
                        {!authState && (
                            <>
                                <button className="header-signInUp"><Link to="/login">Login</Link></button>
                                <button className="header-signInUp"><Link to="/register">Register</Link></button>
                            </>
                        )}
                        <label htmlFor="search">
                            <i className="search-icon fas fa-search"></i>
                        </label>
                        <form action="">
                            <input id="search" type="text" placeholder="Search..." />
                        </form>
                    </div>
                </div>

            </header>
        </>
    );
};

export default Header;
