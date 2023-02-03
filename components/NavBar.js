import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      Nav bar
      <div className={styles.MenuBtn}>
        <span className={styles.MenuBtn_line}></span>
        <span className={styles.MenuBtn_line}></span>
        <span className={styles.MenuBtn_line}></span>
      </div>
    </div>
  );
};

export default NavBar;
