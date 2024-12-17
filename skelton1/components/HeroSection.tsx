import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Empowering Students with Opportunities</h1>
        <p className={styles.subtitle}>
          A centralized platform connecting undocumented and immigrant students with career resources
        </p>
        <div>
          <button className={styles.primaryButton}>Explore Resourcess</button>
          <button className={styles.secondaryButton}>Get Started</button>
        </div>
      </div>
    </section>
  );
}
