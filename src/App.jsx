import Profile from "components/profile/Profile";
import user from './data/user'

import Statistics from "components/statistics/Statistics";
import data from './data/data'

import FriendList from "components/friendList/FriendList";
import friends from './data/friends'

import TransactionHistory from "components/transactions/TransactionHistory";
import transactions from './data/transactions'


export default function App () {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     <Statistics title="Upload status" stats={data}/>
     <FriendList friends={friends}/>
     <TransactionHistory items={transactions}/>

    </div>
  );
};
