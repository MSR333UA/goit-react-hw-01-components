// import './App.css'

import { Profile } from 'components/Profiles/Profile';
import { Statistics } from 'components/Statistic/Statistics';
import { FriendList } from 'components/FriendsList/FriendList';
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
