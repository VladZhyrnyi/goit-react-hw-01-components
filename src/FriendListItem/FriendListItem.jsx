import PropTypes from 'prop-types';
import clsx from 'clsx';


import css from './FriendListItem.module.css';

export function FriendListItem ({avatar, name, isOnline}) {
  return (
    <div className={css.wrapper}>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <span className={css.name}>{name}</span>
      <span className={clsx(css.status, isOnline && css.online)}></span>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}