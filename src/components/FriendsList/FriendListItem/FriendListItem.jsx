import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';
import classNames from 'classnames/bind';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={classNames(style.status__off, isOnline && style.status__on)}
      >
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
