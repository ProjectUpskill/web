import React from "react";
import styles from "../../styles/sidebar/Sidebar.module.scss";
import { Article } from "../../models/article";

interface Props {
  beginnerArticles: Article[];
  advancedArticles: Article[];
}

export default function RecommendedArticles({
  beginnerArticles,
  advancedArticles,
}: Props) {
  return (
    <div className={styles.sidebarBox}>
      <div className={styles.title}>
        <h3>⬇️ Prerequisites</h3>
        <p>Related, less advanced articles</p>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.topArticles}>
          <ol>
            {beginnerArticles.map((a) => (
              <li key={a.title}>
                <a href={a.url}>{a.title}</a>
                <hr />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className={styles.title}>
        <h3>⬆️ Advanced</h3>
        <p>Related, more advanced articles</p>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.topArticles}>
          <ol>
            {advancedArticles.map((a) => (
              <li key={a.title}>
                <a href={a.url}>{a.title}</a>
                <hr />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
