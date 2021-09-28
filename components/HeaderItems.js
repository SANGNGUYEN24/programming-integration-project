import styles from "../styles/headeritems.module.css";

function HeaderItems({ title, Icon }) {
  return (
    <div className={styles.headeritems}>
      <Icon className={styles.headericon} />
      <p className={styles.headertitle}>{title}</p>
    </div>
  );
}

export default HeaderItems;
