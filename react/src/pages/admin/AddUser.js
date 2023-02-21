import React, { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import client from '../../axiosClient';

function AddUser() {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        phone: '',
        address: '',
        rate: '',
        role: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleForme = async (e) => {
        e.preventDefault();
        const body = {
            name: form.name,
            email: form.email,
            password: form.password,
            city: form.city,
            phone: form.phone,
            address: form.address,
            rate: form.rate,
            role: form.role
        }

        try {
            setLoading(true)
            const { data } = await client.post('/add_user', body);
            console.log(data);
            setLoading(false)
        } catch (err) {
            setErrors(err.response.data.errors)
        }
    }

    return (
        <div className='user__form animated fadeInDown'>
            <h1>New User</h1>
            <form onSubmit={handleForme} className="register__form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        className='form-control'
                        value={form.name}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className='form-control'
                        value={form.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className='form-control'
                        value={form.password}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="phone"
                        name="phone"
                        className='form-control'
                        value={form.phone}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="city"
                        name="city"
                        className='form-control'
                        value={form.city}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        className='form-control'
                        value={form.address}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="rate">Rate</label>
                    <input
                        type="text"
                        name="rate"
                        className='form-control'
                        value={form.rate}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <input
                        type="text"
                        name="role"
                        className='form-control'
                        value={form.role}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                    {loading ? <ImSpinner9 /> : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default AddUser