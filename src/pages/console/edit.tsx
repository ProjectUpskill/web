import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "../../styles/ConsoleLayout.module.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import useArticle from "../../hooks/article";
import { useParams } from "react-router-dom";
export interface Props {
  action: string;
  type: string;
}

export default function Edit({ action, type }: Props) {
  const { articleId } = useParams();
  const articleName = articleId || "";

  function save() {}

  console.log(articleName);

  const [markdown, setMarkdown] = useState<string>();
  const [markdownSidebar, setMarkdownSidebar] = useState<string>();
  const [pendingMarkdown, setPendingMarkdown] = useState("");
  const [pendingMarkdownSidebar, setPendingMarkdownSidebar] = useState("");

  const [articleSelected, setArticleSelected] = useState<boolean>(true);

  const { content, sidebar } = useArticle(
    articleName.split(" ").join("-").toLowerCase(),
    false
  );

  useEffect(() => {
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
          initialValue: content ? content : " ",
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
          initialValue: sidebar ? sidebar : " ",
          minHeight: "500px",
          height: "500px",
          initialEditType: "wysiwyg",
        });
      }
    };
    editorSidebarInit();
  }, [content]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardTitle}>
        <h1>
          {action} {type}
        </h1>
      </div>
      <div className={styles.content}>
        <Form>
          <Form.Group className="mb-3" controlId="formArticleName">
            <Form.Control
              type="email"
              placeholder={`Enter ${type} Name...`}
              defaultValue={articleName}
              onChange={() => {
                return false;
              }}
            />
            <Form.Text className="text-muted">Article Name</Form.Text>
            <br />
            <br />
            <Form.Control
              type="email"
              placeholder="Enter Tags, comma seperated..."
              onChange={() => {
                return false;
              }}
            />
            <Form.Text className="text-muted">Tags (comma seperated)</Form.Text>
          </Form.Group>
        </Form>

        <Row className={styles.tabs}>
          <Col>
            <Button
              className={
                articleSelected
                  ? `${styles.buttonSpecial}`
                  : `${styles.inactiveButton}`
              }
              onClick={() => {
                setArticleSelected(true);
              }}
            >
              Edit {type}
            </Button>
          </Col>
          <Col>
            <Button
              className={
                !articleSelected
                  ? `${styles.buttonSpecial}`
                  : `${styles.inactiveButton}`
              }
              onClick={() => {
                setArticleSelected(false);
              }}
            >
              Edit Sidebar
            </Button>
          </Col>
        </Row>
        <Row className={styles.tabs}>
          <Col>
            <div
              className={
                !articleSelected ? `${styles.hidden}` : `${styles.editor}`
              }
              id="editor"
            ></div>
            <div
              className={
                articleSelected ? `${styles.hidden}` : `${styles.editor}`
              }
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
            <Button
              className={styles.button}
              onClick={() => window.location.reload()}
            >
              <a className="item">Revert</a>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
