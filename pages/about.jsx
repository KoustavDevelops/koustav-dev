import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>A Little Bit About Me</h3>
      
      <section className={styles.section}>
        <p className={styles.introduction}>
          Hi! I'm <span className={styles.highlight}>Koustav Singh</span>, a <span className={styles.highlight}>full stack web dev</span> with a passion for <span className={styles.highlight}>coding, open-source, and creative projects</span>. I specialize in <span className={styles.highlight}>the MERN stack and DBMS</span>.
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Skills</h4>
        <ul className={styles.skillsList}>
          <li className={styles.skillItem}>C</li>
          <li className={styles.skillItem}>C++</li>
          <li className={styles.skillItem}>C#</li>
          <li className={styles.skillItem}>Java</li>
          <li className={styles.skillItem}>JavaScript</li>
          <li className={styles.skillItem}>ReactJS</li>
          <li className={styles.skillItem}>Node.js</li>
          <li className={styles.skillItem}>MySQL</li>
          <li className={styles.skillItem}>Solidity</li>
          <li className={styles.skillItem}>Web3.js</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Education</h4>
        <p className={styles.education}>
          <strong>Bachelors of Technology in Information Technology</strong> - Techno Main Salt Lake (2028)
          <br />
          <strong>Council for the Indian Certificate Examinations</strong> - K.E Carmel School, Amtala (2024)
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Hobbies & Interests</h4>
        <p className={styles.description}>
        Full-stack developer by day, gamer by night, and student of technology and creativity-always. 
        By day, I create intuitive digital solutions that are of high performance, transforming complex problems into elegant, user-friendly applications. 
        When the sun sets down, noses dip into virtual realms as quests get conquered, leveling up with the community of gamers around the globe. 
        Behind the screen, I am a fan of photography, freezing moments in my framing, playing with light, composition, and telling a story in each and every one of them. 
        A little later, I came to realize that life is also like code and games: a combination of strategy, creativity, and continuous learning. 
        It will drive me to create, explore, and evolve-be it with coding, gaming, or photographing.
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
