import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import ConsoleLayout from "./layouts/consoleLayout";
import StandardLayout from "./layouts/standardLayout";
import Home from "./pages/homepage";
import Article from "./pages/article";
import Dashboard from "./pages/console/dashboard";
import Edit from "./pages/console/edit";
import Construction from "./pages";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/">
        <Route index element={<Construction/>}/>
        <Route path="/website" element={<Layout />}>
          <Route element={<StandardLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="articles">
            <Route path=":articleId">
              <Route index element={<Article />} />
            </Route>
          </Route>
          <Route path="console" element={<ConsoleLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="edit">
              <Route path=":articleId">
                <Route index element={<Edit />} />
              </Route>
            </Route>
          </Route>
        </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
