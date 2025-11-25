import { Outlet, Navigate } from 'react-router-dom'

const AdminRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("User-Role");
    return (token && role === "ADMIN") ? <Outlet /> : <Navigate to={"/"} />;

}

export default AdminRoute