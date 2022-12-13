import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <form className="loginForm">
                <span className="loginTitle">Login</span>
                <label>Email</label>
                <input type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    );
}
