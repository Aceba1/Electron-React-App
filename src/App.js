
import React from 'react';


export default function App() {

  return (
    <>
      <h1>I am App Component.</h1>
      <button onClick={() => {
        env.notificationApi.sendNotification('My custom notification!');
      }}>Notify</button>
    </>
  )
}
