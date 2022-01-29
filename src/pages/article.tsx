import React from "react";
import styles from "../styles/Article.module.scss";
import sidebarStyles from "../styles/sidebar/Sidebar.module.scss";

import getArticles from "../mocks/articles";

import ArticleLayout from "../components/layouts/articleLayout";
import useArticle from "../hooks/article";
export default function Article() {
  const reactContent = useArticle("cook-an-egg");
  const reactRequirements = useArticle("cook-an-egg-requirements");
  const beginnerArticles = getArticles(5);
  const advancedArticles = getArticles(5);

  return (
    <ArticleLayout
      advancedArticles={advancedArticles}
      beginnerArticles={beginnerArticles}
      requirements={
        <div className={sidebarStyles.sidebarMarkdownContent}>
          {reactRequirements}
        </div>
      }
    >
      <div className={styles.articleContent}>{reactContent}</div>
    </ArticleLayout>
  );
}
