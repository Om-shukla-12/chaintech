import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
    const { user, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            setFormData({ name: user.name, email: user.email });
        }
    }, [user, navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const result = updateProfile(formData);
        if (result.success) {
            setIsEditing(false);
            setMessage('Profile updated successfully!');
            setTimeout(() => setMessage(''), 3000);
        }
    };

    if (!user) return null;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-white d-flex justify-content-between align-items-center">
                            <h3 className="mb-0">My Profile</h3>
                            {!isEditing && (
                                <button className="btn btn-outline-primary btn-sm" onClick={() => setIsEditing(true)}>
                                    Edit Profile
                                </button>
                            )}
                        </div>
                        <div className="card-body">
                            {message && <div className="alert alert-success">{message}</div>}

                            {isEditing ? (
                                <form onSubmit={handleUpdate}>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email (Read-only)</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={formData.email}
                                            disabled
                                        />
                                        <small className="text-muted">Email cannot be changed for this demo</small>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                                    </div>
                                </form>
                            ) : (
                                <div className="row">
                                    <div className="col-sm-3 fw-bold">Name:</div>
                                    <div className="col-sm-9 mb-3">{user.name}</div>

                                    <div className="col-sm-3 fw-bold">Email:</div>
                                    <div className="col-sm-9 mb-3">{user.email}</div>

                                    <div className="col-sm-3 fw-bold">Joined:</div>
                                    <div className="col-sm-9">Just now :)</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
