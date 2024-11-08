import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'koustavdev.netlify.app',
    href: 'https://koustavdev.netlify.app',
  },
  {
    social: 'email',
    link: 'koustavsinghcollege@gmail.com',
    href: 'mailto:koustavsinghcollege@gmail.com',
  },
  {
    social: 'github',
    link: 'KoustavDevelops',
    href: 'https://github.com/KoustavDevelops',
  },
  {
    social: 'linkedin',
    link: 'Koustav Singh',
    href: 'https://www.linkedin.com/in/koustav-singh/',
  },
  {
    social: 'twitter',
    link: 'KoustavTweets',
    href: 'https://www.twitter.com/KoustavTweets',
  },
  {
    social: 'instagram',
    link: '_koustaavs_',
    href: 'https://www.instagram.com/_koustaavs_',
  },
  {
    social: 'facebook',
    link: 'Koustav S',
    href: 'https://www.facebook.com/koustavSingh.2005',
  },
  {
    social: 'telegram',
    link: '@devilpathsofglory',
    href: 'https://t.me/devilpathsofglory',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
