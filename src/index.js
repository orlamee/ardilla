import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './index.css';
import App from "./App";
import ScrollToTop from "./js/scrollTop";
import CompleteProfileDetails from "./pages/completeProfile";
import ErrorPage from "./pages/error404";
import LoginPage from "./pages/login";
import Otp from "./pages/otp";
import SecurityQuestion from "./pages/securityQuestion";
import SignUp from "./pages/signUp";
import reportWebVitals from "./reportWebVitals";

import ProtectRoute from "./components/protectRoute";
import ForgotPassword from "./pages/forgotPassword";
import SetPassword from "./pages/setPassword";
import Learn from "./pages/learn";
import Alerts from "./components/alerts/alerts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/alerts" element={<Alerts/>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/learn" element={<Learn />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/recover-password" element={<ForgotPassword />}></Route>
      <Route path="/set-password/:id" element={<SetPassword />}></Route>
      <Route
        path="/otp"
        element={
          <ProtectRoute>
            <Otp />
          </ProtectRoute>
        }
      ></Route>
      <Route
        path="/security-question"
        element={
          <ProtectRoute>
            <SecurityQuestion />
          </ProtectRoute>
        }
      ></Route>
      <Route
        path="/complete-profile"
        element={
          <ProtectRoute>
            <CompleteProfileDetails />
          </ProtectRoute>
        }
      ></Route>
      <Route path="/404" element={<ErrorPage />}></Route>
      <Route path="*" element={<Navigate to="/404" replace />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
