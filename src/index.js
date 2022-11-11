import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import './index.css';
import App from './App';
import ScrollToTop from './js/scrollTop';
import CompleteProfileDetails from './pages/completeProfile';
import Otp from './pages/otp';
import SignUp from './pages/signUp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ScrollToTop/>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
    <Route path="/otp" element={<Otp/>}></Route>
    <Route path="/complete-profile" element={<CompleteProfileDetails/>}></Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();