import React from "react";
import PreviewGrid from "../components/preview-grid";
import styles from "../styles/Home.module.scss";
import getArticles from "../mocks/articles";
import useArticle from "../hooks/article";

export default function Home() {
  const articles = getArticles();
  const reactContent = useArticle("homepage");

  return (
    <>
      <div className={styles.content}>{reactContent}</div>
      <PreviewGrid articles={articles} />
    </>
  );
}
