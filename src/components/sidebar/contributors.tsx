import React from "react";
import styles from "../../styles/sidebar/Sidebar.module.scss";
import { Contributor } from "../../models/contributor";
import { Row, Col } from "react-bootstrap";

import profile from "../../assets/profile.png";

interface Props {
  contributors: Contributor[];
  name: string;
  desc: string;
  star: boolean;
}

export default function Contributors({
  contributors,
  name,
  desc,
  star,
}: Props) {
  return (
    <div
      className={star ? `${styles.sidebarBoxStarred}` : `${styles.sidebarBox}`}
    >
      <div
        className={
          star ? `${styles.title} ${styles.titleStarred}` : `${styles.title}`
        }
      >
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.topArticles}>
          {contributors.map((a) => (
            <>
              <Row key={a.username}>
                <Col sm={9}>
                  <a href={a.url} className="d-flex">
                    <img src={profile} width={32} height={32} /> &nbsp;
                    {a.name} ({a.username})
                  </a>
                </Col>
                <Col sm={3}>{a.points} pts</Col>
              </Row>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
