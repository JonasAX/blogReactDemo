import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

function App() {
    const user = false;
    return (
        <>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="register"
                    element={user ? <Home /> : <Register />}
                />
                <Route path="login" element={user ? <Home /> : <Login />} />
                <Route
                    path="settings"
                    element={user ? <Settings /> : <Register />}
                />
                <Route path="post/:postId" element={<Single />} />
                <Route path="write" element={user ? <Write /> : <Register />} />
            </Routes>
        </>
    );
}

export default App;
