import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>ADVHER</div>
        <nav className={styles.nav}>
          <a href="#">Главная</a>
          <a href="#about">О нас</a>
          <a href="#about">Наша команда</a>
          <a href="#">Локация</a>
          <a href="#">Департаменты</a>
          <a href="#contact">Контакты</a>
          <a href="#contact" className={styles.cta}>Записаться</a>
        </nav>
      </div>
    </header>
  );
}
