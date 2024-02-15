import { urlHead } from "./extrapropertise";

export const fetchHelper = async (endpoint, method, data) => {
    try {
        var response = await fetch(`http://localhost:3000/${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
            mode: 'cors',
        })
        const responseJson = await response.json();
        if (response.ok) return responseJson;
        var errorMessage =
            "Server error:" +
            response.status +
            " Message: " +
            responseJson.message;

        return Promise.reject(errorMessage);
    } catch (e) {
        return Promise.reject(e.message)
    }
}