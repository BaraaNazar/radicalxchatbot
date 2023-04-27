import React, { useEffect } from 'react';
import './App.css';
function App() {
  useEffect(()=>{
  window.botpressWebChat.init({
      botId: "bcfdea2b-cb3d-4ff1-a3fb-a554ea088e5f",
      hostUrl: "https://cdn.botpress.cloud/webchat/v0",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "bcfdea2b-cb3d-4ff1-a3fb-a554ea088e5f",
      showTimestamp: "true",
      showConversationsButton: "true",
      enableConversationDeletion: "true",
      botName:"RadicalX",
      botConversationDescription:"Front end lead",
      coverPictureUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fradicalxpinterest%2F&psig=AOvVaw3FxKYN-W1wOzB91EO2Qdcf&ust=1682686744644000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDYzt-Oyv4CFQAAAAAdAAAAABAI"
  });
  },[])
  return (
   <div className='h-screen w-screen flex justify-center items-center'>
   </div>
  );
}

export default App;
