import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import signup_icon from '../../assets/signup_rag.png';

const JoinRag = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    profilePicture: null,
    city: '',
    state: '',
    country: '',
    address: '',
    contactNumber: '',
    gender: '', // Added gender field
    upiId: '', // Added UPI ID field for joining rag
    dateOfBirth: '' // Added date of birth field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
  
    try {
      const response = await axios.post('http://localhost:3001/joinRagpicker', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="bg-dark">
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <img
                    src={signup_icon}
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Join as Rag Picker</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label htmlFor="fullName" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="example@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="profilePicture" className="form-label">
                            Profile Picture
                          </label>
                          <input
                            type="file"
                            name="profilePicture"
                            onChange={handleFileChange}
                            className="form-control"
                            accept="image/*"
                            required
                          />
                          {formData.profilePicture && (
                            <img
                              src={URL.createObjectURL(formData.profilePicture)}
                              alt="Profile"
                              className="preview-image mt-2"
                              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                          )}
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your city"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your state"
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your country"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your Address"
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label htmlFor="contactNumber" className="form-label">
                            Contact Number
                          </label>
                          <input
                            type="text"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your contact number"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="upiId" className="form-label">
                            UPI ID
                          </label>
                          <input
                            type="text"
                            name="upiId"
                            value={formData.upiId}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your UPI ID"
                            required
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label htmlFor="dateOfBirth" className="form-label">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="form-check form-check-inline">
                            <label className="form-label me-3">Gender:</label><br />
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="femaleGender"
                                value="female"
                                onChange={handleChange}
                                required
                              />
                              <label className="form-check-label" htmlFor="femaleGender">
                                Female
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="maleGender"
                                value="male"
                                onChange={handleChange}
                                required
                              />
                              <label className="form-check-label" htmlFor="maleGender">
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="otherGender"
                                value="other"
                                onChange={handleChange}
                                required
                              />
                              <label className="form-check-label" htmlFor="otherGender">
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <button type="submit" className="btn btn-warning btn-lg">
                            Join as Rag Picker
                          </button>
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

export default JoinRag;
