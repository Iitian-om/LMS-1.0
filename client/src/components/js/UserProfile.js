import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err));
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <img src={user.profilePicture} alt="Profile" />
            <p>Username: {user.username}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <h2>Enrolled Courses</h2>
            <ul>
                {user.enrolledCourses.map(course => (
                    <li key={course._id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfile;