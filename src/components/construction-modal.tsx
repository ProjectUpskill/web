import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import logo from "../assets/logo.svg";
import styles from "../styles/Home.module.scss";

export default function ConstructionModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Under Construction</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.constructionBox}>
          <Row className="">
            <Row>
              <img src={logo} alt="Project Upskill" height={60} width={160} />
            </Row>
            <Col>
              <Row>
                <h1>Project Upskill is currently undergoing construction.</h1>
                <p>
                  Thank you so much for expressing interest in Project Upskill.
                  Unfortunately, we're not quite ready yet as the website is
                  still being built, and that's going to take some time.
                </p>

                <p>
                  When finished, Project Upskill will be a charity that provides
                  life skills, self-development and well-being support through
                  the crowd-sourced knowledge of the community.
                </p>
              </Row>
              <Row>
                <strong>We would love some help making that a reality.</strong>

                <p>
                  {" "}
                  Have you considered joining our forums? The more editors,
                  artists, software engineers, marketing people, etc, we can
                  get, the faster and better Project Upskill can become a
                  reality!
                </p>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} size="sm">
            I'm a Developer
          </Button>
          <Button
            variant="primary"
            href="https://discourse.projectupskill.org"
            size="lg"
          >
            Take me to the Forums
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
