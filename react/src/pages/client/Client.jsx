import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import ClientSidebar from '../../components/ClientSidebar';
import { useStateContext } from '../../context/ContextProvider';

function Client() {
    const { user } = useStateContext()

    if (!user || user.role !== "client") {
        return <Navigate to="/login" />;
    }

    return (
        <div className='wrapper'>
            <ClientSidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Client;