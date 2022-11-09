import React from 'react';
import login from "../img/login.svg";

function Login() {
  return (
    <section className='login-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='left text-center'>
              <img src={login} alt="" className='img-fluid' />
              <h2 className='my-3'>The future of savings & Investment</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
