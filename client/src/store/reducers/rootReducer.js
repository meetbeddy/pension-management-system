import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userProfileReducer from "./userProfileReducer";
import notificationReducer from "./notificationReducer";
import adminReducer from "./adminReducer";

const appReducer = combineReducers({
  auth: authReducer,
  userProfile: userProfileReducer,
  notification: notificationReducer,
  admin: adminReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
export default rootReducer;
