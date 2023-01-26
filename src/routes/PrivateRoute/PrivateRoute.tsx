import React from "react";
import {isAuthenticated} from "@service/isAuthenticated.service";
import {Navigate} from "react-router";

export const PrivateRoute = ({children}: any) => {
    if (!isAuthenticated()) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login"/>;
    }

    return children;
}
