import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("Role");
  return (token && role ==="HR MANAGER") ? <Outlet /> : <Navigate to={"/"} />;

}

export default PrivateRoute