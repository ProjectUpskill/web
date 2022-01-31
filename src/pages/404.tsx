import React from "react";
import SearchBar from "../components/search";
import styles from "../styles/Home.module.scss";

export default function Error404() {

  return (
    <>
      <div className={styles.content}>
          <h1>404 - Page Not Found</h1>
          <p>An error happened while trying to find what you were looking for.</p>

          <SearchBar />

        </div>
    </>
  );
}
