import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthenticationPage from "./components/Authentication/Authentication.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Root from "./Root.jsx";
import Home from "./components/Home/Home.jsx";
import MailPage from "./components/mail/page.jsx";

import Layout from "./Layout.jsx";
import LoginPage from "./components/Authentication/Login.jsx";
import VideoUpload from "./components/Video/VideoForm.jsx";
import Forecast from "./components/Forecast/Forecast.jsx";
import Researcher from "./Researcher/Researcher.jsx";
import Vide from "./Vide/Vide.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        index: true,
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/analysis",
        element: <MailPage />,
      },
      {
        path: "/user/video",
        element: <VideoUpload />,
      },
      {
        path: "/user/llm",
        element: <Vide />,
      },
      {
        path: "/user/forecast",
        element: <Forecast />,
      },
      {
        path: "/user/researcher",
        element: <Researcher />,
      },
    ],
  },
  {
    path: "/register",
    element: <AuthenticationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
