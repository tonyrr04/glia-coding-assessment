import axios from "axios";
import { useEffect, useState } from "react";
import "./activity.scss";

function Activity(props) {
  const [activity, setActivity] = useState(null);

  // requests activity data from the server
  const getActivity = () => {
    axios
      .get("http://localhost:4000/activity")
      .then((result) => {
        setActivity(result.data);
      })
      .catch((err) => {
        setActivity(null);
      });
  };

  useEffect(() => {
    getActivity();
  }, [props]);

  return (
    <div className="activity-container">
      <h1>Activity Details</h1>
      {!activity && <p>No activity to display at the moment</p>}
      {activity && (
        <div className="activity-info">
          <p>
            <span>Accessibility:</span> {activity.accessibility}
          </p>
          <p>
            <span>Activity:</span> {activity.activity}
          </p>
          <p>
            <span>Key:</span> {activity.key}
          </p>
          <p>
            <span>Link:</span> {activity.link}
          </p>
          <p>
            <span>Participants:</span> {activity.participants}
          </p>
          <p>
            <span>Price:</span> {activity.price}
          </p>
          <p>
            <span>Type:</span> {activity.type}
          </p>
        </div>
      )}
    </div>
  );
}

export default Activity;
