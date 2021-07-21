import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../context/AuthContext";

export default function Routes(){

    const { signed } = useAuth();

    return signed ? <AppRoutes /> : <AuthRoutes/>
          
}