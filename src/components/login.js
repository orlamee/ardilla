import React from 'react';
import login from "../img/login.svg";

function Login() {
  return (
    <section className='login-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mb-2'>
            <div className='left px-4 text-center'>
              <img src={login} alt="" className='img-fluid' />
              <h2 className='my-5'>The future of savings & Investment</h2>
              <h6>Saving money typically means it is available when we need it<br/>and it has a low risk of losing value.</h6>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='right px-4'>
              <div className='login-form'>
                <h3>Welcome!</h3>
                <h6>Here’s how to Log in to access your account</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
