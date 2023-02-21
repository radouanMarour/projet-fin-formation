import React from 'react'
import { Outlet } from 'react-router-dom';
import LivreurSidebar from '../../components/LivreurSidebar';

function Livreur() {

    return (
        <div className='wrapper'>
            <LivreurSidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Livreur;