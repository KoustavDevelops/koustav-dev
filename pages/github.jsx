import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  if (!user || !repos) {
    return <p>Loading data...</p>; // Fallback UI in case data is not available
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
            priority
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_API_KEY;

  if (!username || !token) {
    return {
      notFound: true,
    };
  }

  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: {
          Authorization: `token ${token}`,
        },
      }),
    ]);

    const [user, repos] = await Promise.all([userRes.json(), repoRes.json()]);

    if (!userRes.ok || !repoRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const sortedRepos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    return {
      props: { title: 'GitHub', repos: sortedRepos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { title: 'GitHub', repos: [], user: null },
    };
  }
}

export default GithubPage;
