import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div>
          <div className={styles.number}>+50</div>
          <div className={styles.label}>Адвокатов в команде</div>
        </div>
        <div>
          <div className={styles.number}>+99%</div>
          <div className={styles.label}>Успешных дел</div>
        </div>
        <div>
          <div className={styles.number}>+720</div>
          <div className={styles.label}>Клиентов по всему миру</div>
        </div>
      </div>
    </section>
  );
}
