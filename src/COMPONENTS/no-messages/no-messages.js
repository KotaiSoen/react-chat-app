import SideNav from "../sidenav/sidenav";
import TopNav from "../top-nav/top-nav";

import './no-messages.css';

const NoMessages = () => {
    return (
        <div className="no-message-container">
            <SideNav />
            <div className="no-message-main-div">
                <TopNav />
                <div className="no-message-empty-div">
                    <p>No Channel Has Been Selected!</p>
                </div>
            </div>
        </div>
    )
}

export default NoMessages;