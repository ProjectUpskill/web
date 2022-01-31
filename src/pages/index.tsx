import React, { useContext, useEffect, useMemo, useState } from "react";
import PreviewGrid from "../components/preview-grid";
import styles from "../styles/Home.module.scss";
import getArticles from "../mocks/articles";
import useArticle from "../hooks/article";
import ConstructionModal from "../components/construction-modal";
import SearchBar from "../components/search"
import { User } from "oidc-client";
import { AuthContext } from "../providers/AuthProvider";

export default function Home() {
  const articles = getArticles();
  const reactContent = useArticle("homepage");

  const [user, setUser] = useState<User>();

  const authService = useContext(AuthContext);

  useEffect(() => {
    authService.getUser().then((user) => setUser(user));
  }, []);

  const idToken = useMemo(() => user?.id_token, [user])
  
  return (
    <>
      <div className={styles.content}>
        {reactContent}
      <SearchBar />
      </div>
      <PreviewGrid articles={articles} />
      if (!user) <ConstructionModal />
    </>
  );
}
