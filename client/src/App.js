import { useState } from "react";
import "./App.scss";
import Activity from "./components/activity/activity";
import Form from "./components/form/form";
import UserProfile from "./components/userprofile/userprofile";

function App() {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <div className="app">
      <div className="col-1">
        <UserProfile userProfile={userProfile} />
        <div className="divider"></div>
        <Form updateUserProfile={setUserProfile} />
      </div>
      <div className="col-2">
        <Activity />
      </div>
    </div>
  );
}

export default App;
