import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/pages/home.module.scss";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Bar from "@/components/Bar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Shooh&apos;s PF</title>
      </Head>

      <div className={styles.root}>
        <div className={styles.heading}>
          <Heading />
        </div>

        {/* ここからメインコンテンツ */}
        
        <div className={styles.contents}>
          <div className={styles.pageLinks}>
            <Link href="/about" className={styles.pageLinks_item}>
              <div className={`${styles.flame} ${styles.greenGrad}`}>
                <Image
                  className={styles.image}
                  src="/image/about.png"
                  alt="about"
                  width={240}
                  height={240}
                />
                <div className={styles.texts}>
                  <div className={styles.container}>
                    <h2>ABOUT</h2>
                    <p>BACKGROUND AND SKILLS</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/works" className={styles.pageLinks_item}>
              <div className={`${styles.flame} ${styles.pinkGrad}`}>
                <Image
                  className={styles.image}
                  src="/image/works.png"
                  alt="works"
                  width={240}
                  height={240}
                />
                <div className={styles.texts}>
                  <div className={styles.container}>
                    <h2>WORKS</h2>
                    <p>PRODUCTS CREATED TO DATE</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 下部のバー */}
        <div className={styles.bar}>
          <Bar />
        </div>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
