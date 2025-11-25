import { Outlet, Navigate } from "react-router-dom"


const SalesRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("Role");

    return (token && role == "BUSINESS DEVELOPMENT EXECUTIVE") ? <Outlet /> : <Navigate to={"/"} />
}



export default SalesRoute