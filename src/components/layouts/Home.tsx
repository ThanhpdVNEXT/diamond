import * as styles from '@/styles/layouts/Home';

type Home = {
  children: React.ReactNode;
};

const Home = ({ children }: Home) => {
  return (
    <div css={styles.root}>
      <div css={styles.container}>{children}</div>
    </div>
  );
};

export default Home;