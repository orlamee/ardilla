import React from 'react';
import login from "../img/login.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className='login-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mb-2'>
            <div className='left px-4 text-center'>
              <img src={login} alt="" className='img-fluid' />
              <h2 className='my-4'>The future of savings & Investment</h2>
              <h6 className='mb-4'>Saving money typically means it is available when we need it<br/>and it has a low risk of losing value.</h6>


              <div className='d-flex justify-content-center mb-3'>
                <div className='mt-3 me-2'><p className='text-center users'>New user?</p></div>
                <div><Link className='btn btn-outline-primary px-5 py-3 ardilla-btn' to="/">Create account</Link></div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='right px-4'>
              <div className='login-form'>
                <h3>Welcome!</h3>
                <h6 className='mt-4'>Here’s how to Log in to access your account</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
