import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound({user}) {
    return (
        <div className="notFound">
            <h1 className="notFoundTitle">Oops! You seem to be lost.</h1>
            <p className="notFoundElement">Here are some helpful links:</p>
            <Link className="notFoundElement" to="/">
                Home
            </Link>

            {user ? (
                <Link className="notFoundElement" to="/login">
                    Login
                </Link>
            ) : (
                <Link className="notFoundElement" to="/register">
                    Register
                </Link>
            )}
        </div>
    );
}

export default NotFound;
