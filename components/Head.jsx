import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Kosutav Singh is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="koustav singh, koustav, singh, web developer, koustav web developer, koustav developer, mern stack, koustav singh portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Koustav Singh's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Koustav S',
};
