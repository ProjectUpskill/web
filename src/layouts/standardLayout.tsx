import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/Layout.module.scss";
import getArticles from "../mocks/articles";
import getContributors from "../mocks/contributors";

import { Outlet } from "react-router-dom";

export default function StandardLayout() {
  const articles5 = getArticles(5);
  const contributors = getContributors();

  return (
    <Row className="g-2">
      <Col lg={9} className={styles.mainColumn} id="content">
        <Outlet />
      </Col>
      <Col lg={3} className={styles.sidebar} id="sidebar">
        <Sidebar topArticles={articles5} topContributors={contributors} />
      </Col>
    </Row>
  );
}
