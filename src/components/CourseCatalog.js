import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseCatalog = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Simulate API call to fetch courses
        // Replace this with actual API call
        // For demonstration purposes, we'll use mock data
        const mockCourses = [
            { id: 1, title: 'Introduction to React', price: 10, Image: 'https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg' },
            { id: 2, title: 'JavaScript Fundamentals', price: 15, Image: 'https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg' },
            { id: 3, title: 'Python for Beginners', price: 20, Image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png' },
        ];
        setCourses(mockCourses);
    }, []);

    return (
        <div>
            {
                localStorage.getItem('loggedIn') === 'true' && (
                    <div className="mt-4">
                        <h2>Course Catalog</h2>
                        {courses.map((course) => (
                            <div key={course.id} className="card mb-5">
                                <div className="card-body">
                                    <div>
                                        <div>
                                            <img src={course.Image} className="card-img-top mb-4" alt={course.title} />
                                        </div>
                                        <div>
                                            <h3 className="card-title">{course.title}</h3>
                                            <p className="card-text mb-4">Price: ${course.price}</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-primary">Enroll</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
            {
                localStorage.getItem('loggedIn') === 'false' && (
                    <div className="mt-4">
                        <h2>Login or Signup to see the courses!</h2>
                        <Link to="/login" className="btn btn-lg btn-primary m-4">Login</Link>
                        <Link to="/signup" className="btn btn-lg btn-secondary m-4">Sign Up</Link>
                    </div>
                )
            }
        </div>
    );
};

export default CourseCatalog;
