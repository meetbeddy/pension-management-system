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

export const localUrl = "http://localhost:5000";
export const baseUrl = "https://desolate-woodland-08640.herokuapp.com";
