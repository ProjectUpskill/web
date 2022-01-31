import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import ConsoleLayout from "./layouts/consoleLayout";
import StandardLayout from "./layouts/standardLayout";
import Home from "./pages/index";
import Article from "./pages/article";
import Dashboard from "./pages/console/dashboard";
import Edit from "./pages/console/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
            <Route path="edit-article">
            <Route index element={<Edit action="Edit" type="Article"/>} />
              <Route path=":articleId">
                <Route index element={<Edit action="Edit" type="Article"/>} />
              
              </Route>
              </Route>

            <Route path="edit-page">
            <Route index element={<Edit action="Edit" type="Page"/>} />
              <Route path=":articleId">
                <Route index element={<Edit action="Edit" type="Page"/>} />
              
              </Route>
              </Route>

            <Route path="create-article">
            <Route index element={<Edit action="Create" type="Article"/>} />
             
              </Route>
              
            <Route path="create-page">
            <Route index element={<Edit action="Create" type="Page"/>} />
              
              </Route>
            </Route>
          </Route>
        <Route element={<Home />}>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
