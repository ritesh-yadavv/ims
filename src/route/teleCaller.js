import { Outlet, Navigate } from "react-router-dom"


const TeleCallerRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("Role");

    return (token && role == "TELECALLER EXECUTIVE") ? <Outlet /> : <Navigate to={"/"} />
}



export default TeleCallerRoute