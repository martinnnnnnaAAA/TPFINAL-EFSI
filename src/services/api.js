// Asegúrate de que esta URL coincida con donde está corriendo tu servidor de TP5-DAI-5to
const API_URL = 'http://localhost:3000/api';

const handleResponse = async (response) => {
    if (!response.ok) {
        if (response.status === 404) {
            return { collection: [], pagination: { total: 0 } };
        }
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
    }
    const text = await response.text();
    return { success: response.ok, message: text };
};

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Error en login:', error);
        return { success: false, error: error.message };
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return await handleResponse(response);
    } catch (error) {
        console.error('Error en registro:', error);
        return { success: false, error: error.message };
    }
};

export const getEvents = async () => {
    try {
        const response = await fetch(`${API_URL}/event`);
        const data = await handleResponse(response);
        return data;
    } catch (error) {
        console.error('Error obteniendo eventos:', error);
        return { collection: [], pagination: { total: 0 } };
    }
};

export const getEventById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/event/${id}`);
        return await handleResponse(response);
    } catch (error) {
        console.error('Error obteniendo evento:', error);
        return null;
    }
};