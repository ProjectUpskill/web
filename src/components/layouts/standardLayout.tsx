import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import styles from "../../styles/Layout.module.scss";
import { Contributor } from "../../models/contributor";
import { Article } from "../../models/article";

interface Props {
  children: React.ReactNode;
  articles: Article[];
  contributors: Contributor[];
}

export default function StandardLayout({
  children,
  articles,
  contributors,
}: Props) {
  return (
    <Row>
      <Col lg={9} className={styles.mainColumn} id="content">
        {children}
      </Col>
      <Col lg={3} className={styles.sidebar} id="sidebar">
        <Sidebar topArticles={articles} topContributors={contributors} />
      </Col>
    </Row>
  );
}
