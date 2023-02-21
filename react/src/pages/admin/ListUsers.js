import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import client from '../../axiosClient';
import { parseDate } from '../../helpers';

function ListUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        try {
            setLoading(true)
            const { data: { users } } = await client.get('/users');
            setUsers(users);
            console.log(users);
            setLoading(false)
        } catch (err) {
            console(err.response.data.errors)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                <h1>Users</h1>
                <Link className="btn-add" to="/admin/new-user">Add new</Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Rate</th>
                            <th>Role</th>
                            <th>created_at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {loading &&
                        <tbody>
                            <tr>
                                <td colSpan="5" class="text-center">
                                    Loading...
                                </td>
                            </tr>
                        </tbody>
                    }
                    {!loading &&
                        <tbody>

                            {users.map(u => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.city}</td>
                                    <td>{u.address}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.rate}</td>
                                    <td>{u.role}</td>
                                    <td>{parseDate(u.created_at)}</td>
                                    <td>
                                        <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link>
                                        &nbsp;
                                        <button className="btn-delete">Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default ListUsers