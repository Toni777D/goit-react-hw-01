import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends: avatar, name, isOnline, id }) {
  return (
    <>
      <ul>
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      </ul>
    </>
  );
}
