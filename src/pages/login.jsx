import React from "react";

function Login() {
  return (
    <div className="Login">
      <div className="container text-center">
        <div className="align-content-center form-size py-3 row">
          <div className="col-md-6 offset-md-3">
            <div className="bg-light l-wrapper p-3 p-md-5 shadow">
              <div className="section-title mb-2">
                <h2 className="text-center">Login</h2>                
              </div>
              <form id="forgotForm">
                <div className="row">
                  <div className="col-md-12">
                  <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                 </div>
               <div id="success"></div>
                <button type="submit" className="text-white page-scroll btn cust-btn-primary mt-3">
                  Login
                </button>
                <div class="text-block text-center my-3">
                    <a href="/forgotpass" class="text-small forgot-password text-primary">Forgot Password</a>
                  </div>
                  <div class="text-block text-center my-3">
                  <span class="text-small font-weight-semibold">New user?</span>
                  <a href="/registration" class="text-custom-primary text-small"> Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
