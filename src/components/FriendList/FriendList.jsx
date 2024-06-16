import FriendListItem from "../FriendList/FriendListItem/FriendListItem";

export default function FriendList({ friends: avatar, name, isOnline, id }) {
  return (
    <>
      <ul className={style.list}>
          {list.map(item => (
            <li key={id} className={style.item}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
              </li>
          ))}
      </ul>
    </>
  );
}
