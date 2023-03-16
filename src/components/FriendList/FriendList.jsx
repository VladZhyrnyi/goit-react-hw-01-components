import PropTypes from 'prop-types';
import { FriendListItem } from 'FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
