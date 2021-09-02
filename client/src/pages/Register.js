import React from 'react'

export default function Register() {
    return (
        <div className="register">
            <form className="register-form" action="">
                <h1>Resister</h1>

                <label htmlFor="usernameId">Username</label>
                <input id="usernameId" type="text" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" />

                <button type="Submit">Resister</button>

                <a href="#">Have an account?</a>
            </form>
        </div>
    )
}
