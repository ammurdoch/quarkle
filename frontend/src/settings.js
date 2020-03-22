const settings = {
  apiUrl: process.env.API_URL || "",
  apiWsUrl: process.env.API_WS_URL || "",
  env: process.env.NODE_ENV || "development"
};

export default settings;
