import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Authentication() {
    const auth_token = sessionStorage.getItem("access_token") || ""; // Check for existing token
    const navigateTo = useNavigate();
    const currentLocation = useLocation().pathname;

    useEffect(() => {
        if (auth_token === "") { // Check if token is missing
            if (currentLocation !== "/login") { 
                navigateTo('/login')
            }
        } else {
            var decodedAccess = jwt_decode(auth_token);

            if (decodedAccess.exp * 1000 <= Date.now()) { 
                if (currentLocation !== "/login") { // Redirect to login if expired
                    navigateTo('/login')
                }
            } else {
                if (currentLocation === "/login") {
                    navigateTo('/admin')
                }
            }
        }
    }, [])

    return null
}
export default Authentication;
