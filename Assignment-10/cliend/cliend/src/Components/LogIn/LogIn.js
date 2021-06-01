import React, { useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import image from '../../image/download.png';
 
firebase.initializeApp(firebaseConfig);

 

const LogIn = () => {
    const{error,setError} = useState("");
    const history = useHistory();
    const location = useLocation();
    console.log(location);

    let {from} = location.state || {from: {pathname:'/'} };

const handleSignInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();  
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const user = result.user;
    const loggedInUser = {name:user.displayName,email:user.email,img:user.photoURL};
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    history.replace(from.pathname);

  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
    
    
  });
    

     }
    
    return (
        <div className='container mt-5 d-flex justify-content-center '>
            <div>
                <div className="card">
                    <div className="card-body justify-content-center">
                         <img className="image"src={image}alt=""/>
                        <h5 className="card-title title">Log In</h5>
                        <input className="d-flex justify-content-end btn btn-success rounded-pill" onClick={handleSignInGoogle} type="submit" value="Continue With Google" />
                    </div>
                </div>
            </div>
            <p>{error}</p>
        </div>
    );
};

export default withRouter(LogIn);