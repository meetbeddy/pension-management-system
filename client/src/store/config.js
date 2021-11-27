const config = {
  headers: {
    Content_Type: "application/json",
  },
};

export const getConfig = (getState) => {
  let user = getState().auth.user;
  if (user.token) {
    config.headers["x-auth-token"] = user.token;
    return config;
  }
};

export const baseUrl = "http://localhost:5000";
