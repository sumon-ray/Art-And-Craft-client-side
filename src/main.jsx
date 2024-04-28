import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
