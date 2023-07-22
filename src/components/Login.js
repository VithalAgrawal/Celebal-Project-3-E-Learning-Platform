import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const FormContainer = ({ title, handleSubmit, children }) => {
    return (
        <div className="mt-4">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    );
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth(firebaseConfig.firebaseApp);
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful login (e.g., store user data in local storage and redirect to a logged-in area)
            console.log('Login successful');
            setLoggedIn(true);
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <FormContainer title="Login" handleSubmit={handleLogin}>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <p>
                Don't have an account? <Link to="/signup">Signup</Link>
            </p>
        </FormContainer>
    );
};

export default Login;
