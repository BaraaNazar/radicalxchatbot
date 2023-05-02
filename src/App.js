import React, { useEffect } from 'react';
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
          stylesheet:"file:///Users/baraanazar/Desktop/untitled%20folder/App.css",
          showBotInfoPage: "true",
          containerWidth: "100%25",
          layoutWidth: "100%25",
  });
const scrollContainer = document.getElementsByClassName("bpw-floating-button")
scrollContainer.style.backgroundColor = "blue";
scrollContainer.style.fontSize = "20px"
scrollContainer.style.width = "200px"
  },[])
  return (
   <div>
   </div>
  );
}

export default App;
