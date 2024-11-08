import styles from '..styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>A Little Bit About Me</h3>
      
      <section className={styles.section}>
        <p className={styles.introduction}>
          Hi! I'm <span className={styles.highlight}>[Your Name]</span>, a <span className={styles.highlight}>[your profession/job title]</span> with a passion for <span className={styles.highlight}>[key interests or expertise]</span>. I specialize in <span className={styles.highlight}>[your specializations or technologies]</span>.
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Skills</h4>
        <ul className={styles.skillsList}>
          <li className={styles.skillItem}>Skill 1 (e.g., JavaScript)</li>
          <li className={styles.skillItem}>Skill 2 (e.g., React)</li>
          <li className={styles.skillItem}>Skill 3 (e.g., Node.js)</li>
          {/* Add as many as relevant */}
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Education</h4>
        <p className={styles.education}>
          <strong>Degree</strong> - Institution Name (Year)
          <br />
          Additional relevant educational details.
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Hobbies & Interests</h4>
        <p className={styles.description}>
          Share a little about what you enjoy doing outside of work, such as hobbies, personal projects, or interests.
        </p>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
