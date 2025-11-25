import { Outlet, Navigate } from "react-router-dom"


const DeveloperRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("Role");
    const allowedRoles = ["FRONTEND DEVELOPER", "BACKEND DEVELOPER", "DEVOPS", "APP DEVELOPER"];

    return (token && allowedRoles.includes(role)) ? <Outlet /> : <Navigate to={"/"} />;
}

export default DeveloperRoute