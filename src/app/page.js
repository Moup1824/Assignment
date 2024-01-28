import Image from "next/image";
import styles from "./page.module.css";
import HomeMeme from "./component/HomeMeme";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1>hello</h1> */}
      <HomeMeme/>
    </main>
  );
}


