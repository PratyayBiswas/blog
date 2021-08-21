import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <h1 className="tilte-page">
                    <a href="">Title</a>
                </h1>
                <form action="">
                    <input type="text" placeholder="Search" />
                </form>
            </div>

            <span>Stories of service from around the world</span>
        </header>
    );
};

export default Header;