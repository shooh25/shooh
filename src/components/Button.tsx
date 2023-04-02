import styles from "@/styles/components/button.module.scss";

// propsとして渡される値の型定義
type Props = {
  text: string;
  url: string;
};

const Button = (props: Props) => {
  return (
    <>
      <a href={props.url} className={styles.root} target="_blank">
        <p>{props.text}</p>
      </a>
    </>
  );
};

export default Button;
