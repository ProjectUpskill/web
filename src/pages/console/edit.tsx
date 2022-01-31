import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "../../styles/ConsoleLayout.module.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleMarkdown } from "../../hooks/article";
import { useParams } from "react-router-dom";

export interface Props {
  action: string;
  type: string;
}

export default function Edit({action, type} : Props) {
  const { articleId } = useParams();
  const articleName = articleId || "";

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
    if (content !== undefined)
    {
    setMarkdown(content);
    }
  }, [content]);

  useEffect(() => {
    if (contentSidebar !== undefined)
    {

    setMarkdownSidebar(contentSidebar);
    }
  }, [contentSidebar]);

  useEffect(() => {
    if (      markdown !== undefined &&
      markdownSidebar !== undefined) {
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
            minHeight: "500px",
            height: "500px",

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
            initialValue: markdownSidebar,
            minHeight: "500px",
            height: "500px",
            initialEditType: "wysiwyg",
          });
        }
      };
      editorSidebarInit();
    }
  }, [markdown, markdownSidebar]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardTitle}>
        <h1>{action} {type}</h1>
      </div>
      <div className={styles.content}>
        <Form>
          <Form.Group className="mb-3" controlId="formArticleName">
            <Form.Control
              type="email"
              placeholder={`Enter ${type} Name...`}
              defaultValue={articleName}
              onChange={() => {return false;}}
            />
            <Form.Text className="text-muted">Article Name</Form.Text>
            <br />
            <br />
            <Form.Control
              type="email"
              placeholder="Enter Tags, comma seperated..."
              onChange={() => {return false;}}
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
              Edit {type}
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
