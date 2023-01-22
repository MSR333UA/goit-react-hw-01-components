// import './App.css'

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';

import data from 'data/data';
import user from '../../data/user';
import friends from '../../data/friends';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
