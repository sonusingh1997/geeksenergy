import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const contextProvider = createContext();

const ContextApi = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Login State
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [loginInputs, loginSetInputs] = useState({
    email: "",
    pass: "",
  });

  // Registration State
  const [registrationInputs, setregistrationInputs] = useState({
    name: "",
    email: "",
    pass: "",
    profession: "",
    mobile: "",
  });

  const [values, setValues] = useState(() => {
    const user = localStorage.getItem("users");
    return user ? JSON.parse(user) : [];
  });
  const [error, setError] = useState("");

  // Handle user registration
  const HandleInputValue = (e) => {
    const { name, value } = e.target;
    setregistrationInputs({ ...registrationInputs, [name]: value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    // Validate registration data
    const { name, email, profession, pass, mobile } = registrationInputs;
    if (name && email && profession && pass && mobile) {
      setValues([...values, { ...registrationInputs, id: uuidv4() }]);
      navigate("/");
      setregistrationInputs({
        name: "",
        email: "",
        pass: "",
        profession: "",
        mobile: "",
      });
      setError(""); // Reset the error state on successful submission
    } else {
      setError("All fields required with the right credentials :)");
    }
  };

  // Handle user login
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    loginSetInputs({ ...loginInputs, [name]: value });
  };
  const LoginHandle = (e) => {
    e.preventDefault();
    let matchedUser = null; // Store the matched user data
    if (values.length === 0) {
      setLoginError("No users registered. Please sign up first.");
    } else {
      let loginSuccessful = false;
      // Check if the input credentials match any user in the 'values' array
      values.forEach((element) => {
        if (
          loginInputs.email === element.email &&
          loginInputs.pass === element.pass
        ) {
          loginSuccessful = true;
          matchedUser = element;
          setLoginError("");
        }
      });
      if (loginSuccessful) {
        setLoginSuccess(true);
        localStorage.setItem("isLoggedIn", "true"); // Persist the login state
        localStorage.setItem("currentUser", JSON.stringify(matchedUser)); // Persist the current user data
        setTimeout(() => {
          navigate(`/dashboard?name=${matchedUser.name}`);
        }, 1000);
      } else {
        setLoginError("Incorrect email or password.");
      }
    }
  };

  // Handle user logout
  const HandleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear the authentication state
    localStorage.removeItem("currentUser"); // Clear the current user data
    setLoginSuccess(false);
    navigate("/logout");
  };
  // store registration data in localstorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(values));
  }, [values]);

  // Reset the error state when navigating away from the registration page
  useEffect(() => {
    if (location.pathname !== "/register") {
      setError("");
    }
  }, [location.pathname]);

  return (
    <contextProvider.Provider
      value={{
        registrationInputs,
        HandleInputValue,
        onSubmitHandle,
        error,
        values,
        loginError,
        loginSuccess,
        onChangeHandle,
        LoginHandle,
        loginInputs,
        setLoginError,
        loginSetInputs,
        setLoginSuccess,
        HandleLogout,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default ContextApi;
