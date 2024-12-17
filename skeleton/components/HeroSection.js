import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to UndocuLink</h1>
      <p>Empowering undocumented and immigrant students with career opportunities.</p>
      <div>
        <button className={styles.primaryBtn}>Explore Jobs</button>
        <button className={styles.secondaryBtn}>Sign Up</button>
      </div>
    </section>
  );
};

export default HeroSection;
