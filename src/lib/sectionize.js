import { findAfter } from "unist-util-find-after";
import { visitParents } from "unist-util-visit-parents";
import styles from "../styles/Article.module.scss";

const MAX_HEADING_DEPTH = 6;

export default function plugin() {
  return transform;
}

function transform(tree) {
  for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
    visitParents(
      tree,
      (node) => node.type === "heading" && node.depth === depth,
      sectionize
    );
  }
}

function sectionize(node, ancestors) {
  const start = node;
  const depth = start.depth;
  const parent = ancestors[ancestors.length - 1];

  const isEnd = (node) =>
    (node.type === "heading" && node.depth <= depth) || node.type === "export";
  const end = findAfter(parent, start, isEnd);

  const startIndex = parent.children.indexOf(start);
  const endIndex = parent.children.indexOf(end);

  const between = parent.children.slice(
    startIndex,
    endIndex > 0 ? endIndex : undefined
  );

  const section = {
    type: "element",
    tagName: "section",
    children: between,
    data: {
      hName: "section",
      hProperties: {
        class: styles[`articleSection`] + " " + styles[`section${depth}`],
      },
    },
  };

  parent.children.splice(startIndex, section.children.length, section);
}
