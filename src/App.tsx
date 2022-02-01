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
import { Callback } from "./pages/auth/callback";
import { Logout } from "./pages/auth/logout";
import { LogoutCallback } from "./pages/auth/logoutCallback";
import { SilentRenew } from "./pages/auth/silentRenew";
import { AuthProvider } from "./providers/AuthProvider";
import Error404 from "./pages/404";
import Profile from "./pages/console/profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Error404 />} />

            <Route element={<StandardLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/article/:articleId" element={<Article />}></Route>

            <Route path="console" element={<ConsoleLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="edit-article">
                <Route index element={<Edit action="Edit" type="Article" />} />
                <Route path=":articleId">
                  <Route
                    index
                    element={<Edit action="Edit" type="Article" />}
                  />
                </Route>
              </Route>

              <Route path="edit-page">
                <Route index element={<Edit action="Edit" type="Page" />} />
                <Route path=":articleId">
                  <Route index element={<Edit action="Edit" type="Page" />} />
                </Route>
              </Route>

              <Route path="create-article">
                <Route
                  index
                  element={<Edit action="Create" type="Article" />}
                />
              </Route>

              <Route path="create-page">
                <Route index element={<Edit action="Create" type="Page" />} />
              </Route>

              <Route path="profile">
                <Route index element={<Profile />} />
              </Route>
            </Route>
          </Route>
          <Route path="/signin-oidc" element={<Callback />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logout/callback" element={<LogoutCallback />} />
          <Route path="/silentrenew" element={<SilentRenew />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
