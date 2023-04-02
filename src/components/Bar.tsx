import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/components/bar.module.scss";

const Bar = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.left}>
          <Link className={styles.item} href="/">
            <Image
              className={styles.image}
              src="/image/home.svg"
              alt="home"
              width={26}
              height={26}
            />
          </Link>
          <a className={styles.item} href="mailto:koan6210@outlook.jp">
            <Image
              className={styles.image}
              src="/image/mail.svg"
              alt="mail"
              width={26}
              height={26}
            />
          </a>
        </div>

        <div className={styles.right}>
          <a className={styles.item} href="https://twitter.com/shooh_25" target="_blank">
            <Image
              className={styles.image}
              src="/image/twitter.svg"
              alt="twitter"
              width={24}
              height={24}
            />
          </a>
          <a className={styles.item} href="https://github.com/shooh25" target="_blank">
            <Image
              className={styles.image}
              src="/image/github.svg"
              alt="github"
              width={24}
              height={24}
            />
          </a>
          <a className={styles.item} href="https://zenn.dev/shooh25" target="_blank">
            <Image
              className={styles.image}
              src="/image/zenn.svg"
              alt="zenn"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Bar;
