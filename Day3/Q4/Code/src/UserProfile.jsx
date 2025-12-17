import UserInfo from "./UserInfo";

function UserProfile() {
  const userName = "K Niveda";
  const userAge = 29;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;
