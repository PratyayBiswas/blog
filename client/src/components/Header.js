import React from 'react';

const Header = () => {
    return (
        // <header>
        //     <div className="header-top">
        //         <h1 className="zero">
        //             <a href="">Title</a>
        //         </h1>
        //         <form action="">
        //             <input type="text" placeholder="Search" />
        //             <button>Search</button>
        //         </form>
        //     </div>
        //     <span>Stories of service from around the world</span>
        //     <img src="/assets/images/stars.jpg" alt="not" />
        //     <nav className="navbar">
        //         <ul className="navbar-ul">
        //             <li className="navbar-li"><a className="navbar-a" href="#">Welcome</a></li>
        //             <li className="navbar-li"><a className="navbar-a" href="#">Stories</a></li>
        //             <li className="navbar-li"><a className="navbar-a" href="#">Contributor guidelines</a></li>
        //             <li className="navbar-li" ><a className="navbar-a topic-tab" href="">Topics</a>
        //                 <ul class="dropdown-menu">
        //                     <li><a href="#">Action</a></li>
        //                     <li><a href="#">Another action</a></li>
        //                     <li><a href="#">Something else here</a></li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>


        <>
            <div style={{ height: "60px", width: "100%" }}>
                <div className="header-container">
                    <a className="h100" href="/">
                        <img className="h100 logo" src="/assets/images/testLogo.png" alt="logo" />
                    </a>
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
                            <li className="navbar-li"><a className="navbar-a" href="/">Welcome</a></li>
                            <li className="navbar-li"><a className="navbar-a" href="/">Stories</a></li>
                            <li className="navbar-li"><a className="navbar-a" href="/">Contributor guidelines</a></li>
                            <li className="navbar-li" >
                                <a className="navbar-a topic-tab" href="">Topics
                                    <i className="fas fa-caret-down" style={{marginLeft: "10px"}} />
                                </a>
                                <ul class="dropdown-menu">
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
                        <img className="img-profile" src="/assets/images/cat.jpg" alt="" />
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
