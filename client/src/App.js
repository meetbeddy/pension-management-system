import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import {
  ADMIN_LEVEL,
  MODERATOR_LEVEL,
  USER_LEVEL,
} from "./components/common/accessLevel";
import { useSelector } from "react-redux";
import LandingPage from "./containers/landing/Index";
import Dashboard from "./containers/dashboard/Dashboard";
import Auth from "./components/auth/Index";
import RegisterRsa from "./user/RegisterRsa";

function App() {
  const user = useSelector((state) => state.auth.user);
  // const [user, setUser] = React.useState();
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  // console.log(JSON.parse(localStorage.getItem("profile")));
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          exact
          path="/auth/signin"
          element={<Auth type="signin" user={user} />}
        />
        <Route
          path="/auth/register"
          element={<Auth type="register" user={user} />}
        />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route
          path="/dashboard/rsa/register"
          element={
            <PrivateRoute user={user} RequiredAccessLevel={USER_LEVEL}>
              {" "}
              <RegisterRsa />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
