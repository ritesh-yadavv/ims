import { Outlet, Navigate } from "react-router-dom"


const CseRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("Role");

    return (token && role == "CUSTOMER SUPPORT EXECUTIVE") ? <Outlet /> : <Navigate to={"/"} />
}



export default CseRoute
