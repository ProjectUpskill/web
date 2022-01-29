import React from "react";
import PreviewGrid from "../components/preview-grid";
import styles from "../styles/Home.module.scss";
import StandardLayout from "../components/layouts/standardLayout";
import getArticles from "../mocks/articles";
import getContributors from "../mocks/contributors";
import useArticle from "../hooks/article";

export default function Home() {
  const articles = getArticles();
  const articles5 = getArticles(5);
  const contributors = getContributors();

  const reactContent = useArticle("homepage");

  return (
    <StandardLayout articles={articles5} contributors={contributors}>
      <div className={styles.content}>{reactContent}</div>
      <PreviewGrid articles={articles} />
    </StandardLayout>
  );
}
