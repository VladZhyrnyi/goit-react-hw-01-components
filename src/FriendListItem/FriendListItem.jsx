import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export function FriendListItem ({avatar, name, isOnline}) {
  let className = css.status;
  if(isOnline) {
    className += ' online';
  }
  return (
    <li className={css.item}>
      <span className={className}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}