import React from "react";

function Login() {
    return (
        <div className="container">
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Login;