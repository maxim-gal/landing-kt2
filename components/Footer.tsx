import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.itemTitle}>Найдите нас:</div>
          <div className={styles.itemText}>г. Москва, ул. Тверская, 1</div>
        </div>
        <div>
          <div className={styles.itemTitle}>Контакты:</div>
          <div className={styles.itemText}>info@advher.ru</div>
        </div>
        <div>
          <div className={styles.itemTitle}>Часы работы:</div>
          <div className={styles.itemText}>Круглосуточно</div>
        </div>
      </div>
      <div className={styles.bottom}>ADVHER</div>
    </footer>
  );
}
