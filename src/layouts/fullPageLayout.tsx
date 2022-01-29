import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Layout.module.scss";

import { Outlet } from "react-router-dom";

export default function FullPageLayout() {
  return (
    <Row>
      <Col className={styles.mainColumn} id="content">
        <Outlet />
      </Col>
    </Row>
  );
}
