import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import loginIcon from '../../assets/login_icon.png';

const Login = ({ setUserFullName }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '', userType: 'normal' });
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await axios.post('http://localhost:3001/login', formData);
            if (response.data.message === 'Login successful') {
                const { userFullName, userEmail } = response.data;
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userFullName', userFullName);
                sessionStorage.setItem('userEmail', userEmail);
                setUserFullName(userFullName);
                navigate('/'); // Redirect to home page after successful login
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="bg-dark" style={{ minHeight: '100vh' }}>
            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src={loginIcon}
                                        alt="Login Icon"
                                        className="img-fluid"
                                        style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Login</h3>

                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="userType" className="form-label me-3">User Type:</label>
                                                <select
                                                    name="userType"
                                                    value={formData.userType}
                                                    onChange={handleChange}
                                                    className="form-select"
                                                    required
                                                >
                                                    <option value="normal">Normal User</option>
                                                    <option value="ragpicker">Rag Picker</option>
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="email" className="form-label me-3">Email Address:</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="password" className="form-label me-3">Password:</label>
                                                <div className="input-group">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="Enter your password"
                                                        required
                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        {showPassword ? 'Hide' : 'Show'}
                                                    </button>
                                                </div>
                                            </div>

                                            {error && <p className="text-danger">{error}</p>}

                                            <div className="row mb-3">
                                                <div className="col-6">
                                                    <button type="submit" className="btn btn-primary btn-lg">
                                                        Login
                                                    </button>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <Link to="/signup" className="btn btn-link">Don't have an account? Register here</Link>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <Link to="/forgot-password" className="btn btn-link">Forgot password?</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
