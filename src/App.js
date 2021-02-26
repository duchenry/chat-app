import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx"
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
  5606d523-4c47-419f-9318-ae1339cd3cf4"
      userName="henry"
      userSecret="43653661"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
};

export default App;
