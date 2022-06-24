import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./views/Auth";
import EditPost from "./views/EditPost";
import Main from "./views/Main";
import "./style/auth.css";
import "./style/posts.css";
import Layout from "./views/Layout";
import RequireAuth from "./components/global/RequireAuth";
import { pingServer } from "./api/fetchFunctions";
import Error404 from "./views/Error404";
import CannotBeLogged from "./components/global/CannotBeLogged";

function App() {
  //start server
  React.useEffect(() => {
    pingServer();
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: "url(/img/bg.webp)" }}
        className="bg"
      ></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Auth routes */}
          <Route element={<CannotBeLogged />}>
            <Route path="/signup" element={<Auth type="signup" />} />
            <Route path="/login" element={<Auth type="login" />} />
          </Route>

          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Main />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>

          {/* 404 Error route */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
