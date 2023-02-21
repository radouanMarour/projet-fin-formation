import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/auth/Login';
import Admin from './pages/admin/Admin';
import AdminHome from './pages/admin/Home';
import Client from './pages/client/Client';
import ClientHome from './pages/client/Home';
import Fornisseur from './pages/fornisseur/Fornisseur';
import FornisseurHome from './pages/fornisseur/Home';
import Livreur from './pages/livreur/Livreur';
import LivreurHome from './pages/livreur/Home';
import AddUser from './pages/admin/AddUser';
import ListUsers from './pages/admin/ListUsers';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="admin" element={<Admin />}>
                    <Route index element={<AdminHome />} />
                    <Route path="new-user" element={<AddUser />} />
                    <Route path="users" element={<ListUsers />} />
                </Route>
                <Route path="client" element={<Client />}>
                    <Route index element={<ClientHome />} />
                </Route>
                <Route path="fournisseur" element={<Fornisseur />}>
                    <Route index element={<FornisseurHome />} />
                </Route>
                <Route path="livreur" element={<Livreur />}>
                    <Route index element={<LivreurHome />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;

