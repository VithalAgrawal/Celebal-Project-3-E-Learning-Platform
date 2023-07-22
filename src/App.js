import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CourseCatalog from './components/CourseCatalog';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const auth = getAuth(firebaseConfig.firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
      } else {
        setLoggedIn(false);
        localStorage.setItem('loggedIn', false);
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth(firebaseConfig.firebaseApp);
      await auth.signOut();
      setLoggedIn(false);
      localStorage.setItem('loggedIn', false);
      // Handle successful logout (e.g., redirect to the homepage)
      window.location.href = '/';
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div>
            <Link to="/" className="navbar-brand">
              <span className="logo-text">CSI eLearn</span>
            </Link>
          </div>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav navbar-nav">
              {loggedIn ? (
                <>
                  <li className="nav-item">
                    <Link to="/courses" className="nav-link">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={handleLogout} className="btn btn-outline-primary">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<CourseCatalog />} />
          {!loggedIn && <Route path="/login" element={<Login />} />}
          {!loggedIn && <Route path="/signup" element={<Signup />} />}
        </Routes>
      </div>
    </Router>
  );
};


export default App;
