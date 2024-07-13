
// import React, { Suspense, useContext, useState } from 'react';

// const Dashboard = React.lazy(()=> import("./Dashboard"));
// const Landing = React.lazy(()=> import("./Landing"))

// import Dashboard from "./Dashboard";
// import Landing from "./Landing";
import './App.css'
// import { CountContext } from './context';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Nav from './Nav';
import { RecoilRoot, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/count';
import { homeAtom, jobsAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from './atoms';
import { useMemo } from 'react';

function App() {

  return (
    <RecoilRoot>
      <LinkedInNav/>
    </RecoilRoot>
  )
}

/*------------------------------*/
/*LinkedIn nav mimic*/
function LinkedInNav() {

  const HomeNotificationCount = useRecoilValue(homeAtom);
  const networkNotificationCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);

  // Aggregate notifications on ME.
  // normal way:
  // const totalNotifications = useMemo(()=> {
  //   return HomeNotificationCount + notificationCount + networkNotificationCount + jobsNotificationCount;
  // },[HomeNotificationCount,networkNotificationCount,notificationCount,jobsNotificationCount])

  //recoil way - use selectors;

  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return (
    <div>
      <button>Home ({HomeNotificationCount})</button>
      <button>Network  ({networkNotificationCount})</button>
      <button>Notifications  ({notificationCount})</button>
      <button>Jobs  ({jobsNotificationCount})</button>
      <button>Me ({totalNotifications})</button>
    </div>
  )
}


function ButtonUpdator() {
  const setHomeNotificationCount = useSetRecoilState(homeAtom);
  return (
    <button onClick={()=>setHomeNotificationCount(c => c + 1)}>Me</button>
  )
}

/*------------------------------*/

function Count() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <div>Count:{count} </div>
      <Button />
      {(count % 2 ==0) && <p>It is even</p>}
    </div>
  )
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);

  const handleIncrement = ()=> {
    setCount(count => count+1)
  }

  const handleDecrement = ()=> {
    setCount(count => count -1)
  }

  return (
    <div> 
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}





export default App
