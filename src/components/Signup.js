import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth(firebaseConfig.firebaseApp);
            await createUserWithEmailAndPassword(auth, email, password);
            // Handle successful signup (e.g., redirect to a logged-in area)
            setSignedUp(true);
            // alert('Signup successful');
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <FormContainer title="Signup" handleSubmit={handleSignup}>
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
                        Signup
                    </button>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </FormContainer>
        </div>
    );
};

export default Signup;