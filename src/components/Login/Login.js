import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: {pathName: '/'}}

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [error, setError] = useState('');

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL};
                // set into localStorage
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
			<div className="container">
				<div className="text-center m-5 p-5">
					<h1 className="m-5">Login</h1>
					<button
						onClick={handleGoogleSignIn}
						className="btn btn-light border border-dark round rounded-pill"
					>
						<img src="https://img.icons8.com/color/48/000000/google-logo.png" />
						Continue with Google
					</button>
					<p className="text-center text-danger m-5">{error}</p>
				</div>
			</div>
		);
};

export default Login;
