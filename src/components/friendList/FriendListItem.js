import PropTypes from 'prop-types';
import cs from './FriendList.module.css';

export default function FriendListItem({avatar, name, isOnline}){
    return(
        <li className={cs.item}>
            <span className={cs.status} 
            style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
            <img className={cs.avatar} src={avatar} alt={name} width="48" />
            <p className={cs.name}>{name}</p>
        </li>
    

    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

