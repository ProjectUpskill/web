import React from "react";
import articleStyles from "../styles/Article.module.scss";
import sidebarStyles from "../styles/sidebar/Sidebar.module.scss";
import Social from "../components/social";

import getArticles from "../mocks/articles";

import useArticle from "../hooks/article";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleSidebar from "../components/sidebar/articleSidebar";

export default function Article() {
  const reactContent = useArticle("cook-an-egg");
  const reactRequirements = useArticle("cook-an-egg-sidebar");
  const beginnerArticles = getArticles(5);
  const advancedArticles = getArticles(5);

  return (
    <>
      <Row>
        <Col lg={9} className={articleStyles.articleContent}>
          <Social star={false} />
          <div className={articleStyles.articleContent}>{reactContent}</div>
        </Col>
        <Col lg={3} className={sidebarStyles.sidebar}>
          <ArticleSidebar
            requirements={
              <div className={sidebarStyles.sidebarMarkdownContent}>
                {reactRequirements}
              </div>
            }
            beginnerArticles={beginnerArticles}
            advancedArticles={advancedArticles}
          />
        </Col>
      </Row>
    </>
  );
}
