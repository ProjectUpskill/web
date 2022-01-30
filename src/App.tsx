import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import ConsoleLayout from "./layouts/consoleLayout";
import StandardLayout from "./layouts/standardLayout";
import Home from "./pages/index";
import Article from "./pages/article";
import Dashboard from "./pages/console/dashboard";
import Edit from "./pages/console/edit";
import Construction from "./pages";

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
            <Route path="edit">
            <Route index element={<Edit />} />
              <Route path=":articleId">
                <Route index element={<Edit />} />
              
              </Route>
              
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
