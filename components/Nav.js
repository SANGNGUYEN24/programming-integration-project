import requests from "../utils/requests";
import styles from "../styles/nav.module.css";
import { useRouter } from "next/router";

function Nav() {
  const array = Object.entries(requests);
  const router = useRouter();

  return (
    <nav>
      <div className={styles.navwrap}>
        {array.map(([key, { url, title }]) => {
          return (
            <h2
              key={key}
              className={styles.navitem}
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className={styles.faded}></div>
    </nav>
  );
}

export default Nav;
