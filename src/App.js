import './App.css';

import {UserList,Section} from './components/user/utils'
import user from './components/user/user.json'

import {EventBoard,BaseTitle,SectionStat} from './components/statistic/utils'
import data from './components/statistic/data.json';


import {DesckList} from './components/friendList/DesckList/DesckList';
import friends from './components/friendList/friends.json';
import {SectionFriend} from './components/friendList/SectionFriend/SectionFriend'

import {TableItem} from './components/transaction/TableItem/TableItem'
import trancactions from './components/transaction/transactions.json'
import {SectionTrancaction} from './components/transaction/SectionTrancaction/SctionTrancaction'




export default function App() {
  return (
  <>
    <Section>
      <UserList className = "user-block" items={user}/>
    </Section>
    
    <SectionStat className="statistic">
      <BaseTitle  title="Upload stats"/>
      <EventBoard className="" items={data} />
    </SectionStat>

    <SectionFriend>
      <DesckList className="" items={friends}/>
    </SectionFriend>

    <SectionTrancaction>
      <TableItem className="" items={trancactions}/>
    </SectionTrancaction>
    
  </>
  );


}

