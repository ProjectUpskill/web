import React from "react";
import MarkdownBox from "./markdownbox";
import { Article } from "../../models/article";
import RecommendedArticles from "./recommendedArticles";

interface Props {
  requirements: React.ReactNode;
  beginnerArticles: Article[];
  advancedArticles: Article[];
}

export default function ArticleSidebar({
  requirements,
  beginnerArticles,
  advancedArticles,
}: Props) {
  return (
    <>
      <MarkdownBox
        content={requirements}
        name={"ℹ️ Requirements"}
        desc={"You'll need the following:"}
        star={false}
      />
      <RecommendedArticles
        beginnerArticles={beginnerArticles}
        advancedArticles={advancedArticles}
      />
       
    </>
  );
}
