import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "../../styles/ConsoleLayout.module.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleMarkdown } from "../../hooks/article";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { articleId } = useParams();
  const articleName = articleId || "how-to-cook-an-egg";

  function save() {
    if (isArticle) {
      setMarkdown(pendingMarkdown);
    } else {
      setMarkdownSidebar(pendingMarkdownSidebar);
    }
  }
  console.log(articleName);

  const [markdown, setMarkdown] = useState<string>();
  const [markdownSidebar, setMarkdownSidebar] = useState<string>();

  const [pendingMarkdown, setPendingMarkdown] = useState("");
  const [pendingMarkdownSidebar, setPendingMarkdownSidebar] = useState("");
  const [isArticle, setIsArticle] = useState<boolean>(true);
  const content = useArticleMarkdown(
    articleName.split(" ").join("-").toLowerCase()
  );
  const contentSidebar = useArticleMarkdown(
    articleName.split(" ").join("-").toLowerCase() + "-sidebar"
  );

  useEffect(() => {
    setMarkdown(content);
  }, [content]);

  useEffect(() => {
    setMarkdownSidebar(contentSidebar);
  }, [contentSidebar]);

  useEffect(() => {
    if (markdownSidebar != "" && markdown != "") {
      const editorArticleInit = async () => {
        const { Editor } = await import("@toast-ui/editor");
        const el = document.querySelector("#editor");
        if (el) {
          const editor = new Editor({
            el: el as HTMLElement,
            events: {
              change: () => {
                setPendingMarkdown(editor.getMarkdown());
              },
            },
            initialValue: markdown,
            minHeight: "1000px",
            height: "1000px",
            initialEditType: "wysiwyg",
          });
        }
      };
      editorArticleInit();

      const editorSidebarInit = async () => {
        const { Editor } = await import("@toast-ui/editor");
        const el = document.querySelector("#editorSidebar");
        if (el) {
          const editor = new Editor({
            el: el as HTMLElement,
            events: {
              change: () => {
                setPendingMarkdownSidebar(editor.getMarkdown());
              },
            },
            initialValue: contentSidebar,
            minHeight: "1000px",
            height: "1000px",
            initialEditType: "wysiwyg",
          });
        }
      };
      editorSidebarInit();
    }
  }, [content, contentSidebar]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardTitle}>
        <h1>Edit an Article</h1>
      </div>
      <div className={styles.content}>
        <Form>
          <Form.Group className="mb-3" controlId="formArticleName">
            <Form.Control
              type="email"
              placeholder="Enter Article Name..."
              value={articleName}
            />
            <Form.Text className="text-muted">Article Name</Form.Text>
            <br />
            <br />
            <Form.Control
              type="email"
              placeholder="Enter Tags, comma seperated..."
            />
            <Form.Text className="text-muted">Tags (comma seperated)</Form.Text>
          </Form.Group>
        </Form>

        <Row className={styles.tabs}>
          <Col>
            <Button
              className={
                isArticle
                  ? `${styles.buttonSpecial}`
                  : `${styles.inactiveButton}`
              }
              onClick={() => {
                setIsArticle(true);
              }}
            >
              Edit Article
            </Button>
          </Col>
          <Col>
            <Button
              className={
                !isArticle
                  ? `${styles.buttonSpecial}`
                  : `${styles.inactiveButton}`
              }
              onClick={() => {
                setIsArticle(false);
              }}
            >
              Edit Sidebar
            </Button>
          </Col>
        </Row>
        <Row className={styles.tabs}>
          <Col>
            <div
              className={!isArticle ? `${styles.hidden}` : `${styles.editor}`}
              id="editor"
            ></div>
            <div
              className={isArticle ? `${styles.hidden}` : `${styles.editor}`}
              id="editorSidebar"
            ></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={styles.button} onClick={() => save()}>
              <a className="item">Save</a>
            </Button>
          </Col>
          <Col>
            {" "}
            <Button className={styles.button}>
              <a className="item" href="">
                Revert
              </a>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}