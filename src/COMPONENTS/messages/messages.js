import { useRef } from "react";
import SideNav from "../sidenav/sidenav";
import TopNav from "../top-nav/top-nav";

import './messages.css';

const Messages = () => {

    const messageRef = useRef();

    const sendMessage = () => {
        
        console.log(messageRef.current.value);
    }

    return (
        <div className="message-container">
            <SideNav />
            <div className="message-main-div">
                <TopNav />
                <div className="message-chat-div">
                    <div className="message">
                        <img src="assets/image.jpeg"/>
                        <div>
                            <div className="name-time">   
                                <p>12:09</p>
                                <p>Kotai Soen</p>
                            </div>
                            <p>Hello there. All I wanted to say is that you have a very big head</p>
                        </div>   
                    </div>
                    <div className="chat-box">
                        <textarea name="" id="" cols="90" rows="2" style={{resize: 'none'}} ref={messageRef}></textarea>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;