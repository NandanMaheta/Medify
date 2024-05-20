import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <div className={styles.Header}>
        <p className={styles.HeaderText}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>
    </div>
  );
}
