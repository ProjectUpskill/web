import React from "react";
import styles from "../../styles/sidebar/Sidebar.module.scss";
import { Article } from "../../models/article";

interface Props {
  articles: Article[];
  name: string;
  desc: string;
  star: boolean;
}

export default function Articles({ articles, star, name, desc }: Props) {
  return (
    <div
      className={star ? `${styles.sidebarBoxStarred}` : `${styles.sidebarBox}`}
    >
      <div
        className={
          star ? `${styles.title} ${styles.titleStarred}` : `${styles.title}`
        }
      >
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.topArticles}>
          <ol>
            {articles.map((a) => (
              <div>
                <a href={a.url}>{a.title}</a>
                <hr />
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
