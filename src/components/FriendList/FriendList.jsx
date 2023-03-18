import PropTypes from 'prop-types';
import { FriendListItem } from 'FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
