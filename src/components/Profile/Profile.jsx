import stylesProfile from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={CSS.wrap}>
      <div className={CSS.description}>
        <img className={CSS.avatar} src={image} alt="User avatar" />
        <p className={CSS.name}>{name}</p>
        <p className={CSS.tag}>{tag}</p>
        <p className={CSS.location}>{location}</p>
      </div>

      <ul className={CSS.infoActiveList}>
        <li className={CSS.infoActiveItem}>
          <span className={CSS.itemTitle}>{stats.followers}</span>
          <span className={CSS.quantity}>1000</span>
        </li>
        <li className={CSS.infoActiveItem}>
          <span className={CSS.itemTitle}>{stats.views}</span>
          <span className={CSS.quantity}>2000</span>
        </li>
        <li className={CSS.infoActiveItem}>
          <span className={CSS.itemTitle}>{stats.likes}</span>
          <span className={CSS.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
}
