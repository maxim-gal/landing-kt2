import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Экспертные юридические услуги</h1>
          <p className={styles.text}>
            Наша миссия — достижение совершенства в юридических услугах,
            стремление к честным и прозрачным отношениям с каждым клиентом.
            Более 20 лет опыта в юридической сфере.
          </p>
          <button className={styles.button}>Записаться на консультацию</button>
          <a href="#about" className={styles.link}>
            Узнать об успешных делах
          </a>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero.jpg"
            alt="Юрист"
            width={600}
            height={800}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
