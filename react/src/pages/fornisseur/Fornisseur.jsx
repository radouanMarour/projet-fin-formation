import React from 'react'
import { Outlet } from 'react-router-dom';
import FornisseurSidebar from '../../components/FornisseurSidebar';

function Fornisseur() {

    return (
        <div className='wrapper'>
            <FornisseurSidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Fornisseur;