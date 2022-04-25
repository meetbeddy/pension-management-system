import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
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

  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route
        path="/dashboard"
        render={() => (user ? <Dashboard user={user} /> : <LandingPage />)}
      />

      <Route>
        <Switch>
          <Route
            exact
            path="/auth/signin"
            render={() => <Auth type="signin" user={user} />}
          />
          <Route
            exact
            path="/auth/register"
            render={() => <Auth type="register" user={user} />}
          />

          <PrivateRoute
            exact
            user={user}
            path="/dashboard/rsa/register"
            component={RegisterRsa}
          />
        </Switch>
      </Route>

      {/* <Switch>
        <Route
          path="/dashboard/rsa/register"
          element={
            <PrivateRoute user={user} RequiredAccessLevel={USER_LEVEL}>
              {" "}
              <RegisterRsa />
            </PrivateRoute>
          }
        />
      </Switch> */}
    </div>
  );
}

export default App;
