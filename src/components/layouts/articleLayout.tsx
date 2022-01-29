import React from "react";
import { Row, Col } from "react-bootstrap";
import ArticleSidebar from "../sidebar/articleSidebar";
import styles from "../../styles/Layout.module.scss";
import articleStyles from "../../styles/Article.module.scss";
import Social from "../social";
import { Article } from "../../models/article";

interface Props {
  children: React.ReactNode;
  requirements: React.ReactNode;
  beginnerArticles: Article[];
  advancedArticles: Article[];
}

export default function ArticleLayout({
  children,
  requirements,
  beginnerArticles,
  advancedArticles,
}: Props) {
  return (
    <>
      <Row>
        <Col lg={9} className={articleStyles.articleContent}>
          <Social star={false} />
          {children}
        </Col>
        <Col lg={3} className={styles.sidebar}>
          <ArticleSidebar
            requirements={requirements}
            beginnerArticles={beginnerArticles}
            advancedArticles={advancedArticles}
          />
        </Col>
      </Row>
    </>
  );
}
