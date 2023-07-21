import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">Sign In</h1>
        <br />
        <form>
          <input className="form-control" type="email" placeholder="Email" />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
          />
          <button className="btn btn-danger">Sign In</button>
          <br />
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label text-white"
              htmlFor="flexCheckDefault"
            >
              Remember Me
            </label>
          </div>
        </form>
        <br />
        <br />
        <div className="login-form-other">
          <div className="login-signup-now">
            Now NetFlix? &nbsp;
            <a className="" target="_self" href="/">
              Sign up now
            </a>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
}

export default Login;
