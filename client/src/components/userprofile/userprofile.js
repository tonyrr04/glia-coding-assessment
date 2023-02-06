import "./userprofile.scss";

function UserProfile({ userProfile }) {
  return (
    <div className="userprofile-container">
      <h3>Current User Profile</h3>
      {!userProfile && <p>No user profile exists</p>}
      {userProfile && (
        <div>
          <p>
            <span>Name:</span> {userProfile.name}
          </p>
          <p>
            <span>Accessibility:</span> {userProfile.accessibility}
          </p>
          <p>
            <span>Price:</span> {userProfile.price}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
