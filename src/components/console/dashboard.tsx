import React from "react";
import { Row, Col } from "react-bootstrap";
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
      </div>{" "}
      <div className={styles.dashboardTitle}>
        <h1>Common Actions</h1>
      </div>
      <div className={styles.content}>
        <Row className={styles.commonActions}>
          <Col>
            <a className="item" href="/console/create">
              ✏️ Create Article
            </a>
          </Col>
          <Col>
            <a className="item" href="/console/create">
              📝 Find Article
            </a>
          </Col>
          <Col>
            <a className="item" href="/console/create">
              👤 Change Password
            </a>
          </Col>
        </Row>
        <Row className={styles.commonActions}>
          <Col>
            <a className="item" href="/console/create">
              🖥️ Editors Queue
            </a>
          </Col>
          <Col>
            <a className="item" href="/console/create">
              ❗ Report User
            </a>
          </Col>
          <Col>
            <a className="item" href="/console/create">
              🔍 Mod User Search
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
