// src/apis/configs/axiosConfigs.ts

import axios, { AxiosInstance, AxiosError } from 'axios';

// Typing the function to return an AxiosInstance
const client = (isAuthorised: boolean): AxiosInstance => {
    return axios.create({
        baseURL: process.env.BASE_URL,
        withCredentials: isAuthorised,
        headers: {
            "Custom-Language": "pl",
            "Content-Type": "application/json",
        },
    });
};

// Defining the error handler with a proper type for the error
const errorHandler = (error: AxiosError): Promise<AxiosError> => {
    const statusCode = error.response?.status;

    // Logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
      console.error(error);
    }

    return Promise.reject(error);
};

// Registering the custom error handler to the "api" axios instance
// Note: You only need to register the interceptor once for each instance,
// so this structure is modified from the original to avoid duplication.
const setupInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.response.use(undefined, errorHandler);
};

// Create two instances of axios, one for authorized and one for unauthorized requests
const authorizedApi = client(true);
const unauthorizedApi = client(false);

// Setup interceptors for both instances
setupInterceptors(authorizedApi);
setupInterceptors(unauthorizedApi);

// Exporting both instances if needed
export { authorizedApi, unauthorizedApi };

// Or if you prefer, export a function that selects the instance based on the authorization flag
export default client;
