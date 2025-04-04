import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Cycles</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.workTime}`} />
        <span className={`${styles.cyclesDot} ${styles.pauseTime}`} />
        <span className={`${styles.cyclesDot} ${styles.workTime}`} />
        <span className={`${styles.cyclesDot} ${styles.pauseTime}`} />
        <span className={`${styles.cyclesDot} ${styles.workTime}`} />
        <span className={`${styles.cyclesDot} ${styles.pauseTime}`} />
        <span className={`${styles.cyclesDot} ${styles.workTime}`} />
        <span className={`${styles.cyclesDot} ${styles.longPauseTime}`} />
      </div>
    </div>
  );
}
