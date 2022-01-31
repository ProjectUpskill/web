import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Article } from '../models/article';
import Preview from './preview';

interface Props {
  articles: Article[]
}

export default function PreviewGrid({ articles }: Props) {
  return (
    <Row className="row-cols-md-3 row-cols-1 g-0">
      {articles.map((a) => <Col key={a.title}><Preview article={a} /></Col>)}
    </Row>
  );
}
