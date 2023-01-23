import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import messageService from '../../SERVICES/message-service';
import './sidenav-one-group.css';

const SideNavOneGroup = ({openOneGroup}) => {

    const {id} = useParams();

    const [groupInfo, setGroupInfo] = useState();

    const getGroupInfo = async () => {
        console.log(id)
       const groupsInfo = await messageService.getGroupInfo(id);
       console.log(groupsInfo);
       setGroupInfo(groupsInfo);
    }

    useEffect(() => {
        getGroupInfo();
    }, [])

    return (
        <>
            <div className='sidenav-topbar'>
                <p onClick={openOneGroup} className="hover">&lt;</p>
                <p>All Channels</p>
            </div>
            <div className='sidenav-main-div'>
                <p>{groupInfo?.name}</p>
                <p>created by {groupInfo?.createdBy}</p>
                <p>{groupInfo?.description}</p>
                <p>MEMBERS</p>
                {groupInfo?.members.map(member => {
                    return (
                        <div key={member} className='member-div'>
                            <img src='assets/image.jpeg' alt='user-dp' />
                            <p>{member}</p>
                        </div>
                    )
                })}
                
            </div>
        </>
    )
}

export default SideNavOneGroup;