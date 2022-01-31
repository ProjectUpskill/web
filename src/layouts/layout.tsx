import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faComments,
  faCaretSquareDown,
  faHome,
  faWarehouse,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Layout.module.scss";

import logo from "../assets/logo.svg";
import profile from "../assets/profile.png";
import { AuthContext } from "../providers/AuthProvider";
import { User } from "oidc-client";

export default function Layout() {
  const [user, setUser] = useState<User>();

  const authService = useContext(AuthContext);

  useEffect(() => {
    authService.getUser().then((user) => setUser(user));
  }, []);

  return (
    <Container>
      <Navbar className={`${styles.navbar} box-shadow`} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Project Upskill" height={60} width={160} />
          </Navbar.Brand>
          <Nav className="me-auto w-50">
            <NavDropdown
              title={
                <span>
                  <FontAwesomeIcon icon={faCaretSquareDown} /> Topics
                </span>
              }
            >
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span>
                  <FontAwesomeIcon icon={faHome} /> My Learning
                </span>
              }
            >
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className={styles.navbarNav}>
            <Nav.Link as={Link} to="/donate">
              <FontAwesomeIcon icon={faMoneyBill} /> Donate
            </Nav.Link>
            <Nav.Link as={Link} to="/console">
              <FontAwesomeIcon icon={faWarehouse} /> Console
            </Nav.Link>
            <Nav.Link as={Link} to="/articles/new">
              <FontAwesomeIcon icon={faPlusSquare} /> Create{" "}
            </Nav.Link>
            <Nav.Link href="https://discourse.projectupskill.org/">
              <FontAwesomeIcon icon={faComments} /> Chat
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              className={styles.profileDropdown}
              title={
                <span style={{ position: "relative" }}>
                  <img src={profile} width={32} height={32} />
                  <Badge className={styles.notification}>9</Badge>
                </span>
              }
              id="profileDropdown"
            >
              {user ? (
                <>
                  <NavDropdown.Item>{user.profile.username}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    href="#"
                    onClick={() => authService.signinRedirect()}
                  >
                    Login
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Row>
          <Col>
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                height={31}
                width={88}
              />
            </a>
            <br />
            This work is licensed under a&nbsp;
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a>
          </Col>
          <Col className="text-end">
            <Row>
              <Col className="text-end">
                <img src={logo} alt="Project Upskill" height={60} width={160} />
              </Col>
            </Row>
            <Row className="row-cols-auto justify-content-end">
              <Col className="col-md-auto">
                <Link to="/about">About</Link>
              </Col>
              <Col className="col-md-auto">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Col>
              <Col className="col-md-auto">
                <Link to="/terms-of-service">Terms of Service</Link>
              </Col>
              <Col className="col-md-auto">
                <Link to="/contact-us">Contact Us</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}
