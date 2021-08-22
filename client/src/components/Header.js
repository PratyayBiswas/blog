import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <h1 className="zero">
                    <a href="">Title</a>
                </h1>
                <form action="">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </form>
            </div>
            <span>Stories of service from around the world</span>
            <img src="/assets/images/stars.jpg" alt="not" />
            <nav className="navbar">
                <ul className="navbar-ul">
                    <li className="navbar-li"><a className="navbar-a" href="#">Welcome</a></li>
                    <li className="navbar-li"><a className="navbar-a" href="#">Stories</a></li>
                    <li className="navbar-li"><a className="navbar-a" href="#">Contributor guidelines</a></li>
                    <li className="navbar-li" ><a className="navbar-a topic-tab" href="">Topics</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
