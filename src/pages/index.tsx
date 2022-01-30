import React from "react";
import styles from "../styles/Home.module.scss";
import logo from "../assets/logo.svg";
import { Row, Col } from "react-bootstrap";

export default function Construction() {
    return (
        <>

            <div className={`${styles.construction} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.constructionBox} w-50`}>

            <Row className="">
                <Row>
            <img src={logo} alt="Project Upskill" height={60} width={160} />
            </Row>
                <Col>
                <Row>
                <h1>Project Upskill is currently undergoing construction.</h1>
                <p>Thank you so much for expressing interest in Project Upskill.
                    Unfortunately, we're not quite ready yet as the website is still
                    being built, and that's going to take some time.</p>

                <p>When finished, Project Upskill will be a charity that provides
                    life skills, self-development and well-being support through
                    the crowd-sourced knowledge of the community.</p>
                </Row>
                <Row>
                <strong>We would love some help making that a reality.</strong>

                <a href="https://discourse.projectupskill.org">Have you considered joining our Discourse forums?</a>
                <p>The more editors, artists, software engineers, marketing people, etc, we can get, the faster and better Project Upskill can become a reality!</p>
                </Row>
                </Col>
                </Row>
            </div>
            </div>
        </>
    );
}