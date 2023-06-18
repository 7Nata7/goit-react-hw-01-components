import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
          <li className="friend-data">
             <span
              className={`status ${isOnline ? 'online' : 'offline'}`}
            ></span>
            <img 
            src={avatar} 
            alt="User avatar" 
            className="friend-avatar" 
            />
            <p className="name">{name}</p>
          </li>
  );
};

FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
