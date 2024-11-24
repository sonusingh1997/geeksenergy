import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import { Routes, Route } from "react-router-dom";
import LogoutPage from "./components/LogoutPage";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegistrationPage />}></Route>
        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route path="/logout" element={<LogoutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

//usage
// import { Practice } from "./practice_react/Practice";
// function App() {
//   return (
//     <div>
//       <h1>Higher-Order Component Example</h1>
//       <Practice/>
//     </div>
//   );
// }

// export default App;
