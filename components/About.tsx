import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/about.jpg"
            alt="Команда юристов за рабочим столом"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Познакомьтесь с нашей специализированной командой
          </h2>
          <p className={styles.text}>
            Мы объединили лучших специалистов в области права, чтобы обеспечить
            максимальную защиту интересов наших клиентов. Наш подход основан на
            глубоком анализе каждой ситуации и индивидуальном внимании к
            деталям. Мы верим, что успех заключается в честности, прозрачности
            и профессионализме.
          </p>
        </div>
      </div>
    </section>
  );
}
