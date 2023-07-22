import React from 'react';

const handlesignup = () => {
    window.location.href = '/signup';
};
const handlelogin = () => {
    window.location.href = '/login';
};
const handlecourse = () => {
    window.location.href = '/courses';
};

const Home = () => {
    return (
        <div className="text-center">
            <header className="hero bg-primary text-white py-5">
                <h1 className="hero-title display-4 mb-4">Welcome to the eLearning Platform</h1>
                <p className="hero-subtitle lead">Unlock your potential with our extensive course catalog.</p>
            </header>
            <section className="featured-courses py-5 bg-light">
                <h2 className="section-title mb-4">Featured Courses</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg" className="card-img-top" alt="React" />
                            <div className="card-body">
                                <h5 className="card-title">Introduction to React</h5>
                                {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg" className="card-img-top" alt="Javascript" />
                            <div className="card-body">
                                <h5 className="card-title">JavaScript Fundamentals</h5>
                                {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" className="card-img-top" alt="Python" />
                            <div className="card-body">
                                <h5 className="card-title">Python for Beginners</h5>
                                {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="call-to-action bg-primary text-white py-5">
                <h2 className="section-title mb-4">Get Started Today!</h2>
                {
                    localStorage.getItem('loggedIn') === 'false' && (
                        <div>
                            <pre className="cta-text lead">Already have an account?  <button className="btn btn-lg btn-outline-light mr-2" onClick={handlelogin}>Login</button>
                            </pre>
                            <pre className="cta-text lead">Sign up now to explore our wide range of courses. <button className="btn btn-lg btn-secondary" onClick={handlesignup}>Sign Up</button>
                            </pre>
                        </div>    
                    )
                }
                {         
                    localStorage.getItem('loggedIn') === 'true' && (
                        <div>
                            <p className="cta-text lead">Explore courses now!</p>
                            <button className="btn btn-lg btn-secondary" onClick={handlecourse}>Courses</button>
                        </div>
                    )
                }
            </section >
            <footer className="footer bg-dark text-white py-3">
                <p>&copy; {new Date().getFullYear()} Vithal's CSI eLearn. All rights reserved.</p>
            </footer>
        </div >
    );
};

export default Home;
