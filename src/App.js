import './App.css';

import { Profile } from './components/profile/Profile';
import userData from './components/data/userData.json';

import {EventBoard,BaseTitle} from './components/statistic/utils';
import data from './components/data/data.json';

import {DesckList} from './components/friendList/DesckList';
import friends from './components/data/friends.json';


import {TableItem} from './components/transaction/TableItem';
import trancactions from './components/data/transactions.json';





export default function App() {
  return (
      <>
    <div>
      <Profile item={userData} />
    </div>

    <>
      <BaseTitle  title="Upload stats"/>
      <EventBoard className="" items={data} />
    </>

    <>
      <DesckList className="" items={friends}/>
    </>

    <>
      <TableItem className="" items={trancactions}/>
    </>
    
  </>
  );


}

