import styles from "../styles/LayoutGrid.module.scss";

export default function LayoutGrid({ children }) {
  return <main className={styles.LayoutGrid}>{children}</main>;
}
