import PropTypes from 'prop-types';
import cs from './FriendList.module.css';
import classNames from 'classnames/bind';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={cs.item}>
      <span
        className={classNames(cs.status, isOnline && cs.status__online)}
      ></span>
      <img className={cs.avatar} src={avatar} alt={name} width="48" />
      <p className={cs.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
