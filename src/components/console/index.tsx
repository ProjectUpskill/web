import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/ConsoleLayout.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardTitle}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.content}>
        <p>
          <strong>
            Welcome to the Project Upskill User Console. From here you can:
          </strong>
        </p>
        <ul>
          <li>Create Articles</li>
          <li>Edit Existing Articles</li>
          <li>Access Your User Profile</li>
          <li>Access Editors and Moderators Tools</li>
          and much more!
        </ul>
      </div>
      <div className={styles.dashboardTitle}>
        <h1>Common Actions</h1>
      </div>
      <div className={styles.content}>
        <Row className={styles.commonActions}>
          <Col>
            <Link to="/console/edit" className={`btn ${styles.button}`}>
              ✏️ Create Article
            </Link>
          </Col>
          <Col>
            <Link to="/console/edit" className={`btn ${styles.button}`}>
              📝 Find Article
            </Link>
          </Col>
          <Col>
            <Link to="/console/create" className={`btn ${styles.button}`}>
              👤 Change Password
            </Link>
          </Col>
        </Row>
        <Row className={styles.commonActions}>
          <Col>
            <Link to="/console/create" className={`btn ${styles.button}`}>
              🖥️ Editors Queue
            </Link>
          </Col>
          <Col>
            <Link to="/console/create" className={`btn ${styles.button}`}>
              ❗ Report User
            </Link>
          </Col>
          <Col>
            <Link to="/console/create" className={`btn ${styles.button}`}>
              🔍 Mod User Search
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
