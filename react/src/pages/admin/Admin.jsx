import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import { useStateContext } from '../../context/ContextProvider';

function Admin() {
    const { user } = useStateContext()

    if (!user || user.role !== "admin") {
        return <Navigate to="/login" />;
    }
    return (
        <div className="wrapper">
            <AdminSidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Admin;