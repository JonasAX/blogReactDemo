import "./register.css";

export default function Register() {
    return (
        <div className="Register">
            <form className="registerForm">
                <span className="registerTitle">Register</span>
                <label>Email</label>
                <input type="text" placeholder="Enter your email..." />
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
                <button className="registerLoginButton">Login</button>
            </form>
        </div>
    );
}
