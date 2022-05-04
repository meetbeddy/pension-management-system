import React, { useEffect } from "react";
import "./App.css";
import "./cart.css";
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
import RsaRequest from "./admin/rsa/RsaRequest";
import ProfileOverView from "./admin/rsa/ProfileOverView";
import Bio from "./user/Bio";
import AddInvestment from "./admin/investment/AddInvestment";
import ViewInvestments from "./admin/investment/ViewInvestments";
import ViewEmployees from "./admin/employees/ViewEmployees";
import EmployeeProfile from "./admin/employees/EmployeeProfile";

function App() {
  const user = useSelector((state) => state.auth.user);
  const userProfile = useSelector((state) => state.userProfile.userProfile);

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
          <PrivateRoute
            exact
            user={user}
            path="/dashboard/rsa-request"
            component={RsaRequest}
          />
          <PrivateRoute
            exact
            user={user}
            accessLevel={userProfile?.accessLevel}
            RequiredAccessLevel={MODERATOR_LEVEL}
            path="/dashboard/confirmuser/:id"
            component={ProfileOverView}
          />
          <PrivateRoute
            exact
            user={user}
            accessLevel={userProfile?.accessLevel}
            RequiredAccessLevel={MODERATOR_LEVEL}
            path="/dashboard/employees"
            component={ViewEmployees}
          />
          <PrivateRoute
            exact
            user={user}
            accessLevel={userProfile?.accessLevel}
            RequiredAccessLevel={MODERATOR_LEVEL}
            path="/dashboard/employee/:id"
            component={EmployeeProfile}
          />
          <PrivateRoute
            exact
            user={user}
            accessLevel={userProfile?.accessLevel}
            RequiredAccessLevel={MODERATOR_LEVEL}
            path="/dashboard/add-investment"
            component={AddInvestment}
          />
          <PrivateRoute
            exact
            user={user}
            accessLevel={userProfile?.accessLevel}
            RequiredAccessLevel={MODERATOR_LEVEL}
            path="/dashboard/view-investment"
            component={ViewInvestments}
          />
          <PrivateRoute
            exact
            user={user}
            accessLevel={userProfile?.accessLevel}
            RequiredAccessLevel={USER_LEVEL}
            path="/dashboard/rsa/bio"
            component={Bio}
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
