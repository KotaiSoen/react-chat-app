import { useRef } from 'react';
import './modal.css';

const Modal = ({closeModal}) => {

    const channelNameRef = useRef();

    const channelDescriptionRef = useRef();

    const createNewChannel = () => {
        console.log(channelDescriptionRef.current.value, channelNameRef.current.value);
    }

    const closeModalFunction = (className) => {
        if(className === 'modal-div') {
            closeModal();
        }
    }

    return (
        <div className='modal-div' onClick={(e) => closeModalFunction(e.target.className)}>
            <h3>NEW CHANNEL</h3>
            <input type="text" placeholder='channel name' ref={channelNameRef}/>
            <input type="text" placeholder='channel description' ref={channelDescriptionRef}/>
            <button onClick={createNewChannel}>Create</button>
        </div>
    )
}

export default Modal;