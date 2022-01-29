import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages";
import Article from "./pages/article";
import Console from "./pages/console";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="articles">
              <Route path=":articleId">
                <Route index element={<Article />} />
              </Route>
            </Route>
            <Route path="admin">
              <Route index element={<Console />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
