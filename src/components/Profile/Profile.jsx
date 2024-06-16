import style from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.wrap}>
      <div className={style.description}>
        <img className={style.avatar} src={image} alt={`${name} avatar`} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.infoActiveList}>
        <li className={style.infoActiveItem}>
          <span className={style.itemTitle}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.infoActiveItem}>
          <span className={style.itemTitle}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.infoActiveItem}>
          <span className={style.itemTitle}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
