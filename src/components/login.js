/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import login from "../img/login.svg";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className='login-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 mb-2'>
            <img src={logo} alt="" className='img-fluid' />
            <div className='left text-center'>
              <img src={login} alt="" className='img-fluid' />
              <h2 className='my-4'>The future of savings & Investment</h2>
              <h6 className='mb-4'>Saving money typically means it is available when we need it<br/>and it has a low risk of losing value.</h6>


              <div className='d-flex justify-content-center mb-3'>
                <div className='mt-3 me-2'><p className='text-center users'>New user?</p></div>
                <div><Link className='btn btn-outline-primary px-5 py-3 ardilla-btn' to="/sign-up">Create account</Link></div>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='right px-4'>
              <div className='login-form'>
                <h3>Welcome!</h3>
                <h6 className='mt-4'>Here’s how to Log in to access your account</h6>
                <form className='mt-5'>
                  <div className="mb-3">
                    <label className="form-label"><i className="bi bi-envelope-fill me-2"></i>  Email address</label>
                    <input type="email" className="form-control custom-login"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><i className="bi bi-shield-lock-fill me-2"></i>  Password</label>
                    <input type="password" className="form-control custom-login"/>
                  </div>
                  <div className="form-group"><label className="form-check-label remember"><input type="checkbox" className="form-check-input" />  Remember me</label><a className="float-end" href="#">Forgot Password?</a></div>
                  <div className="mt-4 mb-5">
                    <button type="button" className="btn btn-outline-primary px-5 py-3 ardilla-btn" style={{width: "100%"}}>Log In</button>
                  </div>
                </form>
                <div className="separator">
                  <div className="line"></div>
                  <h6>or</h6>
                  <div className="line"></div>
                </div>
                <button type="button" className="mt-5 btn btn-outline-primary py-3 ardilla-btn-outline"><i className="bi bi-box-arrow-in-right me-3"></i> Sign in with SAN ID</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
