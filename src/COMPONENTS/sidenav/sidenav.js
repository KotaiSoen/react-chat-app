import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import messageService from '../../SERVICES/message-service';
import Modal from '../modal/modal';
import SideNavOneGroup from '../sidenav-one-group/sidenav-one-group';
import './sidenav.css';


const SideNav = () => {

    const [groups, setGroups] = useState([]);

    const [oneGroup, setOneGroup] = useState(false);

    const [addChannel, setAddChannel] = useState(false);

    useEffect(() => {
        async function getGroupNames () {
            let groupNames = await messageService.getGroups();
            setGroups(groupNames);
        }

        getGroupNames();
        
        
    }, [groups]);

    const openModal = () => {
        setAddChannel(!addChannel);
    }

    const groupInitials = (name) => {
        return name.split(' ').map(letters => letters[0]).join('');
    }

    const openOneGroup = () => {
        setOneGroup((prev) => !prev, console.log(oneGroup));
    }

    return (
        <div className='sidenav-container'>
            {!oneGroup ? 
              <><div className='sidenav-topbar'>
                    <p>Channels</p>
                    <p className="hover" onClick={openModal}>+</p>
                </div>
                <div className='sidenav-search-bar'>
                        <button>Search</button>
                        <input type="text" />
                </div>
                <div className='sidenav-groups'>
                        {groups?.map(group => {
                            return (
                                <div key={group.name}>
                                    <Link to={`/messages/${group.id}`} className='sidenav-group' onClick={openOneGroup}>
                                        <p className='hover'>{groupInitials(group.name)}</p>
                                        <p className='hover'>{group.name}</p>
                                    </Link>
                                </div>    
                            );
                        })}
                </div>
                {addChannel && <Modal closeModal={openModal}/>}
                </> :
                <SideNavOneGroup openOneGroup={openOneGroup} />
            }

        </div>
    )
};

export default SideNav;

