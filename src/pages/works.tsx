import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/pages/works.module.scss";
import Footer from "@/components/Footer";
import Bar from "@/components/Bar";
import { client } from "@/libs/client";
import type { Work } from "@/types/works";

// propsとして渡される値の型定義
type Props = {
  works: Work[];
};

const Works = ({ works }: Props) => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>

      <div className={styles.root}>
        <div className={styles.heading}>
          <h1>WORKS</h1>
        </div>

        {/* ここからメインコンテンツ */}

        <div className={styles.contents}>
          <ul className={styles.list}>
            {works.map((value) => (
              <li key={value.id}>
                <Link href={`/${value.id}`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      className={styles.image}
                      src={value.thumbnail.url}
                      alt={value.title}
                      width={1440}
                      height={875}
                    />
                  </div>
                  <div className={styles.list_texts}>
                    <h2>{value.title}</h2>
                    <p>{value.caption}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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

// microCMSのデータを取得
export async function getStaticProps() {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};

export default Works;
