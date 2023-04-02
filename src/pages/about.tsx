import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/pages/about.module.scss";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Bar from "@/components/Bar";

const About = () => {
  // スキルの名前と公式hpのURLを定義
  interface MySkill {
    name: string;
    url: string;
  }

  // スキルの配列作成
  const skillList: MySkill[] = [
    { name: "python", url: "https://www.python.org/" },
    { name: "react", url: "https://ja.reactjs.org/" },
    { name: "vue", url: "https://ja.vuejs.org/" },
    { name: "typescript", url: "https://www.typescriptlang.org/" },
    { name: "sass", url: "https://sass-lang.com/" },
    { name: "figma", url: "https://www.figma.com/ja/downloads/" },
    { name: "adobexd", url: "https://helpx.adobe.com/jp/support/xd.html" },
  ];

  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className={styles.root}>
        <div className={styles.heading}>
          <Heading />
        </div>

        {/* ここからメインコンテンツ */}

        <div className={styles.contents}>
          <div className={styles.grid}>
            <div className={styles.profile}>
              <h2>Profile</h2>
              <p>
                フロントエンドに興味があり、勉強しながら色々作ってます。プログラミングだけではなく、デザインもたまにやります。<br />
                <br />
                大学2年間は、フリーランス的にWeb/UIデザインやサイトのコーディングを行っていました。
              </p>
            </div>
            <div className={styles.career}>
              <h2>Career</h2>
              <p>
                <span>2021.03</span>立命館大学 情報理工学部 入学
              </p>
              <p>
                <span>2022.08</span>フェンリル株式会社 サマーインターン
              </p>
            </div>
          </div>
          <div className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.skills_list}>
              {skillList.map((value, i) => (
                <a href={value.url} target="_blank" key={i}>
                  <Image
                    className={styles.image}
                    src={`/skill-icons/${value.name}.png`}
                    alt="about"
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>
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

export default About;
