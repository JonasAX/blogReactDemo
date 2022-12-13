import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">
                        Update your account
                    </div>
                    <div className="settingsDeleteTitle">Delete account</div>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=400&dpr=1" alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Jonas" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="example@example.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
