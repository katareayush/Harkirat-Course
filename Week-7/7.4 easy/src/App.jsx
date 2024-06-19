import { useState , useMemo} from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue , useRecoilState } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationsAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotifcationCount  = useMemo(() => {
    return (networkNotificationCount + jobAtomCount + notificationsAtomCount + messagingAtomCount);
  } , [networkNotificationCount, jobAtomCount, notificationsAtomCount, messagingAtomCount] );

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationsAtomCount})</button>
      <button>Me ({totalNotifcationCount}) </button>
    </>
  )
}

export default App
