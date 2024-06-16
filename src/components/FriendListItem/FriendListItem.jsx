import styles from "../FriendListItem/FriendListItem.module.css"

export default function FriendListItem({ avatar, name, isOnline}) {
  return (
      <div className={styles.wrapList}>
        <img className={styles.image} src={avatar} alt={`${name} avatar`} width="48" />
        <p className={styles.name}>{name}</p>
        <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Offline"}</p>
    </div>
    
  );
}
