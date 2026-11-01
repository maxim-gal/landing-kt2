import Image from "next/image";
import styles from "./Blog.module.css";

const posts = [
  "Могут ли меня уволить на больничном?",
  "Что нужно знать о правах женщин на работе",
  "Почему бизнесу важно заботиться о равенстве",
];

export default function Blog() {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наш блог</h2>
          <div className={styles.subtitle}>
            Еженедельные обновления из мира права
          </div>
        </div>
        <div className={styles.grid}>
          {posts.map((title, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={`/images/blog-${i + 1}.jpg`}
                alt={title}
                width={400}
                height={250}
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              <div className={styles.cardTitle}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
