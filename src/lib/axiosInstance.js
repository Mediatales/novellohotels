import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use an environment variable for the base URL
    timeout: 10000, // Set a timeout for API calls (optional)
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
    (config) => {
        // Add authorization token or other headers if needed
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally
        if (error.response?.status === 401) {
            // For example, redirect to login if unauthorized
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
