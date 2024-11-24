import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextProvider } from "../contextApi/ContextApi";
import "../css/LoginPage.css";

const LoginPage = () => {
  const {
    loginInputs,
    LoginHandle,
    onChangeHandle,
    loginError,
    loginSuccess,
    setLoginError,
    setLoginSuccess,
    loginSetInputs,
  } = useContext(contextProvider);

  useEffect(() => {
    // Reset the login error, success state, and input fields when the component mounts.
    setLoginError("");
    setLoginSuccess(false);
    loginSetInputs({ email: "", pass: "" });
  }, []);

  return (
    <>
      <div className="mainPage">
        <div className="Right-Container">
          <div className="RC-first">
            <img src="./images/favicon.jpg" />
            <h4>GEEKSYNERGY</h4>
          </div>
          <div className="RC-second">
            <h4>
              We help enterprises and fast growing startups scale by automating
              the business processes.
            </h4>
          </div>
        </div>
        <div className="Left-Container">
          <span className="error-message">{loginError}</span>
          {loginSuccess && (
            <div className="success-message">Login successful!</div>
          )}

          <form>
            <input
              type="text"
              placeholder="email or phone number"
              name="email"
              value={loginInputs.email}
              onChange={onChangeHandle}
            />
            <input
              type="password"
              placeholder="password"
              name="pass"
              value={loginInputs.pass}
              onChange={onChangeHandle}
            />
            <button onClick={LoginHandle}>log in</button>
            <Link to="/forgot" className="forgotP">
              forgot password?
            </Link>
            <hr></hr>
            <Link to="/signup" className="registeration">
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
