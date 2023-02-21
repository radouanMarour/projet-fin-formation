import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';
import client from '../../axiosClient';
import { useStateContext } from '../../context/ContextProvider';

function Login() {
    const { setUser } = useStateContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const body = {
            email: form.email,
            password: form.password,
        }

        try {
            setLoading(true)
            const { data: { user } } = await client.post('/login', body);
            setUser(user);
            user && navigate(`/${user?.role}`)
            // console.log(data);
            setLoading(false)
        } catch (err) {
            console(err.response.data.errors)
        }
    }

    return (
        <div className='user__form animated fadeInDown'>
            <h1>Login</h1>
            <form onSubmit={handleForm} className="login__form">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className='form-control'
                        value={form.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <input
                        type="password"
                        name="password"
                        className='form-control'
                        value={form.password}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                    {loading ? <ImSpinner9 /> : 'Login'}
                </button>
            </form>
        </div>
    );
}

export default Login;