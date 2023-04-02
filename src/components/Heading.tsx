import styles from '@/styles/components/heading.module.scss';

const Heading = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.contents}>
          <h1>Shooh</h1>
          <p>A student learning Web Engineering and Design.</p>
        </div>
      </div>
    </>
  );
}

export default Heading;