// src/core/api/authApi.js
import API from "./API";

export const loginUser = async (credentials) => {
  try {
    const response = await API.post("/login", credentials);
    
    // Save user and token
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Logout failed:", error.response?.data || error.message);
    throw error;
  }
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};