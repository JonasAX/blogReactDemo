import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write";
import NotFound from "./pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  // Alert users
  const [alreadyClicked, setAlreadyClicked] = useState(false)
  function showAlert() {
    if (alreadyClicked) {
        return;
    }
    alert("⚠️☢️ This is website still under development. ☢️⚠️");
    console.warn('website under development');
    setAlreadyClicked(true);
  }


  const user = false;
  return (
    <div onClick={() => {showAlert()} }>
      <TopBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="settings" element={user ? <Settings /> : <Register />} />
        <Route path="post/:postId" element={<Single />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="/*" element={<NotFound user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
