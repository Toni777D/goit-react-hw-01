import FriendListItem from "../FriendListItem/FriendListItem";
import style from "../FriendList/FriendList.module.css"


export default function FriendList({friends}) {
  return (
    
      <ul className={style.list}>
          {friends.map(item => (
            <li key={item.id} className={style.item}>
              <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline}/>
              </li>
          ))}
      </ul>
    
  );
}
