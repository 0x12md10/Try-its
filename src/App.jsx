
import './App.css'

import { RecoilRoot, useRecoilValue } from 'recoil';

import { totalNotificationsSelector,notificationsAtom2 } from './ayncAtoms';


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

  const HomeNotificationCount = useRecoilValue(notificationsAtom2).home;
  const jobsNotificationCount = useRecoilValue(notificationsAtom2).jobs;
  const networkNotificationCount = useRecoilValue(notificationsAtom2).network;
  const notificationCount = useRecoilValue(notificationsAtom2).notifications;


  const totalNotifications = useRecoilValue(totalNotificationsSelector)

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



/*------------------------------*/







export default App
