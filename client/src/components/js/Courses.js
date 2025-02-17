import React, { useState, useEffect } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.error(err));
    }, []);

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Courses</h1>
            <input
                type="text"
                placeholder="Search for a course..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredCourses.map(course => (
                    <li key={course._id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;