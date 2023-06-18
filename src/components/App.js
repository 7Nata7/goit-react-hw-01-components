import PropTypes from 'prop-types';
import Profile from './Profile';
import user from '../data/user.json';

import Statistics from './Statistics';
import data from '../data/data.json';

import FriendList from './FriendList'
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';


function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics 
      title="Upload Stats" 
      stats={data} />
      
      <FriendList 
      friends={friends} />

      <TransactionHistory 
      transactions={transactions} />;
    </div>

  );
}

App.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.node),
};

export default App;