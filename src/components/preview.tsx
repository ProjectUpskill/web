import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/Preview.module.scss";
import { Article } from "../models/article";
import { Link } from "react-router-dom";

interface Props {
  article: Article;
}

export default function Preview({ article }: Props) {
  const pic = Math.floor(Math.random() * 100);
  const comments = Math.floor(Math.random() * 10);
  const { title, likes } = article;
  return (
    <Card className={styles.preview} border="light">
      <Card.ImgOverlay className={styles.previewCardImgOverlay}>
        <Card.Title>
          <Row className="mt-auto">
            <Col xs="10">
              <Link
                className={styles.previewHeading}
                to="/articles/how-to-cook-an-egg"
              >
                {title}
              </Link>
            </Col>
            <Col xs="2" className="text-end">
              <FontAwesomeIcon inverse={false} icon={faStar} />
            </Col>
          </Row>
        </Card.Title>
        <Row className="mt-auto">
          <Col>
            <FontAwesomeIcon icon={faComment} /> {comments}
          </Col>
          <Col className="text-end">
            <FontAwesomeIcon icon={faThumbsUp} /> {likes.length}
          </Col>
        </Row>
      </Card.ImgOverlay>
      <Card.Img
        width={200}
        height={200}
        src={`https://picsum.photos/id/${pic}/200`}
      />
    </Card>
  );
}
