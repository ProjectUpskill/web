import React, { useEffect, useState } from "react";
import styles from "../styles/sidebar/Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  star: boolean;
}

export default function Social({ star }: Props) {
  const [url, setUrl] = useState(String);
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
      <div
        className={
          star ? `${styles.sidebarBoxStarred}` : `${styles.sidebarBox}`
        }
      >
        <div
          className={
            star ? `${styles.title} ${styles.titleStarred}` : `${styles.title}`
          }
        >
          <h2>Share this Article</h2>
        </div>

        <Row className={styles.social} id="hello">
          <Col>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=#${url}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size={"2x"} />
              &nbsp;Facebook
            </a>
          </Col>
          <Col>
            <a
              href={`http://twitter.com/share?text=I liked this article on Project Upskill&url=${url}&hashtags=projectupskill`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size={"2x"} /> &nbsp;Twitter
            </a>
          </Col>
          <Col>
            <a
              href={`https://api.whatsapp.com/send?text=I liked this article on Project Upskill ${url}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size={"2x"} />
              &nbsp;WhatsApp
            </a>
          </Col>
          <Col>
            <a
              href={`mailto:?subject=I liked this article on Project Upskill&amp;body=Check out Project Upskill's article at: ${url}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
              &nbsp;Email
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}
