import Head from "next/head";
import Image from "next/image";
import Moment from "react-moment";

import styles from "@/styles/pages/workId.module.scss";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Bar from "@/components/Bar";
import { client } from "@/libs/client";
import type { Work } from "@/types/works";

// propsとして渡される値の型定義
type Props = {
  work: Work;
};

const WorkId = ({ work }: Props) => {
  const title = work.title;
  const body = work.body;
  const siteLink = work.siteLink;
  const gitLink = work.gitLink;
  const date = work.date;
  const thumbnail = work.thumbnail;
  const image = work.image;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* ここからメインコンテンツ */}

      <div className={styles.root}>
        <div className={styles.texts}>
          <h1>{title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: body.replace(/\n/g, "<br>"), // 改行させる
            }}
          ></p>
        </div>
        <div className={styles.links}>
          <div className={styles.left}>
            {gitLink && (
              <a href={gitLink} className={styles.gitLink} target="_blank">
                <Image
                  className={styles.image}
                  src="/image/github.svg"
                  alt="github"
                  width={19}
                  height={19}
                />
              </a>
            )}
            {siteLink && <Button text="Visit Site" url={siteLink} />}
          </div>
          <Moment format="YYYY.MM" className={styles.right}>
            {date}
          </Moment>
        </div>

        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={thumbnail.url}
              alt={title}
              width={1440}
              height={875}
            />
          </div>
          {image && (
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={image.url}
                alt={title}
                width={1440}
                height={875}
              />
            </div>
          )}
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

// 静的生成される全てページのパスを設定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });
  const works: Work[] = data.contents;
  const paths = works.map((content) => `/${content.id}`); // map関数で各ページのパスを生成
  return { paths, fallback: false };
};

// 記事のデータを取得
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data: Work = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      work: data,
    },
  };
};

export default WorkId;
