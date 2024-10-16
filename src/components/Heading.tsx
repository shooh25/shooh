import styles from '@/styles/components/heading.module.scss';

const Heading = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.contents}>
          <h1>Shooh&apos;s PF</h1>
          <p>A student studying Web Engineering and Design.</p>
        </div>
      </div>
    </>
  );
}

export default Heading;
