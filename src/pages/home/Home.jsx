import Header from "../../components/header/Header.jsx";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Posts from "../../components/posts/Posts.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
