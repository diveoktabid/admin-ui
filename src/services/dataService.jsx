import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
    return response.data.data[0];
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

export const expensesService = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token ? "exists" : "missing");

    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
    
    console.log("Raw response:", response);
    console.log("Response data:", response.data);
    
    // API mengembalikan array langsung, bukan object dengan property data
    return response.data;
  } catch (error) {
    console.error("Expenses service error:", error);
    console.error("Error response:", error.response);
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};