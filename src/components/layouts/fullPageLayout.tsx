import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function FullPageLayout({ children }: Props) {
  return (
    <Row>
      <Col className={styles.mainColumn} id="content">
        {children}
      </Col>
    </Row>
  );
}
