

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/ConsoleLayout.module.scss";

import { Outlet } from "react-router-dom";


export default function ConsoleLayout() {
  return (
    <Container>
      <Row >
        <Col md={3} className="p-0 m-0">
          <div className={styles.consoleNavbar}>
            <a href="#test">
              <div className={styles.navBarItem}>
                <a href="/console">Dashboard</a>
              </div>
            </a>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              My Profile
              <div className={styles.navBarItem}>
                <a href="#test">View/Edit Profile</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Set Up 2FA</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Change Password</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Privacy Settings</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              My Articles &amp; Suggestions
              <div className={styles.navBarItem}>
                <a href="/console/create-article">Create an Article</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Adopt an Article</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Published Articles</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Waiting for Approval</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Suggestions</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              My Pages
              <div className={styles.navBarItem}>
                <a href="/console/create-page">Create a Page</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Adopt a Page</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Published Pages</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Waiting for Approval</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Suggestions</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Editors Desk
              <div className={styles.navBarItem}>
                <a href="#test">Article Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Page Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Review Articles</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Review Pages</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Inbox</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">User Reports</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Promote/Demote User</a>
              </div>
            </div>

            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Moderators Desk
              <div className={styles.navBarItem}>
                <a href="#test">Discourse Moderation</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Post an Announcement</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Turn off Registrations</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">User Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Create a New User</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">User Reports</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Assign Permissions</a>
              </div>
            </div>

            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Permission Groups
              <div className={styles.navBarItem}>
                <a href="#test">Group Search</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Create a New Group</a>
              </div>
            </div>

            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Analytics
              <div className={styles.navBarItem}>
                <a href="#test">View Public Metrics</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">View Personal Metrics</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Create Metrics</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">System Information</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Compliance
              <div className={styles.navBarItem}>
                <a href="#test">GDPR</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Report to Legal</a>
              </div>
            </div>
            <div
              className={styles.navBarItem}
              onClick={(e) => expandNavElements(e.target)}
            >
              Report
              <div className={styles.navBarItem}>
                <a href="#test">Report User</a>
              </div>
              <div className={styles.navBarItem}>
                <a href="#test">Report Content</a>
              </div>
            </div>
            <a href="#test">
              <div className={styles.navBarItem}>
                <a href="#test">Help</a>
              </div>
            </a>


            <a href="#test">
              <div className={`${styles.adminButton} ${styles.navBarItem}`}>
                <a href="#test">Administrator</a>
              </div>
            </a>
          </div>
        </Col>
        <Col md={9} className={`${styles.container}`}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
function expandNavElements(element: any) {
  try {
    if (element.children.length === 1) {
      return false;
    }
    if (element.children[1].style.display === "block") {
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
