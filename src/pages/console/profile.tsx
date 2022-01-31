import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/ConsoleLayout.module.scss";

export default function Profile() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardTitle}>
        <h1>Profile</h1>
      </div>
      <div className={styles.content}>
      <p>Profile test</p>
      </div>
      </div>
  );
}
