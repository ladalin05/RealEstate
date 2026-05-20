const config = {
  app: {
    url: process.env.REACT_APP_BASE_URL || "http://localhost:3000",
    name: process.env.REACT_APP_APP_NAME || "React App",
    api: `${process.env.REACT_APP_BASE_URL?.replace(/\/+$/,'')}/api`,
  },
};

export default config;