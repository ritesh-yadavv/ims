import { Outlet, Navigate } from "react-router-dom"


const SalesSuperVisiorRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("Role");

    return (token && role == "BUSINESS DEVELOPMENT MANAGER") ? <Outlet /> : <Navigate to={"/"} />
}



export default SalesSuperVisiorRoute


