import PropTypes from 'prop-types'
import cs from './Profile.module.css'

export default function Profile({username, tag, location, avatar, stats:{followers,views,likes } }){
 return (
  <div className={cs.profile}>
  <div className={cs.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={cs.avatar}
    />
    <p className={cs.name}>{username}</p>
    <p className={cs.tag}>@{tag}</p>
    <p className={cs.location}>{location}</p>
  </div>

  <ul className={cs.stats}>
    <li className={cs.item}>
      <span className={cs.label}>Followers</span>
      <span className={cs.quantity}>{followers}</span>
    </li>
    <li className={cs.item}>
      <span className={cs.label}>Views</span>
      <span className={cs.quantity}>{views}</span>
    </li>
    <li className={cs.item}>
      <span className={cs.label}>Likes</span>
      <span className={cs.quantity}>{likes}</span>
    </li>
  </ul>
</div>
 )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
};
