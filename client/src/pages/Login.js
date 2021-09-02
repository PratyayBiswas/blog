import React from 'react'

export default function Login({ setAuthState }) {
    const onUserLogin = () => {
        setAuthState(true);
    }
    return (
        <div className="login">
            <form className="login-form" action="">
                <h1>Login</h1>

                <label htmlFor="usernameId">Username</label>
                <input id="usernameId" type="text" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" />

                <button type="Submit" onClick={onUserLogin}>Login</button>

                <a href="#">Don't have an account?</a>
            </form>
        </div>

    );
}

// Photo by <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
