import React from "react";
import Articles from "./articles";
import Contributors from "./contributors";

import { Article } from "../../models/article";
import { Contributor } from "../../models/contributor";

interface Props {
  topArticles: Article[];
  topContributors: Contributor[];
}

export default function Sidebar({ topArticles, topContributors }: Props) {
  return (
    <>
      <Articles
        articles={topArticles}
        name={"🚀 Top Articles"}
        desc={"Our top curated articles"}
        star={false}
      />
      <Articles
        articles={topArticles}
        name={"✏️ Adopt an Article"}
        desc={"Help us write new articles!"}
        star={false}
      />
      <Contributors
        contributors={topContributors}
        name={"👥 Top Contributors"}
        desc={"Our most valuable contributors"}
        star={false}
      />
    </>
  );
}
