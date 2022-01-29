import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/ConsoleLayout.module.scss";

import { Outlet } from "react-router-dom";

export default function ConsoleLayout() {
  return (
    <Container>
      <Row>
        <Col lg={3} className={styles.container}>
          <div className={styles.consoleNavbar}>
            <a href="">
              <div className={styles.navBarItem}>
                <a href="#">Dashboard</a>
              </div>
            </a>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              My Profile
              <div className={styles.navBarItem}>
                <a href="#">View/Edit Profile</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Set Up 2FA</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Change Password</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Privacy Settings</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              My Articles &amp; Suggestions
              <div className={styles.navBarItem}>
                <a href="#">Create an Article</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Adopt an Article</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Published Articles</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Waiting for Approval</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Suggestions</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              My Pages
              <div className={styles.navBarItem}>
                <a href="#">Create a Page</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Adopt a Page</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Published Pages</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Waiting for Approval</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Suggestions</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Editors Desk
              <div className={styles.navBarItem}>
                <a href="#">Article Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Page Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Review Articles</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Review Pages</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Inbox</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">User Reports</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Promote/Demote User</a>
              </div>
            </div>

            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Moderators Desk
              <div className={styles.navBarItem}>
                <a href="#">Discourse Moderation</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Post an Announcement</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Turn off Registrations</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">User Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Create a New User</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">User Reports</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Assign Permissions</a>
              </div>
            </div>

            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Permission Groups
              <div className={styles.navBarItem}>
                <a href="#">Group Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Create a New Group</a>
              </div>
            </div>

            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Analytics
              <div className={styles.navBarItem}>
                <a href="#">View Public Metrics</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">View Personal Metrics</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Create Metrics</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">System Information</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Compliance
              <div className={styles.navBarItem}>
                <a href="#">GDPR</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Report to Legal</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Report
              <div className={styles.navBarItem}>
                <a href="#">Report User</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#">Report Content</a>
              </div>
            </div>
            <a href="#">
              <div className={styles.navBarItem}>
                <a href="#">Help</a>
              </div>
            </a>

            <a href="#">
              <div className={styles.navBarItem}>
                <a href="#">Logout</a>
              </div>
            </a>

            <a href="#">
              <div
                className={`${styles.workspacesButton} ${styles.navBarItem}`}
              >
                <a href="#">Google Workspaces</a>
              </div>
            </a>

            <a href="#">
              <div className={`${styles.adminButton} ${styles.navBarItem}`}>
                <a href="#">Administrator</a>
              </div>
            </a>
          </div>
        </Col>
        <Col lg={9} className={styles.consoleContent}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
function expandNavElements(element: any) {
  try {
    if (element.children.length == 1) {
      return false;
    }
    if (element.children[1].style.display == "block") {
      for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.display = "none";
      }
    } else {
      for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.display = "block";
      }
    }
  } catch (TypeError) {
    return;
  }
  return false;
}
