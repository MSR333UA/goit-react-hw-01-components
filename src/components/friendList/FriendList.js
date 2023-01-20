import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import cs from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={cs.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
};
