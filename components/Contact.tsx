import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.subtitle}>Свяжитесь с нами через форму</div>
      <form className={styles.form}>
        <div className={styles.row}>
          <input type="text" placeholder="Имя" className={styles.input} />
          <input type="tel" placeholder="Телефон" className={styles.input} />
        </div>
        <input type="email" placeholder="Email" className={styles.input} />
        <textarea
          placeholder="Ваше сообщение"
          className={styles.textarea}
        ></textarea>
        <button type="button" className={styles.button}>
          Отправить
        </button>
      </form>
    </section>
  );
}
