import React, { useContext } from "react";
import "../css/RegistrationPage.css";
import { contextProvider } from "../contextApi/ContextApi";

const RegistrationPage = () => {
  const { HandleInputValue, registrationInputs, onSubmitHandle, error } =
    useContext(contextProvider);

  return (
    <main>
      <h3 id="getValue">{error}</h3>
      <div className="Left-Container">
        <form onSubmit={onSubmitHandle}>
          <h3
            style={{
              textAlign: "center",
              color: "#0000006b",
              fontSize: "27px",
            }}
          >
            Sign up
          </h3>
          <input
            type="text"
            placeholder="enter name"
            name="name"
            onChange={HandleInputValue}
            value={registrationInputs.name}
          />
          <input
            type="text"
            placeholder="email or phone number"
            name="email"
            onChange={HandleInputValue}
            value={registrationInputs.email}
          />
          <input
            type="Password"
            placeholder="password"
            name="pass"
            onChange={HandleInputValue}
            value={registrationInputs.pass}
          />
          <div className="profession">
            <p>profession:</p>
            <select id="dropdown" name="profession" onChange={HandleInputValue}>
              <option value="engineer">Engineer</option>
              <option value="physician">Physician</option>
              <option value="pharmacists">Pharmacists</option>
              <option value="accountant">Accountant</option>
              <option value="socialworker">social worker</option>
              <option value="pshyclogist">pshyclogist</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="mobile"
            name="mobile"
            onChange={HandleInputValue}
            value={registrationInputs.mobile}
          />
          <button>Sign Up</button>
        </form>
      </div>
    </main>
  );
};
export default RegistrationPage;
