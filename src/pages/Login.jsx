import React from "react";
import "../styles/Login.css";
import Footer from "../components/Home/Footer";

const Login = () => {
  return (
    <>
      <div class="login">
        <div class="card">
          <div class="card2">
            <form class="form">
              <p id="heading">Login</p>
              <div class="field">
                <i class="fas fa-envelope input-icon"></i>
                <input
                  class="input-field"
                  placeholder="Email"
                  autocomplete="off"
                />
              </div>
              <div class="field">
                <i class="fas fa-lock input-icon"></i>
                <input
                  type="password"
                  class="input-field"
                  placeholder="Password"
                />
              </div>
              <p class="forgot">Forgot Password?</p>
              <div class="btn">
                <button class="button1">Login</button>
              </div>
              <div class="signup">
                <button class="button2">Signup As Student</button>
                <button class="button3">Signup As Admin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
