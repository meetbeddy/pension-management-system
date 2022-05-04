import React from "react";
import LoginRequired from "./LoginRequired";
import AccessDenied from "./AccessDenied";
import { Route } from "react-router-dom";

const renderFunction = (
  props,
  Component,
  user,
  accessLevel,
  RequiredAccessLevel
) => {
  switch (user) {
    case null:
      return <LoginRequired />;

    default:
      if (!RequiredAccessLevel || accessLevel >= RequiredAccessLevel)
        return <Component {...props} />;
      else return <AccessDenied />;
  }
};

const PrivateRoute = ({
  user,
  accessLevel,
  RequiredAccessLevel,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        renderFunction(props, Component, user, accessLevel, RequiredAccessLevel)
      }
    />
  );
};

export default PrivateRoute;

// const renderFunction = (children, user, RequiredAccessLevel) => {
//   switch (user) {
//     case null:
//       return <LoginRequired />;

//     default:
//       if (
//         !RequiredAccessLevel ||
//         user?.user?.accessLevel >= RequiredAccessLevel
//       )
//         return <Dashboard user={user}>{children}</Dashboard>;
//       else return <AccessDenied />;
//   }
// };

// const PrivateRoute = (props) => {
//   const { user, RequiredAccessLevel, children } = props;
//   return renderFunction(children, user, RequiredAccessLevel);
// };

// export default PrivateRoute;
